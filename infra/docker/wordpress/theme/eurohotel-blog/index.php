<?php
declare(strict_types=1);

get_header();
?>

<section class="eh-hero eh-hero--compact">
    <div class="eh-container">
        <p class="eh-kicker">Eurohotel Blog</p>
        <h1 class="eh-page-title"><?php bloginfo('name'); ?></h1>
        <?php if (get_bloginfo('description')) : ?>
            <p class="eh-lead"><?php bloginfo('description'); ?></p>
        <?php endif; ?>
    </div>
</section>

<section class="eh-section">
    <div class="eh-container">
        <?php if (have_posts()) : ?>
            <div class="eh-post-grid">
                <?php while (have_posts()) : the_post(); ?>
                    <?php get_template_part('template-parts/content', 'card'); ?>
                <?php endwhile; ?>
            </div>

            <div class="eh-pagination">
                <?php the_posts_pagination([
                    'mid_size' => 2,
                    'prev_text' => '&larr; Попередні',
                    'next_text' => 'Наступні &rarr;',
                ]); ?>
            </div>
        <?php else : ?>
            <p class="eh-empty"><?php esc_html_e('Поки що немає публікацій.', 'eurohotel-blog'); ?></p>
        <?php endif; ?>
    </div>
</section>

<?php
get_footer();
