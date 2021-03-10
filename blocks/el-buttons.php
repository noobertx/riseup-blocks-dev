<?php

/**
 * Registers the `wprig/postgrid` block on server.
 *
 * @since 1.1.0
 */
function register_block_el_button(){
	// Check if the register function exists.
	if (!function_exists('register_block_type')) {
		return;
	}
	register_block_type(
		'wprig/elbutton',
		array(
			'attributes' => array(
				'uniqueId' => array(
					'type' => 'string',
					'default' => '',
				),
				'textField' => array(
					'type' => 'string',
					'default' => ''
				),
				'iconName' => array(
					'type' => 'string',
					'default' => ''
				),
				'iconPosition' => array(
					'type' => 'string',
					'default' => 'left',
				),
				'url' => array(
					'type' => 'object',
					'default' => [
						'url' => '#'
					],
				),
				'buttonSize' => array(
					'type' => 'string',
					'default' => 'large'
				),
				'buttonColor' => array(
					'type' => 'string',
					'default' => 'bg-info white'
				),
				'alignment' => array(
					'type' => 'object',
					'default' => [
						'md' => 'center'
					],
				),
				'buttonWidthType' => array(
					'type' => 'string',
					'default' => 'block'
				),
				'recreateStyles' => array(
					'type' => 'boolean',
        			'default' => true
				),
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
			),
			'render_callback' => 'render_block_el_button'
		)
	);
}

function render_block_el_button($att)
{
	$layout 		        = isset($att['layout']) ? $att['layout'] : 3;
	$uniqueId 		        = isset($att['uniqueId']) ? $att['uniqueId'] : '';
	$className 		        = isset($att['className']) ? $att['className'] : '';
	
	$html = "";
	return $html;
}

add_action('init', 'register_block_el_button', 100);

