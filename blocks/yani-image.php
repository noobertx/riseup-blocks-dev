<?php

/**
 * Registers the `wprig/postgrid` block on server.
 *
 * @since 1.1.0
 */

class Yani_Image_Block{
	function __construct(){
		add_action('init', [$this,'register_custom_block'], 100);
	}
	public function register_custom_block(){
		// Check if the register function exists.
		if (!function_exists('register_block_type')) {
			return;
		}
		register_block_type(
			'wprig/elimage',
			array(
				'attributes' => array(
					'uniqueId' => array(
						'type' => 'string',
						'default' => '',
					),
					'layout' => array(
						'type' => 'string',
						'default' => 'simple'
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

					'enableCaption' => array(
						'type' => 'boolean',
						'default' => false
					),
					'imgCaption' => array(
						'type' => 'string',
						'default' => 'Image Caption'
					),
					'enableTitle' => array(
						'type' => 'boolean',
						'default' => false
					),
					'title' => array(
						'type' => 'string',
						'default' => 'Image Block'
					),
					'titleLevel' => array(
						'type' => 'number',
						'default' => 3
					),

					'enableSubtitle' => array(
						'type' => 'boolean',
						'default' => false
					),
					'animateOnHover' => array(
						'type' => 'boolean',
						'default' => false
					),	  
					'titleVisibleOnHover' => array(
						'type' => 'boolean',
						'default' => false
					),	
					'subTitleVisibleOnHover' => array(
						'type' => 'boolean',
						'default' => false
					),	
					'frameAnimateOnHover' => array(
						'type' => 'boolean',
						'default' => false
					),			 
					'subtitle' => array(
						'type' => 'string',
						'default' => 'Image Subtitle'
					),

					'contentAnimation' => array(
						'type' => 'string',
						'default' => 'zoom-out'
					),			

					'titleColor' => array(
						'type' => 'string',
						'default' => 'primary'
					),
					'subTitleColor' => array(
						'type' => 'string',
						'default' => 'secondary'
					),
					'captionColor' => array(
						'type' => 'string',
						'default' => 'dark'
					),
					'alignment' => array(
						'type' => 'object',
						'default' => [
							'md' => 'center'
						],
					),
					'contentAlignment' => array(
						'type' => 'object',
						'default' => [
							'md' => 'center'
						],
					),
					'contentVerticalAlign' => array(
						'type' => 'object',
						'default' => [
							'md' => 'center'
						],
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
				'render_callback' => [$this,'render_custom_block']
			)
		);
	}
	public function render_custom_block($att){
		$layout 		        = isset($att['layout']) ? $att['layout'] : 3;
		$uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
		$className 		        = isset($att['className']) ? $att['className'] : '';
		$textField 		        = isset($att['textField']) ? $att['textField'] : '';
		$alignment 		        = isset($att['alignment']) ? $att['alignment'] : [];

		$enableLeftSeparator 	= isset($att['enableLeftSeparator']) ? $att['enableLeftSeparator'] : false;
		$enableRightSeparator 	= isset($att['enableRightSeparator']) ? $att['enableRightSeparator'] : false;
		$separatorNumbers 		= isset($att['separatorNumbers']) ? $att['separatorNumbers'] : 1;
		$separatorStyle 		= isset($att['separatorStyle']) ? $att['separatorStyle'] : "style-1";
		$mainColor 		    	= isset($att['mainColor']) ? $att['mainColor'] : "bg-info white";

		$iconName 		   		= isset($att['iconName']) ? $att['iconName'] : "auto";
		$animation 		   		= isset($att['animation']) ? $att['animation'] : [];
		$html = [];
		
		if(!empty($animation)){
			$html =  "<div class='".$classname."' id='yani-divider-".$uniqueId ."' data-yani-animation='".json_encode($animation)."'>";	
		}else{
			$html =  "<div class='".$classname."' id='yani-divider-".$uniqueId ."'>";
		}
			$html .= "<div class='yani-divider-wrapper  yani-divider-wrapper--".$alignment['md']."'>";			
				$html .= "<div class='yani-divider yani-divider--".$separatorStyle." ".$mainColor."'>";
				if($enableLeftSeparator){
					$html .= "<div class='yani-divider-item-wrap yani-divider-item-wrap--left'>";
					for($i=0;$i<$separatorNumbers;++$i){
						$html .= "<div class='yani-divider-item'> </div>";
					}
					$html .= "</div>";
				}
				$html .= "<div class='yani-divider-content'>";
				$html .= "<i class='yani-btn-icon ".$iconName."'></i>";
				$html .=$textField;
				$html .= "</div>";
				if($enableRightSeparator){
					$html .= "<div class='yani-divider-item-wrap yani-divider-item-wrap--right'>";
					for($i=0;$i<$separatorNumbers;++$i){
						$html .= "<div class='yani-divider-item'> </div>";
					}
					$html .= "</div>";
				}
				$html .= "</div>";
		$html .= "</div>";
		$html .= "</div>";
		return $html;
	}
}

new Yani_Image_Block();






