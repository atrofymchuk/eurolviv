#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -f .env ]]; then
  # shellcheck disable=SC1091
  source .env
fi

SITE_URL="${SITE_URL:-https://eurohotel.pp.ua}"
WP_HOME_URL="${WP_HOME_URL:-${SITE_URL%/}/blog}"
WP_ADMIN_USER="${WP_ADMIN_USER:-admin}"
WP_ADMIN_PASSWORD="${WP_ADMIN_PASSWORD:-admin123}"
WP_ADMIN_EMAIL="${WP_ADMIN_EMAIL:-info@eurohotel.lviv.ua}"
ENABLE_HTTPS="${ENABLE_HTTPS:-true}"

compose_args=(docker compose)
if [[ "${ENABLE_HTTPS}" == "true" ]]; then
  compose_args+=(-f docker-compose.yml -f docker-compose.vps.yml)
else
  compose_args+=(-f docker-compose.yml -f docker-compose.local.yml)
fi

run_compose() {
  "${compose_args[@]}" "$@"
}

echo "Starting database and WordPress..."
run_compose up -d db wordpress

echo "Waiting for MariaDB..."
for _ in $(seq 1 30); do
  if run_compose exec -T db healthcheck.sh --connect --innodb_initialized >/dev/null 2>&1; then
    break
  fi
  sleep 2
done

echo "Waiting for WordPress files..."
sleep 5

if run_compose --profile tools run --rm wpcli wp core is-installed >/dev/null 2>&1; then
  echo "WordPress is already installed. Syncing URLs to ${WP_HOME_URL}..."
  run_compose --profile tools run --rm wpcli wp option update home "${WP_HOME_URL}"
  run_compose --profile tools run --rm wpcli wp option update siteurl "${WP_HOME_URL}"
else
  echo "Installing WordPress at ${WP_HOME_URL}..."
  run_compose --profile tools run --rm wpcli wp core install \
    --url="${WP_HOME_URL}" \
    --title="Eurohotel Blog" \
    --admin_user="${WP_ADMIN_USER}" \
    --admin_password="${WP_ADMIN_PASSWORD}" \
    --admin_email="${WP_ADMIN_EMAIL}" \
    --skip-email

  run_compose --profile tools run --rm wpcli wp option update blogdescription "Блог готелю Eurohotel у Львові"
  run_compose --profile tools run --rm wpcli wp rewrite structure '/%postname%/' --hard

  run_compose --profile tools run --rm wpcli wp post delete 1 --force 2>/dev/null || true

  run_compose --profile tools run --rm wpcli wp post create \
    --post_title="Ласкаво просимо до блогу Eurohotel" \
    --post_name="welcome-to-eurohotel-blog" \
    --post_status=publish \
    --post_content="Блог допоможе гостям дізнаватися про події у Львові, пропозиції готелю та корисні поради для комфортного проживання." \
    --porcelain >/dev/null

  echo "WordPress installed. Admin: ${WP_ADMIN_USER} / ${WP_ADMIN_PASSWORD}"
fi

echo "Starting web proxy..."
run_compose up -d --build web

echo "Done."
echo "Site:  ${SITE_URL}/"
echo "Blog:  ${WP_HOME_URL}/"
echo "Admin: ${WP_HOME_URL}/wp-admin/"

if [[ "${ENABLE_HTTPS}" == "true" ]]; then
  echo ""
  echo "HTTPS: configure host nginx + certbot (see infra/nginx/eurohotel.pp.ua.conf.example)."
  echo "Docker web listens on 127.0.0.1:${WEB_PORT:-8080} — ports 80/443 stay free for nginx."
  echo "Ensure DNS A-record for ${DOMAIN:-eurohotel.pp.ua} points to this server."
fi
