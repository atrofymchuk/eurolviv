<?php
declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

function eurohotel_site_url(): string
{
    if (defined('EUROHOTEL_SITE_URL')) {
        return rtrim((string) EUROHOTEL_SITE_URL, '/');
    }

    return (string) preg_replace('#/blog/?$#', '', home_url());
}

function eurohotel_main_nav_links(): array
{
    return [
        ['path' => '/about', 'label' => 'Про нас'],
        ['path' => '/rooms', 'label' => 'Номери'],
        ['path' => '/conference-service', 'label' => 'Конференції'],
        ['path' => '/restaurant', 'label' => 'Ресторан'],
        ['path' => '/special-offers', 'label' => 'Акції'],
        ['path' => '/contacts', 'label' => 'Контакти'],
    ];
}

function eurohotel_theme_setup(): void
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('html5', ['search-form', 'comment-form', 'comment-list', 'gallery', 'caption', 'style', 'script']);
    add_theme_support('responsive-embeds');
    add_theme_support('wp-block-styles');
    add_theme_support('editor-styles');
    add_editor_style('assets/css/theme.css');

    register_nav_menus([
        'primary' => __('Primary Menu', 'eurohotel-blog'),
        'footer' => __('Footer Menu', 'eurohotel-blog'),
    ]);
}
add_action('after_setup_theme', 'eurohotel_theme_setup');

function eurohotel_enqueue_assets(): void
{
    $theme_version = wp_get_theme()->get('Version') ?: '1.0.0';

    wp_enqueue_style(
        'eurohotel-blog',
        get_template_directory_uri() . '/assets/css/theme.css',
        [],
        $theme_version
    );
}
add_action('wp_enqueue_scripts', 'eurohotel_enqueue_assets');

function eurohotel_excerpt_length(int $length): int
{
    return 28;
}
add_filter('excerpt_length', 'eurohotel_excerpt_length');

function eurohotel_excerpt_more(string $more): string
{
    return '&hellip;';
}
add_filter('excerpt_more', 'eurohotel_excerpt_more');
