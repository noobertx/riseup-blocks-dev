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
                'enableViewButton' => [
                    'type' => 'boolean',
                    'default' => true
                ],                 
                'viewIconName' => [
                    'type'=> 'string',
                    'default'=> ''
                ],
                'viewButtonLabel' => [
                    'type' => 'string',
                    'default' => "View Item"
                ],
                'viewButtonIcon' => [
                    'type' => 'string',
                    'default' => ""
                ],                 
                'viewIconName' => [
                    'type'=> 'string',
                    'default'=> ''
                ],
                'viewIconSize' => [
                    'type'=> 'object',
                    'default'=> [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view .wprig-btn-icon {font-size: {{viewIconSize}}}'
                        ]
                    ]
                ],
                'viewFillType' => [
                    'type'=> 'string',
                    'default'=> 'fill'
                ],
                'viewButtonColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'viewFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view{ color:{{viewButtonColor}}; }' 
                        ]
                    ]
                ],
                'viewButtonColor2' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'viewFillType',
                                    'relation' => '!=',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view{ color:{{viewButtonColor2}}; }' 
                        ]
                    ]
                ],
                'viewButtonHoverColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'viewFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view:hover{ color:{{viewButtonHoverColor}}; }' 
                        ]
                    ]
                ],
                'viewButtonHoverColor2' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'viewFillType',
                                    'relation' => '!=',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view:hover{ color:{{viewButtonHoverColor2}}; }' 
                        ]
                    ]
                ],
                'viewButtonBgColor' => [
                    'type' => 'object',
                    'default' => [
                        'type' => 'color',
                        'openColor' => 1,
                        'color' => '#333',
                        'gradient' => [
                            'color1'=> 'var(--wprig-color-2)',
                            'color2'=> 'var(--wprig-color-1)',
                            'direction'=> 0,
                            'start'=> 0,
                            'stop'=> 100,
                            'type'=> 'linear'
                        ]
                    ],
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'viewFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view' 
                        ]
                    ]
                ],
                'viewButtonBgColorHover' => [
                    'type' => 'object',
                    'default' => [
                        'type' => 'color',
                        'openColor' => 1,
                        'color' => '#333',
                        'gradient' => [
                            'color1'=> '#16d03e',
                            'color2'=> '#1f91f3',
                            'direction'=> 0,
                            'start'=> 0,
                            'stop'=> 100,
                            'type'=> 'linear'
                        ]
                    ],
                    'style' => [
                        [                            
                            'selector' => '{{WPRIG}} .view:hover' 
                        ]
                    ]
                ],
                'viewButtonBorder' => [
                    'type' => 'object',
                    'default' => [
                        'openBorder' => 1,
                        'widthType' => 'global',
                        'global' => ['md' => '1' ],
                        'type' => 'solid',
                        'color' => 'var(--wprig-color-1)' 
                    ],
                    'style' => [
                        [                            
                            'selector' => '{{WPRIG}} .view' 
                        ]
                    ]
                ],
                'viewButtonBorderHoverColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view:hover{border-color: {{viewButtonBorderHoverColor}};}' 
                        ]
                    ]
                ],
                'viewButtonBorderRadius' => [
                    'type' => 'object',
                    'default' => [
                        'openBorderRadius'=> 1,
                        'radiusType'=> 'global',
                        'global'=> [ 'md'=> 4 ],
                        'unit'=> 'px',
                    ],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view' 
                        ]
                    ]
                ],
                'viewButtonShadow' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view' 
                        ]
                    ]
                ],
                'viewButtonShadowHover' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view:hover' 
                        ]
                    ]
                ],


                'enableLinkButton' => [
                    'type' => 'boolean',
                    'default' => true
                ], 
                'linkIconName' => [
                    'type'=> 'string',
                    'default'=> ''
                ],
                'linkButtonLabel' => [
                    'type' => 'string',
                    'default' => "Links"
                ],

                'linkButtonURL' => [
                    'type' => 'string',
                    'default' => "#"
                ], 
                'linkButtonIcon' => [
                    'type' => 'string',
                    'default' => ""
                ],
                'linkIconName' => [
                    'type'=> 'string',
                    'default'=> ''
                ],
                'linkIconSize' => [
                    'type'=> 'object',
                    'default'=> [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .view .wprig-btn-icon {font-size: {{viewIconSize}}}'
                        ]
                    ]
                ],
                'linkFillType' => [
                    'type'=> 'string',
                    'default'=> 'fill'
                ],
                'linkButtonColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'linkFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .view{ color:{{viewButtonColor}}; }' 
                        ]
                    ]
                ],
                'linkButtonColor2' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'linkFillType',
                                    'relation' => '!=',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .link{ color:{{linkButtonColor2}}; }' 
                        ]
                    ]
                ],
                'linkButtonHoverColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'linkFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .link:hover{ color:{{linkButtonHoverColor}}; }' 
                        ]
                    ]
                ],
                'linkButtonHoverColor2' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'linkFillType',
                                    'relation' => '!=',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .link:hover{ color:{{linkButtonHoverColor2}}; }' 
                        ]
                    ]
                ],
                'linkButtonBgColor' => [
                    'type' => 'object',
                    'default' => [
                        'type' => 'color',
                        'openColor' => 1,
                        'color' => '#333',
                        'gradient' => [
                            'color1'=> 'var(--wprig-color-2)',
                            'color2'=> 'var(--wprig-color-1)',
                            'direction'=> 0,
                            'start'=> 0,
                            'stop'=> 100,
                            'type'=> 'linear'
                        ]
                    ],
                    'style' => [
                        [
                            'condition' => [
                                [
                                    'key' => 'linkFillType',
                                    'relation' => '==',
                                    'value' => "fill",
                                ]
                            ],
                            'selector' => '{{WPRIG}} .link' 
                        ]
                    ]
                ],
                'linkButtonBgColorHover' => [
                    'type' => 'object',
                    'default' => [
                        'type' => 'color',
                        'openColor' => 1,
                        'color' => '#333',
                        'gradient' => [
                            'color1'=> '#16d03e',
                            'color2'=> '#1f91f3',
                            'direction'=> 0,
                            'start'=> 0,
                            'stop'=> 100,
                            'type'=> 'linear'
                        ]
                    ],
                    'style' => [
                        [                            
                            'selector' => '{{WPRIG}} .link:hover' 
                        ]
                    ]
                ],
                'linkButtonBorder' => [
                    'type' => 'object',
                    'default' => [
                        'openBorder' => 1,
                        'widthType' => 'global',
                        'global' => ['md' => '1' ],
                        'type' => 'solid',
                        'color' => 'var(--wprig-color-1)' 
                    ],
                    'style' => [
                        [                            
                            'selector' => '{{WPRIG}} .link' 
                        ]
                    ]
                ],
                'linkButtonBorderHoverColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .link:hover{border-color: {{linkButtonBorderHoverColor}};}' 
                        ]
                    ]
                ],
                'linkButtonBorderRadius' => [
                    'type' => 'object',
                    'default' => [
                        'openBorderRadius'=> 1,
                        'radiusType'=> 'global',
                        'global'=> [ 'md'=> 4 ],
                        'unit'=> 'px',
                    ],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .link' 
                        ]
                    ]
                ],
                'linkButtonShadow' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .link' 
                        ]
                    ]
                ],
                'linkButtonShadowHover' => [
                    'type' => 'object',
                    'default' => [],
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .link:hover' 
                        ]
                    ]
                ],

                'enableHoverFx' =>[
                    'type' => 'boolean',
					'default' => true,
                ],
                'overlayLayout' => [
                    'type'=> 'string',
                    'default'=> 'overlay-layout-2'
                ],
                'modalLayout' => [
                    'type'=> 'string',
                    'default'=> 'modal-layout-1'
                ],
                'overlayEffect' => [
                    'type'=>'string',
                    'default'=>'let-me-in'
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

    $hoverEffect 		    = isset($att['hoverEffect']) ? (array) $att['hoverEffect'] : '';
    $hoverEffectDirection 		    = isset($att['hoverEffectDirection']) ? (array) $att['hoverEffectDirection'] : '';
    $overlayEffect 		        = isset($att['overlayEffect']) ? $att['overlayEffect'] : 'fall';


    $overlayLayout 		        = isset($att['overlayLayout']) ? $att['overlayLayout'] : 'overlay-layout-2';
    $enableViewButton 		        = isset($att['enableViewButton']) ? $att['enableViewButton'] : false;
    $viewIconName 		        = isset($att['viewIconName']) ? $att['viewIconName'] : "";
    $viewButtonLabel 		        = isset($att['viewButtonLabel']) ? $att['viewButtonLabel'] : "";
    $maxRowHeight 		        = isset($att['maxRowHeight']) ? $att['maxRowHeight'] : "";
    $innerGap 		        = isset($att['innerGap']) ? $att['innerGap'] : "";

    $enableLinkButton 		        = isset($att['enableLinkButton']) ? $att['enableLinkButton'] : false;
    $linkIconName 		        = isset($att['linkIconName']) ? $att['linkIconName'] : '';
    $linkButtonLabel 		        = isset($att['linkButtonLabel']) ? $att['linkButtonLabel'] : '';


    $slickSettings = (object) array(
        "slidesToShow" => $carouselItems['md'],
        "slidesToScroll" => 4
    );

    $modalSettings = (object) array(
        'id'=>$uniqueId ,
        'overlayEffect' => $overlayEffect 
    );

    $html[] = "<div class=\"wprig-block-$uniqueId $className wprig-gallery slider $hoverEffect[0] $hoverEffectDirection[0] \" 
    data-modal='".json_encode($modalSettings)."'
    data-slick='".json_encode($slickSettings)."'>";
    // $html[] = "<pre>";

    if(count($imageItems)){
        foreach( $imageItems as $image){
            $html[] = "<div class='cells'>";
            $html[] = "<div class='overlay'>";
            $html[] = "<div class='overlay-content ".$overlayLayout."'>";
                if($enableViewButton){
                    $html[] = "<a href='".$image['url']."' class='view wprig-gallery-item'>";
                    $html[] = "<i class='wprig-btn-icon ".$viewIconName."'></i>";
                    $html[] = $viewButtonLabel;
                    $html[] = "</a>";                                      
                }

                if($enableLinkButton){
                    $html[] = "<a href='".$image['url']."' class='view wprig-gallery-item'>";
                    $html[] = "<i class='wprig-btn-icon ".$linkIconName."'></i>";
                    $html[] = $linkButtonLabel;
                    $html[] = "</a>";                                      
                }
            $html[] = "</div>";           
            $html[] = "</div>";
                if(!$enableViewButton){
                        $html[] = "<a href='".$image['url']."' class='wprig-gallery-item'>";
                        $html[] = "<img src='".$image['url']."'/>";
                        $html[] = "</a>";
                }else{
                    $html[] = "<img src='".$image['url']."'/>";
                }            
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


add_action( 'wp_body_open', 'render_modal_component' );
add_action('wp_footer', 'render_overlay_block');
function render_modal_component(){
    if(!is_admin()){
        ?>
                
                <div class="components-modal__frame wprig-dynamic-modal">
                    <div class="components-modal__content">
                        <div class="components-modal__header">
                            <div class="components-modal__header-heading-container">
                                <h1 id="components-modal-header-1" class="components-modal__header-heading">
                                    This is my Modal
                                </h1>                                
                            </div>                            
                            <button type="button" id="close-modal" class="components-button has-icon" aria-label="Close dialog"><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" role="img" aria-hidden="true" focusable="false"><path d="M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"></path></svg></button>
                        </div>
                        <img src="http://riseup2.local/wp-content/uploads/2020/11/screencapture-kadenceex-local-plungee-2020-11-28-03_26_02.png" id="slick-img">
                    </div>
                </div>
                
                <?php
    }
}

function render_overlay_block(){ ?>
    <div class="components-modal__screen-overlay"></div>    
<?php }

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