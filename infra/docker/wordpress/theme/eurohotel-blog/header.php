<?php
declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

$site_url = eurohotel_site_url();
$blog_url = home_url('/');
$nav_links = eurohotel_main_nav_links();
?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="eh-header">
    <div class="eh-header__inner">
        <a class="eh-logo" href="<?php echo esc_url($site_url); ?>" aria-label="Eurohotel — на головну">
            <img
                src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.svg'); ?>"
                alt="Eurohotel"
                width="160"
                height="40"
                decoding="async"
            >
        </a>

        <nav class="eh-nav" aria-label="<?php esc_attr_e('Main navigation', 'eurohotel-blog'); ?>">
            <?php foreach ($nav_links as $link) : ?>
                <a class="eh-nav__link" href="<?php echo esc_url($site_url . $link['path']); ?>">
                    <?php echo esc_html($link['label']); ?>
                </a>
            <?php endforeach; ?>
            <a class="eh-nav__link eh-nav__link--active" href="<?php echo esc_url($blog_url); ?>" aria-current="page">
                Блог
            </a>
        </nav>

        <a class="eh-btn eh-btn--outline eh-header__cta" href="<?php echo esc_url($site_url . '/contacts'); ?>">
            Забронювати
        </a>
    </div>
</header>

<main class="eh-main">
