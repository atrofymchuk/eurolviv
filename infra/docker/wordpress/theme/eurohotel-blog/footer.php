<?php
declare(strict_types=1);

if (!defined('ABSPATH')) {
    exit;
}

$site_url = eurohotel_site_url();
$year = (int) gmdate('Y');
?>
</main>

<footer class="eh-footer">
    <div class="eh-footer__top">
        <div class="eh-footer__brand">
            <a class="eh-footer__logo" href="<?php echo esc_url($site_url); ?>">
                <img
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/logo.svg'); ?>"
                    alt="Eurohotel"
                    width="140"
                    height="36"
                    decoding="async"
                >
            </a>
            <p class="eh-footer__tagline">Готель Eurohotel у Львові</p>
        </div>

        <div class="eh-footer__links">
            <a href="<?php echo esc_url($site_url . '/rooms'); ?>">Номери</a>
            <a href="<?php echo esc_url($site_url . '/restaurant'); ?>">Ресторан</a>
            <a href="<?php echo esc_url($site_url . '/special-offers'); ?>">Акції</a>
            <a href="<?php echo esc_url(home_url('/')); ?>">Блог</a>
            <a href="<?php echo esc_url($site_url . '/contacts'); ?>">Контакти</a>
        </div>

        <div class="eh-footer__contact">
            <a href="tel:+380732424002">+38 (073) 242 40 02</a>
            <a href="mailto:info@eurohotel.lviv.ua">info@eurohotel.lviv.ua</a>
            <p>Львів, вул. Тершаковців, 6А</p>
        </div>
    </div>

    <div class="eh-footer__bottom">
        <span>&copy; <?php echo esc_html((string) $year); ?> Eurohotel. Усі права захищені.</span>
        <a href="<?php echo esc_url($site_url . '/documents/Privacy_Policy_ua.pdf'); ?>">Політика конфіденційності</a>
    </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
