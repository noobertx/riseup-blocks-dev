<?php
function register_block_wprig_interactive_banner(){
    
    if (!function_exists('register_block_type')) {
		return;
    }
    register_block_type(
        'wprig/interactive-banner',[
            'attributes' => [
                'uniqueId' => [
					'type' => 'string',
					'default' => '',
                ],
                'alignment' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 'left'
                    ],
                    'style' => [
                        [                                 
                            'selector' => '{{WPRIG}} .wprig-block-info-box {text-align: {{alignment}};}',
                        ]
                    ]
                ],
                'bannerHeight' => [
                    'type' => 'object',
                    'default' => [
                        'md' => 180,
                        'unit' => 'px'
                    ],                    
                    'style' => [
                        [                               
                            'selector' => '{{WPRIG}} .wprig-interactive-banner {height: {{bannerHeight}};} {{WPRIG}} .wprig-interactive-banner .wprig-info-box-media {height: {{bannerHeight}};} ',
                        ]
                    ]
                ],
                'bannerBg' => [
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
                            'selector' => '{{WPRIG}} .wprig-block-info-box' 
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
                'effect' => [
                    'type' => 'string',
                    'default' => 'interactive-banner--effect-1',
                ],           
                'enableTitle' => [
                'type' => 'boolean',
                'default' => true
                ],
                'title' => [
                'type' => 'string',
                'source' => 'html',
                'selector' => '.wprig-info-box-title',
                'default' => 'Banner Title'
                ],
                'titleLevel' => [
                'type' => 'number',
                'default' => 2
                ],
                'titleTypography' => [
                'type' => 'object',
                'default' => [
                    'openTypography' => 1,
                    'size' => [
                        'md' => 28,
                        'unit' => 'px'
                    ]
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-info-box-title'  
                    ]
                ]
                ],
                'titleColor' => [
                'type' => 'object',
                'default' => '#ffffff',
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-info-box-title{color: {{titleColor}};}'  
                    ]
                ]
                ],
                'titleColorHover' => [
                'type' => 'object',
                'default' => '',
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-info-box-title {color: {{titleColorHover}};}'  
                    ]
                ]
                ],
                'titleSpacing' => [
                'type' => 'object',
                'default' => [
                    'size' => [
                        'md' => 10,
                        'unit' => 'px'
                    ]
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-info-box-title{margin-bottom: {{titleSpacing}};}'  
                    ]
                ]
                ],
                'enableSubTitle' => [
                'type' => 'boolean',
                'default' => false
                ],
                'subTitle' => [
                'type' => 'string',
                'source' => 'html',
                'selector' => '.wprig-info-box-sub-title',
                'default' => 'Banner SubTitle'
                ],
                'subTitleLevel' => [
                'type' => 'number',
                'default' => 3
                ],
                'subTitleTypography' => [
                'type' => 'object',
                'default' => [
                    'openTypography' => 1,
                    'size' => [
                        'md' => 16,
                        'unit' => 'px'
                    ]
                ],
                'style' => [
                    [
                        'selector' => '{{WPRIG}} .wprig-info-box-sub-title'  
                    ]
                ]
                ],
                'subTitleColor' => [
                'type' => 'object',
                'default' => '#ffffff',
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'subTitle',
                                'relation' => '==',
                                'value' => 1,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-block-info-box .wprig-info-box-sub-title {color: {{subTitleColor}};}'  
                    ]
                ]
                ],
                'subTitleColorHover' => [
                'type' => 'object',
                'default' => '',
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'subTitle',
                                'relation' => '==',
                                'value' => 1,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-sub-title {color: {{subTitleColorHover}};}'  
                    ]
                ]
                ],
                'subTitleSpacing' => [
                'type' => 'object',
                'default' => [
                    'size' => [
                        'md' => 10,
                        'unit' => 'px'
                    ]
                ],
                'style' => [
                    'condition' => [
                        [
                            'key' => 'subTitle',
                            'relation' => '==',
                            'value' => 1,
                        ]
                    ],
                    [
                        'selector' => '{{WPRIG}} .wprig-block-info-box .wprig-info-box-sub-title {margin-bottom: {{subTitleSpacing}};'  
                    ]
                ]
                ],
                'enableContent' => [
                'type' => 'boolean',
                'default' => true
                ],
                'content' => [
                'type' => 'string',
                'source' => ' html',
                'selector'  => '.wprig-info-box-text',
                'default' => 'Info Banner Content short description'
                ],

                'contentTypography' => [
                'type' => 'object',
                'default' => [
                    'openTypography' => 1,
                    'size' => [
                        'md' => 12,
                        'unit' => 'px'
                    ]
                ],
                'condition' => [
                    [
                        'key' => 'enableContent',
                        'relation' => '==',
                        'value' => 1,
                    ]
                ],
                'selector'  => '{{WPRIG}} .wprig-info-box-text',                
                ],
                'contentColor' => [
                'type' => 'object',
                'default' => '#ffffff',
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'enableContent',
                                'relation' => '==',
                                'value' => 1,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-info-box-text {color: {{contentColor}};}'  
                    ]
                ]
                ],
                'contentColorHover' => [
                'type' => 'object',
                'default' => '#ffffff',
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'enableContent',
                                'relation' => '==',
                                'value' => 1,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-text {color: {{contentColorHover}};}'  
                    ]
                ]
                ],
                'contentPadding' => [
                'type' => 'object',
                'default' => [],
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'enableContent',
                                'relation' => '==',
                                'value' => 1,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-info-box-body' 
                    ]
                ]
                ],
                'contentSpacing' => [
                'type' => 'object',
                'default' => [
                    'md' => 10,
                    'unit' => 'px',
                ],
                'style' => [
                    [
                        'condition' => [
                            [
                                'key' => 'enableButton',
                                'relation' => '==',
                                'value' => true,
                            ],
                            [
                                'key' => 'enableContent',
                                'relation' => '==',
                                'value' => true,
                            ]
                        ],
                        'selector' => '{{WPRIG}} .wprig-info-box-body .wprig-info-box-text {margin-bottom: {{contentSpacing}};}' 
                    ],
                    [
                        'condition' => [
                            [
                                'key' => 'enableButton',
                                'relation' => '==',
                                'value' => false,
                            ],
                            [
                                'key' => 'enableContent',
                                'relation' => '==',
                                'value' => true,
                            ]
                        ],
                        'selector' => '{{{WPRIG}} .wprig-info-box-body .wprig-info-box-text {margin-bottom: 0;}' 
                    ]
                ]
                ],
        ],
            'render_callback' => 'render_block_wprig_interactive_banner'
        ]
    );

}

