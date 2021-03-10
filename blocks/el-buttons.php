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
	$textField 		        = isset($att['textField']) ? $att['textField'] : '';
	$alignment 		        = isset($att['alignment']) ? $att['alignment'] : [];
	$buttonSize 		    = isset($att['buttonSize']) ? $att['buttonSize'] : "large";
	$buttonColor 		    = isset($att['buttonColor']) ? $att['buttonColor'] : "bg-info white";
	$buttonWidthType 		= isset($att['buttonWidthType']) ? $att['buttonWidthType'] : "auto";
	$iconPosition 		    = isset($att['iconPosition']) ? $att['iconPosition'] : "auto";
	$iconName 		   		= isset($att['iconName']) ? $att['iconName'] : "auto";
	$url 				    = isset($att['url']) ? $att['url']['url'] : "#";
	$html = [];
	$html =  "<div class='".$classname."' {...animationAttr(animation)}>";
		$html .= "<div class='wprig-block-btn-wrapper  wprig-btn-".$alignment['md']."'>";
			$html .= "<div class='wprig-block-btn'>";
			$html .= "<a href = '".$url."' class='wprig-block-btn-anchor is-".$buttonSize." ".$buttonColor." wprig-btn-".$buttonWidthType."'>";
			if($iconPosition=="left"){
				$html .= "<i class='wprig-btn-icon ".$iconName."'></i>";
			}
			$html .=$textField;
			if($iconPosition=="right"){
				$html .= "<i class='wprig-btn-icon ".$iconName."'></i>";
			}
			$html .= "</a>";
		$html .= "</div>";
	$html .= "</div>";
	$html .= "</div>";

	/*
	<div className={classNames} {...animationAttr(animation)}>
				<div className={`wprig-block-btn-wrapper ${interactionClass}`}>
					<div className={`wprig-block-btn`}>
						<a className={`wprig-block-btn-anchor is-${buttonSize}`} href={url.url ? url.url : '#'} {...(url.target && { target: '_blank' })} {...(url.nofollow ? { rel: 'nofollow noopener noreferrer' } : {...url.target && { rel: 'noopener noreferrer' }}  )} >
							{(iconName.trim() != "") && (iconPosition == 'left') && (<i className={`wprig-btn-icon ${iconName}`} />)}
							<RichText.Content value={(textField == '') ? 'Add Text...' : textField} />
							{(iconName.trim() != "") && (iconPosition == 'right') && (<i className={`wprig-btn-icon ${iconName}`} />)}
						</a>
					</div>
				</div>
			</div>
	*/
	return $html;
}

add_action('init', 'register_block_el_button', 250);

