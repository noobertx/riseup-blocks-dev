<?php
function register_block_wprig_image_grid(){
    if (!function_exists('register_block_type')) {
		return;
    }

    register_block_type(
        'wprig/image-grid',
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
                'skin' => [
                    'type' => 'string',
                    'default' => ""
                ], 
                'carouselItems' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 3,
                        'sm' => 2,
                        'xs' => 1,
                    ]
                ],
                'maxRowHeight' => [
                    'type' => 'string',
                    'default' => 400
                ], 
                'innerGap' => [
                    'type' => 'string',
                    'default' => 0
                ],
                'columns' => [
                    'type' => 'number',
                    'default' => 3,
                    'style' => [
                        [
                            'selector' => '{{WPRIG}}.wprig-grid-gallery{grid-template-columns: repeat({{columns}},1fr); } '
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
                            'selector' => '{{WPRIG}}.wprig-grid-gallery{ row-gap: {{rowGap}}; }'
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
                            'selector' => '{{WPRIG}}.wprig-grid-gallery{ column-gap: {{columnGap}}; }'
                        ]
                    ]
                ],      
                
                'cellHeight' => [
                    'type' => 'object',
                    'default' => [
                        'md'=> 300,
                        'unit'=> 'px'
                    ],
                    'style' => [
                        [                            
                            'selector' => '{{WPRIG}}.wprig-grid-gallery .cells{ max-height: {{cellHeight}}; }' 
                        ]
                    ]
                ],

                'gutter' => [
                    'type' => 'number',
                    'default' => 10
                ],
                'enableViewButton' => [
                    'type' => 'boolean',
                    'default' => true
                ], 
                'viewButtonType' => [
                    'type' => 'string',
                    'default' => "text"
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
                            'selector' => '{{WPRIG}} ~ .components-modal__screen-overlay'
                        ]
                    ]
                ],
                'enableLinkButton' => [
                    'type' => 'boolean',
                    'default' => true
                ], 
                'linkButtonType' => [
                    'type' => 'string',
                    'default' => "text"
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
                'overlayLayout' => [
                    'type'=> 'string',
                    'default'=> 'overlay-layout-2'
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
                'dotsColor' => [
                    'type' => 'string',
                    'default' => '#fff',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .slick-dots li.slick-active button:before, {{WPRIG}} .swiper-pagination-bullet{ color:{{dotsColor}}!important; }' 
                        ]
                    ]
                ], //slick-dots
                'arrowColor' => [
                    'type' => 'string',
                    'default' => '#47a',
                    'style' => [
                        [
                            'selector' => '{{WPRIG}} .slick-arrow:before,{{WPRIG}} .swiper-button-next,{{WPRIG}} .swiper-button-prev{ color:{{arrowColor}}; }' 
                        ]
                    ]
                ],

                'overlayEffect' => [
                    'type'=>'string',
                    'default'=>'let-me-in'
                ],

                'hoverEffect'=> [
                    'type'=> 'string',
                    'default'=> 'wprig-box-effect-1'
                ],
                'hoverEffectDirection'=> [
                    'type'=> 'string',
                    'default'=> ''
                ],
                'enableHoverFx' =>[
                    'type' => 'boolean',
					'default' => true,
                ],
                'overlayEffect' => [
                    'type'=>'string',
                    'default'=>'overlay-slidedown'
                ],

                'modalLayout' => [
                    'type'=> 'string',
                    'default'=> 'modal-layout-1'
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
            'render_callback' => 'render_block_wprig_image_grid'
        ]
    );
}

function enqueue_skin_additional_assets($skin){
    
    if($skin =="carousel" ){
        wp_enqueue_style( 'slick', WPRIG_DIR_URL . 'vendors/slick-carousel/slick.css', false, microtime() );
        wp_enqueue_style( 'slick-theme', WPRIG_DIR_URL . 'vendors/slick-carousel/slick-theme.css', false, microtime() );
        wp_enqueue_script( 'slick', WPRIG_DIR_URL . 'vendors/slick-carousel/slick.min.js', array( 'jquery' ), microtime() );
    }
    
    if($skin !="" ){
        wp_enqueue_script( 'gallery-carousel', WPRIG_DIR_URL . 'assets/js/gallery-carousel.js', array( 'jquery' ), microtime(), true );
    }

}

function render_block_wprig_image_grid($att){
    $uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $className 		        = isset($att['className']) ? $att['className'] : '';
    $imageItems 		    = isset($att['imageItems']) ? (array) $att['imageItems'] : '';
    $hoverEffect 		    = isset($att['hoverEffect']) ? (array) $att['hoverEffect'] : '';
    $hoverEffectDirection 		    = isset($att['hoverEffectDirection']) ? (array) $att['hoverEffectDirection'] : '';
    $overlayEffect 		        = isset($att['overlayEffect']) ? $att['overlayEffect'] : 'fall';

    $overlayLayout 		        = isset($att['overlayLayout']) ? $att['overlayLayout'] : 'overlay-layout-2';
    $enableViewButton 		        = isset($att['enableViewButton']) ? $att['enableViewButton'] : false;
    $viewIconName 		        = isset($att['viewIconName']) ? $att['viewIconName'] : "";
    $viewButtonLabel 		        = isset($att['viewButtonLabel']) ? $att['viewButtonLabel'] : "";

    $enableLinkButton 		        = isset($att['enableLinkButton']) ? $att['enableLinkButton'] : false;
    $linkIconName 		        = isset($att['linkIconName']) ? $att['linkIconName'] : '';
    $linkButtonLabel 		        = isset($att['linkButtonLabel']) ? $att['linkButtonLabel'] : '';

    $modalOverlayBg 		    = isset($att['modalOverlayBg']) ? (array) $att['modalOverlayBg'] : '';

    $carouselItems 		    = isset($att['carouselItems']) ? $att['carouselItems'] : array(
        'md' => 3,
        'sm' => 2,
        'xs' => 1,
    );
    $slickSettings = (object) array(
        "slidesToShow" => $carouselItems['md'],
        "slidesToScroll" => 1,
        "dots"=> true,
        "arrows"=> true,
    );

    $modalSettings = (object) array(
        'id'=>$uniqueId ,
        'overlayEffect' => $overlayEffect 
    );

    $skin 		        = isset($att['skin']) ? $att['skin'] : '';


    
   

    if($skin=="carousel"){
        $html[] = "<div class=\"wprig-block-$uniqueId $className wprig-custom-gallery wprig-gallery slider $hoverEffect[0] $hoverEffectDirection[0] \" 
        data-modal='".json_encode($modalSettings)."'
        data-slick='".json_encode($slickSettings)."'>";
    }else{
        $html[] = "<div class='wprig-modal-wrap  $hoverEffect[0] $hoverEffectDirection[0] '>";
        $html[] = "<div class=\"wprig-block-$uniqueId $className  wprig-custom-gallery wprig-grid-gallery \"  data-modal='".json_encode($modalSettings)."'>";
    }

    enqueue_skin_additional_assets($skin);

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
    $html[] = "</div>";
    if($skin==""){
    $html[] = "</div>";
    }

    return implode("",$html);
}

add_action('init', 'register_block_wprig_image_grid', 100);
?>