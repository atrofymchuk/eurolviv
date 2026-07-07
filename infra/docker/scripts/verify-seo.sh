#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
if [[ -f "${SCRIPT_DIR}/../.env" ]]; then
  # shellcheck disable=SC1091
  source "${SCRIPT_DIR}/../.env"
fi

BASE_URL="${1:-${SITE_URL}}"
BLOG_URL="${BASE_URL%/}/blog"
POST_URL="${BLOG_URL}/welcome-to-eurohotel-blog/"

pass() { printf '✓ %s\n' "$1"; }
fail() { printf '✗ %s\n' "$1"; exit 1; }

curl_args=()
if [[ "${BASE_URL}" == http://localhost* || "${BASE_URL}" == http://127.0.0.1* ]]; then
  HOST_HEADER="${BASE_URL#*://}"
  curl_args=(-H "Host: ${HOST_HEADER}")
fi

echo "Checking blog SEO integration at ${BASE_URL}"

redirect_code="$(curl -s "${curl_args[@]}" -o /dev/null -w '%{http_code}' "${BASE_URL}/blog")"
[[ "${redirect_code}" == "301" || "${redirect_code}" == "302" ]] \
  && pass "/blog redirects (${redirect_code})" \
  || fail "/blog redirect expected 301/302, got ${redirect_code}"

if [[ "${BASE_URL}" == https://* ]]; then
  http_code="$(curl -s -o /dev/null -w '%{http_code}' "http://${BASE_URL#https://}/")"
  [[ "${http_code}" == "301" || "${http_code}" == "308" ]] \
    && pass "HTTP redirects to HTTPS" \
    || echo "! HTTP did not redirect (${http_code}); check edge nginx config"
fi

blog_html="$(curl -sL "${curl_args[@]}" "${BLOG_URL}/")"
echo "${blog_html}" | grep -q '<title>.*</title>' \
  && pass "Blog index has <title>" \
  || fail "Blog index missing <title>"

echo "${blog_html}" | grep -Eiq 'wordpress|blog|блог|eurohotel' \
  && pass "Blog index contains expected content" \
  || fail "Blog index content check failed"

post_html="$(curl -sL "${curl_args[@]}" "${POST_URL}")"
echo "${post_html}" | grep -q 'wp-block-post-title\|Eurohotel' \
  && pass "Blog post has title" \
  || fail "Blog post title missing"

echo "${post_html}" | grep -q 'name="description"' \
  && pass "Blog post or theme exposes meta description" \
  || echo "! Meta description not found (add SEO plugin or theme support in WordPress)"

echo "${post_html}" | grep -q 'rel="canonical"' \
  && pass "Blog post has canonical link" \
  || echo "! Canonical link not found (common for default WP theme until SEO plugin is added)"

echo "${post_html}" | grep -qE '<h[12][^>]*>.*</h[12]>' \
  && pass "Blog post has server-rendered headings" \
  || fail "Blog post headings missing"

sitemap_code="$(curl -s "${curl_args[@]}" -o /dev/null -w '%{http_code}' "${BLOG_URL}/wp-sitemap.xml")"
if [[ "${sitemap_code}" == "200" ]]; then
  pass "Blog sitemap available at /blog/wp-sitemap.xml"
else
  fail "Blog sitemap not available (${sitemap_code})"
fi

site_html="$(curl -sL "${curl_args[@]}" "${BASE_URL}/")"
echo "${site_html}" | grep -q 'href="/blog"' \
  && pass "Main site menu links to /blog" \
  || echo "! /blog link not found in static HTML (expected for SPA menu rendered client-side)"

echo "SEO checks completed."
