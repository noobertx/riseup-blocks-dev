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
                            'selector' => '{{WPRIG}}.wprig-grid-gallery .cells{ height: {{cellHeight}}; }' 
                        ]
                    ]
                ],
                'enableViewButton' => [
                    'type' => 'boolean',
                    'default' => true
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

function render_block_wprig_image_grid($att){
    $uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $className 		        = isset($att['className']) ? $att['className'] : '';
    $imageItems 		    = isset($att['imageItems']) ? (array) $att['imageItems'] : '';
    $hoverEffect 		    = isset($att['hoverEffect']) ? (array) $att['hoverEffect'] : '';
    $hoverEffectDirection 		    = isset($att['hoverEffectDirection']) ? (array) $att['hoverEffectDirection'] : '';
    $overlayEffect 		        = isset($att['overlayEffect']) ? $att['overlayEffect'] : 'fall';
    
    $modalOverlayBg 		    = isset($att['modalOverlayBg']) ? (array) $att['modalOverlayBg'] : '';
    $modalSettings = (object) array(
        'id'=>$uniqueId ,
        'overlayEffect' => $overlayEffect 
    );
    
    $html[] = "<div class='wprig-modal-wrap  $hoverEffect[0] $hoverEffectDirection[0] '>";
    $html[] = "<div class=\"wprig-block-$uniqueId $className  wprig-grid-gallery \"  data-modal='".json_encode($modalSettings)."'>";

    if(count($imageItems)){
        foreach( $imageItems as $image){
            $html[] = "<div class='cells'>";
            $html[] = "<div class='overlay'></div>";
            $html[] = "<a href='".$image['url']."' class='wprig-gallery-item'>";
            $html[] = "<img src='".$image['url']."'/>";
            $html[] = "</a>";
            $html[] = "</div>";
        }
    }
    $html[] = "</div>";
    $html[] = "</div>";

    return implode("",$html);
}

add_action('init', 'register_block_wprig_image_grid', 100);
?>