<?php // phpcs:ignore Squiz.Commenting.FileComment.Missing
/**
 * Redux, a simple, truly extensible and fully responsive options framework
 * for WordPress themes and plugins. Developed with WordPress coding
 * standards and PHP best practices in mind.
 *
 * Plugin Name:     RiseUp Blocks
 * Plugin URI:      http://wordpress.org/plugins/riseup-blocks
 * Author:          Robert Talavera
 * Author URI:      http://robert-talavera.com
 * Version:         1.0.0.0
 * Text Domain:     rise-up-block
 * License:         GPLv3 or later
 * License URI:     http://www.gnu.org/licenses/gpl-3.0.txt
 * Provides:        RiseUp Blocks
 *
 * @package         RiseUp Blocks
 * @author          Robert Talavera
 */


 // Define Dir URL
define('WPRIG_DIR_URL', plugin_dir_url(__FILE__));

// Define Physical Path
define('WPRIG_DIR_PATH', plugin_dir_path(__FILE__));

require_once  'rise-up.class.php'; 


function wprig_get_author_info($object){
    $author['display_name'] = get_the_author_meta('display_name', $object['author']);
    $author['author_link'] = get_author_posts_url($object['author']);
    return $author;
}

function wprig_get_comment_info($object)
{
    $comments_count = wp_count_comments($object['id']);
    return $comments_count->total_comments;
}

//category list
if (!function_exists('wprig_get_category_list')) {
    function wprig_get_category_list($object)
    {
        return get_the_category_list(esc_html__(' '), '', $object['id']);
    }
}

function get_all_image_sizes() {
    global $_wp_additional_image_sizes;

    $sizes       = get_intermediate_image_sizes();
    $image_sizes = array();

    $image_sizes[] = array(
        'value' => 'full',
        'label' => esc_html__( 'Full', 'wprig' ),
    );

    foreach ( $sizes as $size ) {
        if ( in_array( $size, array( 'thumbnail', 'medium', 'medium_large', 'large' ), true ) ) {
            $image_sizes[] = array(
                'value' => $size,
                'label' => ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
            );
        } else {
            $image_sizes[] = array(
                'value' => $size,
                'label' => sprintf(
                    '%1$s (%2$sx%3$s)',
                    ucwords( trim( str_replace( array( '-', '_' ), array( ' ', ' ' ), $size ) ) ),
                    $_wp_additional_image_sizes[ $size ]['width'],
                    $_wp_additional_image_sizes[ $size ]['height']
                ),
            );
        }
    }
    return $image_sizes;
}

function wprig_get_featured_image_url($object){
    $featured_images = array();
if (!isset($object['featured_media'])) {
    return $featured_images;
} else {
    $image = wp_get_attachment_image_src($object['featured_media'], 'full', false);
    if (is_array($image)) {
        $featured_images['full'] = $image;
        $featured_images['landscape'] = wp_get_attachment_image_src($object['featured_media'], 'wprig_landscape', false);
        $featured_images['portraits'] = wp_get_attachment_image_src($object['featured_media'], 'wprig_portrait', false);
        $featured_images['thumbnail'] =  wp_get_attachment_image_src($object['featured_media'], 'wprig_thumbnail', false);

        $image_sizes = $this->get_all_image_sizes();
        foreach ($image_sizes as $key => $value) {
            $size = $value['value'];
            $featured_images[$size] = wp_get_attachment_image_src(
                $object['featured_media'],
                $size,
                false
            );
        }
        return $featured_images;
    }
}
}


function wprig_blocks_add_orderby( $params ) {

    $params['orderby']['enum'][] = 'rand';
    $params['orderby']['enum'][] = 'menu_order';

    return $params;
}
function wprig_register_api_hook(){

    $post_types = get_post_types();

    foreach ( $post_types as $key => $type ) {
        add_filter( "rest_{$type}_collection_params", 'wprig_blocks_add_orderby', 10, 1 );
    }

    register_rest_field(
        $post_types,
        'wprig_featured_image_url',
        array(
            'get_callback' => array('wprig_get_featured_image_url'),
            'update_callback' => null,
            'schema' => array(
                'description' => __('Different sized featured images'),
                'type' => 'array',
            ),
        )
    );


    register_rest_field(
        'post',
        'wprig_author',
        array(
            'get_callback'    => array('wprig_get_author_info'),
            'update_callback' => null,
            'schema'          => null,
        )
    );

    

    
    register_rest_field(
        'post',
        'wprig_comment',
        array(
            'get_callback'    => 'wprig_get_comment_info',
            'update_callback' => null,
            'schema'          => null,
        )
    );

    // Category links.
    register_rest_field(
        'post',
        'wprig_category',
        array(
            'get_callback' => 'wprig_get_category_list',
            'update_callback' => null,
            'schema' => array(
                'description' => __('Category list links'),
                'type' => 'string',
            ),
        )
    );

    
}

add_action('rest_api_init', 'wprig_register_api_hook');


