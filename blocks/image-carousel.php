<?php
function register_block_wprig_image_carousel(){
	// Check if the register function exists.
	if (!function_exists('register_block_type')) {
		return;
    }
    register_block_type(
        'wprig/image-carousel',
        [
            'attributes'=>[
                'carouselItems' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 3,
                        'sm' => 2,
                        'xs' => 1,
                    ]
                ],
                'uniqueId' => [
					'type' => 'string',
					'default' => '',
                ],
                'imageItems' => [
                    'type' => 'array',
                    'default' => []
                ],
                'columns' => [
                    'type' => 'number',
                    'default' => 3,
                    'style' => [
                        [
                            'selector' => '{{WPRIG}}.grid{grid-template-columns: repeat({{columns}},1fr); } '
                        ]
                    ]
                ],
                'rowGap' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 10,
                        'sm' => 10,
                        'xs' => 10,
                        'unit' => 'px'
                    ],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}}.grid{ row-gap: {{rowGap}}; }'
                        ]
                    ]
                ],
                'columnGap' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 10,
                        'sm' => 10,
                        'xs' => 10,
                        'unit' => 'px'
                    ],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}}.grid{ column-gap: {{columnGap}}; }'
                        ]
                    ]
                ],
                'modalOverlayBg' => [
                    'type' => 'object',
                    'default' => [
                        'bgimgPosition' => 'center center',
                        'bgimgSize' => 'cover',
                        'bgimgRepeat' => 'no-repeat',
                        'bgDefaultColor' => '',
                        'bgimageSource' => 'local',
                        'externalImageUrl' => []
                    ],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}}.components-modal__screen-overlay'
                        ]
                    ]
                ],
                'enableBannerOverlay' => [
                    'type' => 'boolean',
                    'default' => false
                ],
                'bannerOverlay' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'enableBannerOverlay',
                                    'relation' => '==',
                                    'value' => true,
                                ]
                            ],
                            'selector' => '{{WPRIG}} .wprig-block-info-box' 
                        ]
                    ]
                ],
                'bannerBlend' => [
                    'type' => 'string',
                    'default' => '',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .wprig-info-box-media-overlay { mix-blend-mode: {{bannerBlend}}; }' 
                        ]
                    ]
                ],
                'bannerOpacity' => [
                    'type' => 'string',
                    'default' => '0.8',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .wprig-info-box-media-overlay { mix-blend-mode: {{bannerOpacity}}; }' 
                        ]
                    ]
                ],
                'enableBannerOverlayHover' => [
                    'type' => 'boolean',
                    'default' => false
                ],
                'bannerOverlayHover' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'enableBannerOverlayHover',
                                    'relation' => '==',
                                    'value' => true,
                                ]
                            ],
                            'selector' => '{{WPRIG}} .wprig-block-info-box' 
                        ]
                    ]
                ],
                'bannerBlendHover' => [
                    'type' => 'string',
                    'default' => '',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .wprig-info-box-media-overlay { mix-blend-mode: {{bannerBlendHover}}; }' 
                        ]
                    ]
                ],
                'bannerOpacityHover' => [
                    'type' => 'string',
                    'default' => '0.8',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .wprig-info-box-media-overlay { mix-blend-mode: {{bannerOpacityHover}}; }' 
                        ]
                    ]
                ],
                'overlayEffect' => [
                    'type'=>'string',
                    'default'=>'flip-vertical'
                ],
                
                'interaction' => array(
					'type' => 'object',
					'default' => (object) array(),
				),
				'animation' => array(
					'type' => 'object',
					'default' => (object) array(),
				),
				'globalZindex' => array(
					'type' => 'string',
					'default' => '0',
					'style' => [(object) ['selector' => '{{WPRIG}} {z-index:{{globalZindex}};}']]
				),
				'hideTablet' => array(
					'type' => 'boolean',
					'default' => false,
					'style' => [(object) ['selector' => '{{wprig}}{display:none;}']]
				),
				'hideMobile' => array(
					'type' => 'boolean',
					'default' => false,
					'style' => [(object) ['selector' => '{{wprig}}{display:none;}']]
				),
				'globalCss' => array(
					'type' => 'string',
					'default' => '',
					'style' => [(object) ['selector' => '']]
				),
            ],
            'render_callback' => 'render_block_wprig_carousel'
        ]
    );
}

