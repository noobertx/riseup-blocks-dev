<?php
function register_block_wprig_mosaic_images(){
    if (!function_exists('register_block_type')) {
		return;
    }

    register_block_type(
        'wprig/mosaic-images',
        [
            'attributes'=>[
                'uniqueId' => [
					'type' => 'string',
					'default' => '',
                ],
                'imageItems' => [
                    'type' => 'array',
                    'default' => []
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
                'enableHoverFx' =>[
                    'type' => 'boolean',
					'default' => true,
                ],
                'overlayEffect' => [
                    'type'=>'string',
                    'default'=>'overlay-slidedown'
                ],

                'hoverEffect' => [
                    'type'=> 'string',
                    'default'=> 'wprig-box-effect-1'
                ],
                
                'hoverEffectDirection' => [
                    'type' => 'string',  
                    'default' => 'left-to-right'
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
            'render_callback' => 'render_block_wprig_mosaic_images'
        ]
    );
}

function render_block_wprig_mosaic_images($att){
    $uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $className 		        = isset($att['className']) ? $att['className'] : '';
    $imageItems 		    = isset($att['imageItems']) ? (array) $att['imageItems'] : '';
    $overlayEffect 		        = isset($att['overlayEffect']) ? $att['overlayEffect'] : 'fall';

    $modalSettings = (object) array(
        'id'=>$uniqueId ,
        'overlayEffect' => $overlayEffect 
    );
    
    $html[] = "<div class='wprig-modal-wrap'>";
    $html[] = "<div class=\"wprig-block-$uniqueId $className wprig-mosaic-gallery\"  data-modal='".json_encode($modalSettings)."'>";

    if(count($imageItems)){
        foreach( $imageItems as $image){
            $html[] = "<a href='".$image['url']."' class='wprig-gallery-item'>";
            $html[] = "<img src='".$image['url']."'/>";
            $html[] = "</a>";
        }
    }
    $html[] = "</div>";
    $html[] = "</div>";

    return implode("",$html);
}

function wprig_image_mosaic_assets($hook){
    // echo "Hook is ".$hook;

    $blocks_meta_data = get_post_meta( get_the_ID(), '__wprig_available_blocks', true );
    $blocks_meta_data = unserialize( $blocks_meta_data );
    
    if ( is_array( $blocks_meta_data ) && count( $blocks_meta_data ) ) {

        $available_blocks = $blocks_meta_data['available_blocks'];
		$has_interaction  = $blocks_meta_data['interaction'];
		$has_animation    = $blocks_meta_data['animation'];
        $has_parallax     = $blocks_meta_data['parallax'];
        
        if ( in_array( 'wprig/mosaic-images', $available_blocks ) ) {
            // wp_enqueue_style( 'jquery-mo', WPRIG_DIR_URL . 'vendors/slick-carousel/slick.css', false, microtime() );
            wp_enqueue_script( 'jquery-mosaic', WPRIG_DIR_URL . 'vendors/jquery-mosaic/jquery.mosaic.min.js', array( 'jquery' ), microtime() );
        }
    }
}

add_action( 'wp_enqueue_scripts', 'wprig_image_mosaic_assets' );

add_action('init', 'register_block_wprig_mosaic_images', 100);
?>