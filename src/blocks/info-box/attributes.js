const {
    globalSettings: {
        globalAttributes
    },
    wprigButton: {
        buttonAttributes
    }
} = wp.wprigComponents;

const attributes = {
    uniqueId: { type: 'string', default: '' },
    // Global
    ...globalAttributes,
    ...buttonAttributes,
    recreateStyles: {
        type: 'boolean',
        default: true
    },
    layout: { type: 'number', default: 1 },
    alignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box {text-align: {{alignment}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 4 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box {text-align: {{alignment}};}'
            }
        ]
    },
    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: 'px' }, spaceBottom: { md: '10', unit: 'px' } }, style: [{ selector: '{{WPRIG}}' }] },
    mediaType: { type: 'string', default: 'icon' },
    enableButton: { type: 'boolean', default: false },
    buttonToggleOption: { type: 'boolean', default: true },

    // Icon
    iconName: { type: 'string', default: 'fas fa-rocket' },
    iconSize: {
        type: 'string', default: '36px',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'icon' },
                    { key: 'iconSize', relation: '!=', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {font-size: {{iconSize}};}'
            }
        ]
    },
    iconSizeCustom: {
        type: 'object', default: { md: 64, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'icon' },
                    { key: 'iconSize', relation: '==', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {font-size: {{iconSizeCustom}};}'
            }
        ]
    },
    iconColor: {
        type: 'string', default: 'var(--wprig-color-1)',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'icon' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media i {color: {{iconColor}};}'
            }
        ]
    },
    iconHoverColor: {
        type: 'string', default: 'var(--wprig-color-2)',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'icon' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-media i {color: {{iconHoverColor}};}'
            }
        ]
    },

    // Image
    image: { type: 'object', default: {} },
    image2x: { type: 'object', default: {} },
    imgAlt: { type: 'string', default: '' },
    imageType: {
        type: 'string',
        default: 'local'
    },
    externalImageUrl: {
        type: 'object',
        default: {}
    },
    imageWidth: {
        type: 'object',
        default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'image' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {width: {{imageWidth}};} {{WPRIG}} .wprig-info-box-media img {width: 100%;} {{WPRIG}} .wprig-info-box-media .wprig-image-placeholder {height: {{imageWidth}}; width: {{imageWidth}};}'
            }
        ]
    },

    // Number
    number: { type: 'number', default: 1 },
    numberColor: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'number' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-number {color: {{numberColor}};}'
            }
        ]
    },
    numberColorHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'number' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-number {color: {{numberColorHover}};}'
            }
        ]
    },
    numberTypography: {
        type: 'object',
        default: {
            openTypography: 1,
            size: {
                md: 48,
                unit: 'px'
            }
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'mediaType', relation: '==', value: 'number' }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media'
            }
        ]
    },

    // Media background
    useMediaBg: { type: 'boolean', default: 1 },
    mediaBg: {
        type: 'object',
        default: {
            openColor: 1,
            type: 'color',
            color: '#D6EBFF'
        },
        style: [
            {
                condition: [
                    { key: 'mediaType', relation: '!=', value: 'image' },
                    // { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: true }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media.wprig-media-has-bg'
            }
        ]
    },
    mediaBgHover: {
        type: 'object', default: {},
        style: [
            {
                condition: [
                    { key: 'mediaType', relation: '!=', value: 'image' },
                    // { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-media'
            }
        ]
    },
    mediaBackgroundSize: {
        type: 'object', default: { md: '20', unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'mediaType', relation: '!=', value: 'image' },
                    // { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media { padding: {{mediaBackgroundSize}};}'
            }
        ]
    },
    mediaBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',
            global: { md: 5 },
            unit: 'px',

        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media, {{WPRIG}} .wprig-info-box-media img'
            }
        ]
    },

    // Media Border
    mediaBorder: {
        type: 'number', default: 0,
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media'
            }
        ]
    },
    mediaBorderColorHover: {
        type: 'string', default: '#e5e5e5',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaBg', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-media { border-color: {{mediaBorderColorHover}};}'
            }
        ]
    },

    // Media Shadow
    mediaShadow: {
        type: 'object', default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                ],
                selector: '{{WPRIG}} .wprig-info-box-media'
            }
        ]
    },
    mediaShadowHover: {
        type: 'object', default: {},
        style: [
            {
                condition: [
                    { key: 'layout', relation: '!=', value: 4 },
                    { key: 'useMediaShadow', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-media'
            }
        ]
    },

    // Media Spacing
    mediaSpacing: {
        type: 'object', default: { md: 20, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {margin-bottom: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 2 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {margin-right: {{mediaSpacing}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 3 }
                ],
                selector: '{{WPRIG}} .wprig-info-box-media {margin-left: {{mediaSpacing}};}'
            },
        ]
    },

    // Title
    enableTitle: { type: 'boolean', default: 1 },
    title: {
        type: 'string',
        source: 'html',
        selector: '.wprig-info-box-title',
        default: 'This is an infobox'
    },
    titleLevel: { type: 'number', default: 2 },
    titleTypography: { type: 'object', default: { openTypography: 1, size: { md: 24, unit: 'px' } }, style: [{ selector: '{{WPRIG}} .wprig-info-box-title' }] },
    titleColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-info-box-title {color: {{titleColor}};}' }] },
    titleColorHover: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-title {color: {{titleColorHover}};}' }] },
    titleSpacing: { type: 'object', default: { md: 10, unit: 'px' }, style: [{ selector: '{{WPRIG}} .wprig-info-box-title-inner {margin-bottom: {{titleSpacing}};}' }] },

    
    subTitle: { type: 'boolean', default: 0 },
    subTitleLevel: { type: 'number', default: 3 },
    subTitleContent: {
        type: 'string',
        source: 'html',
        selector: '.wprig-info-box-sub-title',
        default: 'Sub Title'
    },
    subTitleTypography: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{WPRIG}} .wprig-block-info-box .wprig-info-box-sub-title' }] },
    subTitleColor: {
        type: 'string', default: '#333',
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-info-box-sub-title {color: {{subTitleColor}};}'
            },
        ]
    },
    subTitleColorHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-sub-title {color: {{subTitleColorHover}};}'
            },
        ]
    },
    subTitleSpacing: {
        type: 'object', default: { md: 15, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'subTitle', relation: '==', value: 1 }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-info-box-sub-title {margin-bottom: {{subTitleSpacing}};}'
            },
        ]
    },

    // Title separator
    separatorStyle: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-separator-type-css {border-top-style: {{separatorStyle}};}'
            },
        ]
    },
    separatorPosition: { type: 'string', default: 'top' },
    separatorColor: {
        type: 'string', default: '#5D7FEB',
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-separator-type-svg svg .wprig-separator-stroke {stroke: {{separatorColor}};} {{WPRIG}} .wprig-block-info-box svg .wprig-separator-fill {fill: {{separatorColor}};} {{WPRIG}} .wprig-block-info-box .wprig-separator-type-css {border-top-color: {{separatorColor}};}'
            },
        ]
    },
    separatorColorHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-separator-type-svg svg .wprig-separator-stroke {stroke: {{separatorColorHover}};} {{WPRIG}} .wprig-block-info-box:hover svg .wprig-separator-fill {fill: {{separatorColorHover}};} {{WPRIG}} .wprig-block-info-box:hover .wprig-separator-type-css {border-top-color: {{separatorColorHover}};}'
            },
        ]
    },
    separatorStroke: {
        type: 'number', default: 3,
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-separator-type-svg svg .wprig-separator-stroke {stroke-width: {{separatorStroke}}px;} {{WPRIG}} .wprig-block-info-box .wprig-separator-type-css {border-top-width: {{separatorStroke}}px;}'
            },
        ]
    },
    separatorWidth: {
        type: 'object', default: { md: 60 },
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' }
                ],
                selector: '{{WPRIG}} .wprig-block-info-box .wprig-separator-type-css {width: {{separatorWidth}}px;} {{WPRIG}} .wprig-block-info-box .wprig-separator-type-svg svg {width: {{separatorWidth}}px;}'
            },
        ]
    },
    separatorSpacing: {
        type: 'object', default: { md: 10 },
        style: [
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' },
                    { key: 'separatorPosition', relation: '==', value: 'left' },
                ],
                selector: '{{WPRIG}} .wprig-separator {margin-right: {{separatorSpacing}}px;}'
            },
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' },
                    { key: 'separatorPosition', relation: '==', value: 'right' },
                ],
                selector: '{{WPRIG}} .wprig-separator {margin-left: {{separatorSpacing}}px;}'
            },
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' },
                    { key: 'separatorPosition', relation: '==', value: 'leftright' },
                ],
                selector: '{{WPRIG}} .wprig-separator-before {margin-right: {{separatorSpacing}}px;} {{WPRIG}} .wprig-separator-after {margin-left: {{separatorSpacing}}px;}'
            },
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' },
                    { key: 'separatorPosition', relation: '==', value: 'top' },
                ],
                selector: '{{WPRIG}} .wprig-separator {margin-bottom: {{separatorSpacing}}px;}'
            },
            {
                condition: [
                    { key: 'separatorStyle', relation: '!=', value: '' },
                    { key: 'separatorPosition', relation: '==', value: 'bottom' },
                ],
                selector: '{{WPRIG}} .wprig-separator {margin-top: {{separatorSpacing}}px;}'
            },
        ]
    },

    //Content
    enableContent: { type: 'boolean', default: true },
    content: {
        type: 'string',
        source: 'html',
        selector: '.wprig-info-box-text',
        default: 'wprig blocks are added to the Gutenberg editor as soon as you install the plugin. You can start using it as any other Gutenberg block.'
    },
    contentTypography: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{WPRIG}} .wprig-info-box-text' }] },
    contentColor: { type: 'string', default: '', style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{WPRIG}} .wprig-info-box-text {color: {{contentColor}};}' }] },
    contentColorHover: { type: 'string', default: '', style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{WPRIG}} .wprig-block-info-box:hover .wprig-info-box-text {color: {{contentColorHover}};}' }] },
    contentPadding: { type: 'object', default: {}, style: [{ condition: [{ key: 'enableContent', relation: '==', value: true }], selector: '{{WPRIG}} .wprig-info-box-body' }] },
    contentSpacing: {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [
            {
                condition: [{ key: 'enableButton', relation: '==', value: true }, { key: 'enableContent', relation: '==', value: true }],
                selector: '{{WPRIG}} .wprig-info-box-body .wprig-info-box-text {margin-bottom: {{contentSpacing}};}'
            },
            {
                condition: [
                    { key: 'enableButton', relation: '==', value: false },
                    { key: 'enableContent', relation: '==', value: true }
                ],
                selector: '{{WPRIG}} .wprig-info-box-body .wprig-info-box-text {margin-bottom: 0;}'
            },
        ]
    },

    // Body
    bgColor: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-info-box' }] },
    bgColorHover: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-info-box:hover' }] },
    bgPadding: {
        type: 'object',
        default: {
            paddingType: 'global'
        },
        style: [
            {
                selector: '{{WPRIG}} .wprig-block-info-box'
            }
        ]
    },
    bgBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',

        },
        style: [
            {
                selector: '{{WPRIG}} .wprig-block-info-box'
            },
        ]
    },
    bgBorder: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-info-box' }] },
    bgBorderColorHover: { type: 'string', default: '#e5e5e5', style: [{ selector: '{{WPRIG}} .wprig-block-info-box:hover { border-color: {{bgBorderColorHover}};}' }] },
    bgShadow: { type: 'object', default: { color: '' }, style: [{ selector: '{{WPRIG}} .wprig-block-info-box' }] },
    bgShadowHover: { type: 'object', default: { color: '' }, style: [{ selector: '{{WPRIG}} .wprig-block-info-box:hover' }] },

    sourceOfCopiedStyle: { type: 'boolean', default: false }
}

export default attributes;