function render_block_wprig_carousel($att){
    $uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $className 		        = isset($att['className']) ? $att['className'] : '';
    $overlayEffect 		        = isset($att['overlayEffect']) ? $att['overlayEffect'] : 'fall';
    $imageItems 		    = isset($att['imageItems']) ? (array) $att['imageItems'] : '';
    $carouselItems 		    = isset($att['carouselItems']) ? $att['carouselItems'] : array(
        'md' => 3,
        'sm' => 2,
        'xs' => 1,
    );

    $slickSettings = (object) array(
        "slidesToShow" => $carouselItems['md'],
        "slidesToScroll" => 4
    );

    $modalSettings = (object) array(
        'id'=>$uniqueId ,
        'overlayEffect' => $overlayEffect 
    );

    $html[] = "<div class=\"wprig-block-$uniqueId $className wprig-gallery\" 
    data-modal='".json_encode($modalSettings)."'
    data-slick='".json_encode($slickSettings)."'>";
    // $html[] = "<pre>";

    if(count($imageItems)){
        foreach( $imageItems as $image){
            $html[] = "<a href='".$image['url']."'>";
            $html[] = "<img src='".$image['thumbnail']."'/>";
            $html[] = "</a>";
        }
    }
    // $html[] = "</pre>";
    $html[] = "</div>";

    return implode("",$html);

}

add_action('init', 'register_block_wprig_image_carousel', 100);

function wprig_image_carousel($hook){
    // echo "Hook is ".$hook;

    $blocks_meta_data = get_post_meta( get_the_ID(), '__wprig_available_blocks', true );
    $blocks_meta_data = unserialize( $blocks_meta_data );
    
    if ( is_array( $blocks_meta_data ) && count( $blocks_meta_data ) ) {

        $available_blocks = $blocks_meta_data['available_blocks'];
		$has_interaction  = $blocks_meta_data['interaction'];
		$has_animation    = $blocks_meta_data['animation'];
        $has_parallax     = $blocks_meta_data['parallax'];
        
        if ( in_array( 'wprig/image-carousel', $available_blocks ) ) {
            wp_enqueue_style( 'slick', WPRIG_DIR_URL . 'vendors/slick-carousel/slick.css', false, microtime() );
            wp_enqueue_style( 'slick-theme', WPRIG_DIR_URL . 'vendors/slick-carousel/slick-theme.css', false, microtime() );
            wp_enqueue_script( 'slick', WPRIG_DIR_URL . 'vendors/slick-carousel/slick.min.js', array( 'jquery' ), microtime() );
        }
    }
}
add_action( 'wp_enqueue_scripts', 'wprig_image_carousel' );


add_action( 'wp_body_open', 'render_modal_component' );
function render_modal_component(){
    if(!is_admin()){
        ?>
            <div class="components-modal__screen-overlay">
                <div class="components-modal__frame wprig-dynamic-modal">
                    <div class="components-modal__content">
                        <div class="components-modal__header">
                            <div class="components-modal__header-heading-container">
                                <h1 id="components-modal-header-1" class="components-modal__header-heading">
                                    This is my Modal
                                </h1>                                
                                <button type="button" id="close-modal" class="components-button has-icon" aria-label="Close dialog"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></button>
                            </div>                            
                        </div>
                        <img src="http://riseup2.local/wp-content/uploads/2020/11/screencapture-kadenceex-local-plungee-2020-11-28-03_26_02.png" id="slick-img">
                    </div>
                </div>
            </div>
        <?php
    }
}

// if(in_array('render_modal_component',get_the_filter('wp_body_open'))){}

function get_the_filter( $hook = '' ) {
    global $wp_filter;
    if( empty( $hook ) || !isset( $wp_filter[$hook] ) )
        return;
    // print_r((array)$wp_filter[$hook]);
    return  $wp_filter[$hook]->callbacks ;
    
}

// print_r(get_the_fileter('wp_body_open'));
?>