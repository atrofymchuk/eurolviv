<?php
declare(strict_types=1);
?>

<article <?php post_class('eh-card'); ?>>
    <?php if (has_post_thumbnail()) : ?>
        <a class="eh-card__image" href="<?php the_permalink(); ?>" aria-hidden="true" tabindex="-1">
            <?php the_post_thumbnail('medium_large'); ?>
        </a>
    <?php endif; ?>

    <div class="eh-card__body">
        <p class="eh-card__meta">
            <time datetime="<?php echo esc_attr(get_the_date(DATE_W3C)); ?>">
                <?php echo esc_html(get_the_date()); ?>
            </time>
        </p>
        <h2 class="eh-card__title">
            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
        </h2>
        <p class="eh-card__excerpt"><?php echo esc_html(get_the_excerpt()); ?></p>
        <a class="eh-btn eh-btn--text" href="<?php the_permalink(); ?>">Читати далі</a>
    </div>
</article>
