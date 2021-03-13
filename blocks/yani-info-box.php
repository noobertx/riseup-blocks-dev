<?php

/**
 * Registers the `wprig/postgrid` block on server.
 *
 * @since 1.1.0
 */

class Yani_Infobox_Block{
	function __construct(){
		add_action('init', [$this,'register_block_el_button'], 100);
	}
	public function register_block_el_button(){
		// Check if the register function exists.
		if (!function_exists('register_block_type')) {
			return;
		}
		register_block_type(
			'wprig/yaniinfobox',
			array(
				'attributes' => array(
					'uniqueId' => array(
						'type' => 'string',
						'default' => '',
					),
					'layout' => array(
						'type' => 'number',
						'default' => 1
					),
					'alignment' => array(
						'type' => 'string',
						'default' => 'left',
					),
					'mediaType' => array(
						'type' => 'string',
						'default' => 'icon',
					),
					'enableButton' => array(
						'type' => 'boolean',
						'default' => true
					),
					'iconName' => array(
						'type' => 'string',
						'default' => ''
					),
					'style' => array(
						'type' => 'string',
						'default' => 'style-1'
					),

					'image' => array(
						'type' => 'object',
						'default' => []
					),
					'imageType' => array(
						'type' => 'string',
						'default' => 'local'
					),
					'externalImageUrl' => array(
						'type' => 'object',
						'default' => []
					),
					'image2x' => array(
						'type' => 'object',
						'default' => []
					),
					'imageUrl' => array(
						'type' => 'object',
						'default' => []
					),
					'imgAlt' => array(
						'type' => 'string',
						'default' => ''
					),
					'number' => array(
						'type' => 'number',
						'default' => 1
					),

					'enableTitle' => array(
						'type' => 'boolean',
						'default' => true
					),

					'title' => array(
						'type' => 'string',
						'default' => 'Product Title'
					),
					'titleLevel' => array(
						'type' => 'number',
						'default' => 2
					),

					'enableSubTitle' => array(
						'type' => 'boolean',
						'default' => true
					),

					'subTitle' => array(
						'type' => 'string',
						'default' => 'Product Sub Title'
					),
					'subTitleLevel' => array(
						'type' => 'number',
						'default' => 3
					),

					'recreateStyles' => array(
						'type' => 'boolean',
						'default' => true
					),
					'interaction' => array(
						'type' => 'object',
						'default' => array(),
					),
					'animation' => array(
						'type' => 'object',
						'default' =>  array(),
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
				),
				'render_callback' => [$this,'render_block_el_button']
			)
		);
	}
	public function render_block_el_button($att){
		$layout 		        = isset($att['layout']) ? $att['layout'] : 3;
		$uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
		$className 		        = isset($att['className']) ? $att['className'] : '';
		$textField 		        = isset($att['textField']) ? $att['textField'] : '';
		$alignment 		        = isset($att['alignment']) ? $att['alignment'] : [];
		$buttonSize 		    = isset($att['buttonSize']) ? $att['buttonSize'] : "large";
		$buttonColor 		    = isset($att['buttonColor']) ? $att['buttonColor'] : "bg-info white";
		$buttonWidthType 		= isset($att['buttonWidthType']) ? $att['buttonWidthType'] : "auto";
		$iconPosition 		    = isset($att['iconPosition']) ? $att['iconPosition'] : "auto";
		$iconName 		   		= isset($att['iconName']) ? $att['iconName'] : "auto";
		$animation 		   		= isset($att['animation']) ? $att['animation'] : [];
		$url 				    = isset($att['url']) ? $att['url']['url'] : "#";
		$html = [];
		
		if(!empty($animation)){
			$html =  "<div class='".$classname."' id='yani-infobox-".$uniqueId ."' data-yani-animation='".json_encode($animation)."'>";	
		}else{
			$html =  "<div class='".$classname."' id='yani-infobox-".$uniqueId ."'>";
		}
			$html .= "<div class='yani-infobox-wrapper  yani-infobox-wrapper--".$alignment."'>";			
			
		$html .= "</div>";
		$html .= "</div>";
		return $html;
	}
}

new Yani_Infobox_Block();






