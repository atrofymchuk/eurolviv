#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [[ -f .env ]]; then
  # shellcheck disable=SC1091
  source .env
fi

DOMAIN="${DOMAIN:-eurohotel.pp.ua}"
EMAIL="${CERTBOT_EMAIL:-${WP_ADMIN_EMAIL:-info@eurohotel.lviv.ua}}"
STAGING="${CERTBOT_STAGING:-0}"

compose_args=(docker compose -f docker-compose.yml -f docker-compose.vps.yml)

run_compose() {
  "${compose_args[@]}" "$@"
}

run_certbot_sh() {
  run_compose --profile tools run --rm --no-deps --entrypoint /bin/sh certbot-cli "$@"
}

cert_path="/etc/letsencrypt/live/${DOMAIN}"

if [[ "${STAGING}" == "1" ]]; then
  certbot_args=(--staging)
else
  certbot_args=()
fi

if run_certbot_sh -c "test -f '${cert_path}/fullchain.pem'"; then
  echo "Certificate already exists for ${DOMAIN}."
  run_compose up -d edge certbot
  run_compose exec -T edge nginx -s reload || true
  exit 0
fi

echo "Creating temporary certificate so edge nginx can start..."
run_certbot_sh -c "
  set -e
  mkdir -p '${cert_path}'
  openssl req -x509 -nodes -newkey rsa:4096 -days 1 \
    -keyout '${cert_path}/privkey.pem' \
    -out '${cert_path}/fullchain.pem' \
    -subj '/CN=${DOMAIN}'
"

echo "Starting edge nginx..."
run_compose up -d edge

echo "Requesting Let's Encrypt certificate for ${DOMAIN}..."
run_certbot_sh -c "
  set -e
  rm -Rf '${cert_path}'
  rm -Rf '/etc/letsencrypt/archive/${DOMAIN}' || true
  rm -f '/etc/letsencrypt/renewal/${DOMAIN}.conf' || true
  certbot certonly --webroot -w /var/www/certbot \
    ${certbot_args[*]} \
    --email '${EMAIL}' \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d '${DOMAIN}'
"

echo "Reloading edge nginx with real certificate..."
run_compose exec -T edge nginx -s reload

echo "Starting certbot renewal loop..."
run_compose up -d certbot

echo "HTTPS is ready for https://${DOMAIN}/"
