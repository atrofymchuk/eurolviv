# Тестове оточення: сайт + WordPress блог

Усе працює в Docker:

- React/Vite статичний сайт на `/`
- WordPress на `/blog/` та `/blog/wp-admin/`
- **edge nginx** на портах 80/443 (reverse proxy)
- **certbot** у контейнері (Let's Encrypt + auto-renew)

## Перед запуском на VPS

1. DNS: `A`-запис `eurohotel.pp.ua` → IP сервера
2. Відкриті порти **80** і **443**
3. На хості **не потрібен** nginx/certbot — лише Docker
4. Скопіюйте `.env` і змініть паролі:

```bash
cd infra/docker
cp .env.example .env
```

## Запуск на VPS (HTTPS)

```bash
./scripts/bootstrap-wordpress.sh
```

Скрипт підніме `db`, `wordpress`, `web`, потім `edge` + certbot і отримає сертифікат.

Після запуску:

- Сайт: `https://eurohotel.pp.ua/`
- Блог: `https://eurohotel.pp.ua/blog/`
- Адмінка: `https://eurohotel.pp.ua/blog/wp-admin/`

Перевірка:

```bash
./scripts/verify-seo.sh https://eurohotel.pp.ua
```

### Повторне отримання сертифіката

```bash
./scripts/init-letsencrypt.sh
```

Для тесту без лімітів Let's Encrypt:

```env
CERTBOT_STAGING=1
```

## Локальний запуск без HTTPS

У `.env`:

```env
ENABLE_HTTPS=false
SITE_URL=http://localhost:8080
WP_HOME_URL=http://localhost:8080/blog
WEB_PORT=8080
```

Потім:

```bash
./scripts/bootstrap-wordpress.sh
./scripts/verify-seo.sh http://localhost:8080
```

## Оновлення URL WordPress

```bash
docker compose --profile tools run --rm wpcli wp option update home "${WP_HOME_URL}"
docker compose --profile tools run --rm wpcli wp option update siteurl "${WP_HOME_URL}"
docker compose -f docker-compose.yml -f docker-compose.vps.yml up -d --build web edge
```

## Структура контейнерів

```text
Internet :443/:80
    └── edge (nginx + TLS)
            └── web (nginx: React SPA + /blog proxy)
                    └── wordpress (+ MariaDB)
    └── certbot (renew, shared network with edge)
```

```text
infra/docker/
  docker-compose.yml
  docker-compose.vps.yml          # edge + certbot
  docker-compose.local.yml        # localhost:8080 для dev
  nginx/
    default.conf                  # внутрішній nginx (web)
    edge/templates/default.conf.template
  scripts/
    bootstrap-wordpress.sh
    init-letsencrypt.sh
    verify-seo.sh
```

## Production

Поточний production деплой через Apache `.htaccess` не проксує `/blog`.
Для prod потрібен reverse proxy **до** SPA fallback. Приклад:
[`../apache/blog-proxy.example.conf`](../apache/blog-proxy.example.conf).
