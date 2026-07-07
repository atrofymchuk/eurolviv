# Тестове оточення: сайт + WordPress блог

Піднімає:

- React/Vite статичний сайт на `/`
- WordPress з адмінкою на `/blog/` та `/blog/wp-admin/`
- HTTPS через **nginx + certbot** на VPS (Docker слухає лише `127.0.0.1:8080`)

## Перед запуском на VPS

1. DNS: `A`-запис `eurohotel.pp.ua` → IP вашого сервера
2. На хості встановлені **nginx** і **certbot**
3. Скопіюйте `.env` і змініть паролі:

```bash
cd infra/docker
cp .env.example .env
```

## Запуск на VPS

```bash
./scripts/bootstrap-wordpress.sh
```

Docker підніме `web` на `127.0.0.1:8080`. Далі — nginx + SSL на хості:

```bash
sudo apt install nginx certbot python3-certbot-nginx
sudo cp ../nginx/eurohotel.pp.ua.conf.example /etc/nginx/sites-available/eurohotel.pp.ua
sudo ln -s /etc/nginx/sites-available/eurohotel.pp.ua /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d eurohotel.pp.ua
```

Після налаштування:

- Сайт: `https://eurohotel.pp.ua/`
- Блог: `https://eurohotel.pp.ua/blog/`
- Адмінка: `https://eurohotel.pp.ua/blog/wp-admin/`

Перевірка:

```bash
./scripts/verify-seo.sh https://eurohotel.pp.ua
```

Certbot автоматично оновлює сертифікат (systemd timer / cron).

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

Якщо змінили `WP_HOME_URL` у `.env`:

```bash
docker compose --profile tools run --rm wpcli wp option update home "${WP_HOME_URL}"
docker compose --profile tools run --rm wpcli wp option update siteurl "${WP_HOME_URL}"
docker compose -f docker-compose.yml -f docker-compose.vps.yml up -d --build web
```

## Структура

```text
infra/
  nginx/eurohotel.pp.ua.conf.example   # хостовий reverse proxy + certbot
  docker/
    docker-compose.yml
    docker-compose.vps.yml             # 127.0.0.1:8080
    docker-compose.local.yml           # localhost:8080 для dev
    nginx/default.conf                 # nginx всередині Docker
    scripts/
      bootstrap-wordpress.sh
      verify-seo.sh
```

## Production

Поточний production деплой через Apache `.htaccess` не проксує `/blog`.
Для prod потрібен reverse proxy **до** SPA fallback. Приклад:
[`../apache/blog-proxy.example.conf`](../apache/blog-proxy.example.conf).