function render_block_wprig_interactive_banner($att){
    $uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
    $className 		        = isset($att['className']) ? $att['className'] : '';
    $titleLevel 		        = isset($att['titleLevel']) ? $att['titleLevel'] : '2';
    $subTitleLevel 		        = isset($att['subTitleLevel']) ? $att['subTitleLevel'] : '3';
    $title 		        = isset($att['title']) ? $att['title'] : '';
    $subTitle 		        = isset($att['subTitle']) ? $att['subTitle'] : '';
    $enableSubTitle 		        = isset($att['enableSubTitle']) ? $att['enableSubTitle'] : '';
    $enableContent 		        = isset($att['enableContent']) ? $att['enableContent'] : '';
    $content 		        = isset($att['content']) ? $att['content'] : '';
    $effect 		        = isset($att['effect']) ? $att['effect'] : '';
    
    $html[] = "<div class=\"wprig-block-$uniqueId $className\">";
    // $html[] = "<div class=\"wprig-banner-overlay\"></div>";
    $html[] = "<div class=\"wprig-block-info-box wprig-info-box-layout-1 wprig-interactive-banner $effect\">";
    $html[] = "<div class=\"wprig-info-box-media wprig-media-has-bg\">";
    $html[] = "<div class=\"wprig-info-box-media-overlay\"></div>";
    $html[] = "</div>";

        $html[] = "<div class=\"wprig-info-box-body\">";
            $html[] ="<div class=\"wprig-info-box-title-container\">";
                $html[] ="<div class=\"wprig-info-box-title-inner\">";
                    $html[] ="<h$titleLevel class=\"wprig-info-box-title\">";
                        $html[] = $title;
                    $html[] ="</h$titleLevel>";
                $html[] = "</div>";        
            $html[] = "</div>";

        if($enableSubTitle) {
            $html[] ="<div class=\"wprig-info-box-sub-title-container\">";
                    $html[] ="<h$subTitleLevel>";
                        $html[] = $subTitle;
                    $html[] ="</h$subTitleLevel>";
            $html[] = "</div>";
        }

        if($enableContent) {
            $html[] ="<div class=\"wprig-info-box-content\">";
                    $html[] ="<div class=\"wprig-info-box-text\">";
                        $html[] = $content;
                    $html[] ="</div>";
            $html[] = "</div>";
        }


    $html[] = "</div>";
    $html[] = "</div>";
    $html[] = "</div>";
    
    /*
    $values = array( 'one', 'two', 'three' );
$valueList = implode( ', ', $values );
    */

    return implode("",$html);
}


// add_action('init', 'register_block_wprig_interactive_banner', 100);
?>