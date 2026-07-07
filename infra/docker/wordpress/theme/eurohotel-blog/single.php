<?php
declare(strict_types=1);

get_header();
?>

<?php while (have_posts()) : the_post(); ?>
    <article <?php post_class('eh-article'); ?>>
        <section class="eh-hero eh-hero--post">
            <div class="eh-container eh-article__header">
                <a class="eh-back-link" href="<?php echo esc_url(home_url('/')); ?>">&larr; Усі статті</a>
                <h1 class="eh-article__title"><?php the_title(); ?></h1>
                <p class="eh-article__meta">
                    <time datetime="<?php echo esc_attr(get_the_date(DATE_W3C)); ?>">
                        <?php echo esc_html(get_the_date()); ?>
                    </time>
                </p>
            </div>
        </section>

        <?php if (has_post_thumbnail()) : ?>
            <div class="eh-container">
                <figure class="eh-featured-image">
                    <?php the_post_thumbnail('large'); ?>
                </figure>
            </div>
        <?php endif; ?>

        <section class="eh-section eh-section--article">
            <div class="eh-container eh-content">
                <?php the_content(); ?>
            </div>
        </section>
    </article>
<?php endwhile; ?>

<?php
get_footer();
