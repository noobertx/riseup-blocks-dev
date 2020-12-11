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
                            'selector' => '{{WPRIG}}.components-modal__screen-overlay,{{WPRIG}}'
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
    $imageItems 		    = isset($att['imageItems']) ? (array) $att['imageItems'] : '';

    $html[] = "<div class=\"wprig-block-$uniqueId $className wprig-gallery\" data-slick='{\"slidesToShow\": 4, \"slidesToScroll\": 4}'>";
    // $html[] = "<pre>";

    if(count($imageItems)){
        foreach( $imageItems as $image){
            $html[] = "<div>";
            $html[] = "<img src='".$image['thumbnail']."' data-image-url='".$image['url']."'>";
            $html[] = "</div>";
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
?>