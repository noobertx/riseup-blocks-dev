import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { registerBlockType } = wp.blocks
const { globalSettings: { globalAttributes } } = wp.wprigComponents

registerBlockType('wprig/team', {
    title: __('Team'),
    description: 'Display team member with social profiles.',
    icon: 'universal-access-alt',
    category: 'wprig',
    supports: {
        align: ['center', 'wide', 'full'],
    },
    keywords: [__('Team'), __('profile')],
    example: {
        attributes: {
            contentBg: '',
            image: { url: 'https://wprig.io/wp-content/uploads/wprig-assets/demo/team1.jpg' },
        },
    },
    attributes: {
        uniqueId: { type: 'string', default: '' },
        // Global
        ...globalAttributes,
        layout: { type: 'number', default: 1 },
        recreateStyles: {
            type: 'boolean',
            default: true
        },
        alignment: {
            type: 'object',
            default: {
                md: 'center'
            },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 3 }
                    ],
                    selector: '{{WPRIG}} .wprig-block-team {text-align: {{alignment}};}'
                }

            ]
        },
        alignmentLayout3: {
            type: 'string',
            default: 'left',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 }
                    ],
                    selector: '{{WPRIG}}.right-alignment .wprig-block-team{flex-direction:row-reverse}  {{WPRIG}} .wprig-block-team .wprig-team-content {text-align: {{alignmentLayout3}};}'
                }
            ]
        },
        spacer: { type: 'object', default: { spaceTop: { md: '10', unit: "px" }, spaceBottom: { md: '10', unit: "px" } }, style: [{ selector: '{{WPRIG}}' }] },

        // Image
        imageType: {
            type: 'string',
            default: 'local'
        },
        image: { type: 'object', default: {} },
        image2x: { type: 'object', default: {} },
        externalImageUrl: {
            type: 'object',
            default: {}
        },
        imageWidth: {
            type: 'object', default: {},
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 1 },
                    ],
                    selector: '{{WPRIG}} .wprig-team-image-wrapper {width: {{imageWidth}};} {{WPRIG}} .wprig-team-image-wrapper img {width: 100%;}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 },
                    ],
                    selector: '{{WPRIG}} .wprig-block-team.wprig-team-layout-3 > div {flex: 0 0 {{imageWidth}}; max-width: {{imageWidth}}} {{WPRIG}} .wprig-team-image-wrapper img {width: 100%;}'
                }
            ]
        },

        imageSpacing: {
            type: 'object', default: { md: 20, unit: 'px' },
            style: [
                {
                    condition: [{ key: 'layout', relation: '==', value: 1 }],
                    selector: '{{WPRIG}} .wprig-team-image-wrapper {margin-bottom: {{imageSpacing}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 },
                        { key: 'alignmentLayout3', relation: '==', value: 'left' }
                    ],
                    selector: '{{WPRIG}} .wprig-team-image-wrapper {margin-right: {{imageSpacing}};}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 },
                        { key: 'alignmentLayout3', relation: '==', value: 'right' }
                    ],
                    selector: '{{WPRIG}} .wprig-team-image-wrapper {margin-left: {{imageSpacing}};}'
                },
            ]
        },

        imageBorder: {
            type: 'object',
            default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-image-wrapper img, {{WPRIG}} .wprig-team-image-wrapper .wprig-image-placeholder'
                }
            ]
        },
        imageBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1
            },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-image-wrapper img, {{WPRIG}} .wprig-team-image-wrapper .wprig-image-placeholder'
                }
            ]
        },
        imageBoxShadow: {
            type: 'object',
            default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-image-wrapper img, {{WPRIG}} .wprig-team-image-wrapper .wprig-image-placeholder'
                }
            ]
        },

        // Name
        name: { type: 'string', default: 'John Doe' },
        nameTypo: { type: 'object', default: { openTypography: 1, size: { md: 28, unit: 'px' }, height: { md: 32, unit: 'px' } }, style: [{ selector: '{{WPRIG}} .wprig-team-name' }] },
        nameColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-team-name {color: {{nameColor}};}' }] },
        nameSpacing: {
            type: 'object',
            default: { md: 5, unit: 'px' },
            style: [{
                selector: '{{WPRIG}} .wprig-team-name {display:block;margin-bottom: {{nameSpacing}};}'
            }]
        },

        // Designation
        enableDesignation: {
            type: 'boolean', default: 1,
            style: [
                {
                    condition: [
                        { key: 'enableDesignation', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-designation{display:block;}'
                }
            ]
        },
        designation: { type: 'string', default: 'CREATIVE DESIGNER' },
        designationTypo: {
            type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [
                {
                    condition: [
                        { key: 'enableDesignation', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-designation'
                }
            ]
        },
        designationColor: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                        { key: 'enableDesignation', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-designation {color: {{designationColor}};}'
                }
            ]
        },
        designationSpacing: {
            type: 'object', default: { md: 20, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'enableDesignation', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-designation-container {margin-bottom: {{designationSpacing}};}'
                }
            ]
        },

        // Description
        enableDescription: { type: 'boolean', default: 0 },
        description: { type: 'string', default: 'wprig team block is an amazing Gutenberg block to display team member with social and other relevant information.' },
        descriptionTypo: {
            type: 'object', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
            style: [
                {
                    condition: [
                        { key: 'enableDescription', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-description'
                }
            ]
        },
        descriptionColor: {
            type: 'string', default: '',
            style: [
                {
                    condition: [
                        { key: 'enableDescription', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-description {color: {{descriptionColor}};}'
                }
            ]
        },
        descriptionSpacing: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'enableDescription', relation: '==', value: 1 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-description {margin-bottom: {{descriptionSpacing}};}'
                }
            ]
        },

        // Social
        showSociallinks: { type: 'boolean', default: true },
        facebook: { type: 'string', default: 'https://facebook.com/themeum' },
        twitter: { type: 'string', default: 'https://twitter.com/themeum' },
        instagram: { type: 'string', default: '' },
        linkedin: { type: 'string', default: '' },
        youtube: { type: 'string', default: 'https://youtube.com/user/themeumwp' },
        github: { type: 'string', default: '' },
        flickr: { type: 'string', default: '' },
        pinterest: { type: 'string', default: '' },
        dribbble: { type: 'string', default: '' },
        behance: { type: 'string', default: '' },
        iconStyle: { type: 'string', default: 'normal' },
        iconUseDefaultStyle: { type: 'boolean', default: true },
        iconSize: {
            type: 'string', default: '14px',
            style: [
                {
                    condition: [
                        { key: 'iconSize', relation: '!=', value: 'custom' },
                    ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a {font-size: {{iconSize}};}'
                }
            ]
        },
        iconSizeCustom: {
            type: 'object', default: { md: 18, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'iconSize', relation: '==', value: 'custom' },
                    ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a {font-size: {{iconSizeCustom}};}'
                }
            ]
        },
        iconGutter: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-social-links > a {margin: 0 calc({{iconGutter}}/2);}'
                }
            ]
        },
        iconSpacing: {
            type: 'object', default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-social-links {margin-top: {{iconSpacing}};}'
                }
            ]
        },

        iconBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1,
                radiusType: 'global',
                global: { md: 4 },
                unit: 'px'
            },
            style: [
                {
                    condition: [
                        { key: 'iconStyle', relation: '==', value: 'fill' }
                    ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a'
                }
            ]
        },

        iconColor: {
            type: 'string', default: '',
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a {color: {{iconColor}};}'
                }
            ]
        },
        iconColorHover: {
            type: 'string', default: '',
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a:hover {color: {{iconColorHover}};}'
                }
            ]
        },
        iconBackground: {
            type: 'string', default: '',
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a {background-color: {{iconBackground}};}'
                }
            ]
        },
        iconBackgroundHover: {
            type: 'string', default: '',
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a:hover {background-color: {{iconBackgroundHover}};}'
                }
            ]
        },
        iconBorder: {
            type: 'object', default: {},
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a'
                }
            ]
        },
        iconBorderColorHover: {
            type: 'string', default: '',
            style: [
                {
                    condition:
                        [
                            { key: 'iconUseDefaultStyle', relation: '==', value: false },
                            { key: 'iconStyle', relation: '==', value: 'fill' }
                        ],
                    selector: '{{WPRIG}} .wprig-team-social-links>a:hover {border-color: {{iconBorderColorHover}};}'
                }
            ]
        },

        // Information
        phone: { type: 'string', default: '' },
        email: { type: 'string', default: '' },
        website: { type: 'string', default: '' },
        infoSpacing: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-information >div:not(:last-child) {margin-bottom: {{infoSpacing}};}'
                }
            ]
        },
        useInfoIcon: { type: 'boolean', default: false },
        infoIconSize: {
            type: 'string', default: '14px',
            style: [
                {
                    condition: [
                        { key: 'useInfoIcon', relation: '==', value: true },
                        { key: 'infoIconSize', relation: '!=', value: 'custom' },
                    ],
                    selector: '{{WPRIG}} .wprig-team-information .wprig-info-icon {font-size: {{infoIconSize}};}'
                }
            ]
        },
        infoIconSizeCustom: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'useInfoIcon', relation: '==', value: true },
                        { key: 'infoIconSize', relation: '==', value: 'custom' },
                    ],
                    selector: '{{WPRIG}} .wprig-team-information .wprig-info-icon {font-size: {{infoIconSizeCustom}};}'
                }
            ]
        },
        infoIconSpacing: {
            type: 'object', default: { md: 10, unit: 'px' },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-team-information .wprig-info-icon {margin-right: {{infoIconSpacing}};}'
                }
            ]
        },
        infoIconColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-team-information .wprig-info-icon {color: {{infoIconColor}};}' }] },
        infoTypo: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{WPRIG}} .wprig-team-information' }] },
        infoColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-team-information, {{WPRIG}} .wprig-team-information a {color: {{infoColor}};}' }] },


        //Overlay
        overlayHeight: {
            type: 'string', default: 'fit',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 },
                        { key: 'overlayHeight', relation: '==', value: 'auto' }
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {bottom: 0;}'
                },
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 },
                        { key: 'overlayHeight', relation: '==', value: 'fit' }
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {top: 0; bottom: 0;}'
                }
            ]
        },
        overlayAlignment: {
            type: 'string', default: 'center',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 },
                        { key: 'overlayHeight', relation: '==', value: 'fit' },
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {-webkit-box-align: {{overlayAlignment}}; -ms-flex-align: {{overlayAlignment}}; align-items: {{overlayAlignment}};}'
                }
            ]
        },
        overlayBg: {
            type: 'object', default: { type: 'color', openColor: 1, color: 'rgba(255, 255, 255, .9)' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 },
                    ],
                    selector: '{{WPRIG}} .wprig-team-content'
                }
            ]
        },
        overlayPaddingX: {
            type: 'object', default: { md: 20, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {padding-left: {{overlayPaddingX}}; padding-right: {{overlayPaddingX}};}'
                }
            ]
        },
        overlayPaddingY: {
            type: 'object', default: { md: 20, unit: 'px' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 2 }
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {padding-top: {{overlayPaddingY}}; padding-bottom: {{overlayPaddingY}};}'
                }
            ]
        },

        // Content
        contentPosition: {
            type: 'string', default: 'right',
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 },
                        { key: 'contentPosition', relation: '==', value: 'left' }
                    ],
                    selector: '{{WPRIG}} .wprig-block-team {flex-direction: row-reverse; -webkit-flex-direction: row-reverse;} {{WPRIG}} .wprig-team-layout-3 .wprig-team-content {margin-right: auto;}'
                }
            ]
        },
        contentAlignment: {
            type: 'object', default: { md: 'center' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '==', value: 3 },
                    ],
                    selector: '{{WPRIG}} .wprig-team-content {text-align: {{contentAlignment}};}'

                }
            ]
        },
        contentPadding: {
            type: 'object',
            default: {
                openPadding: 1,
                paddingType: 'custom',
                custom: { md: '10 0 10 0' }
            },
            style: [{
                condition: [
                    { key: 'layout', relation: '!=', value: 2 },
                ],
                selector: '{{WPRIG}} .wprig-team-content'
            }]
        },
        contentBg: {
            type: 'object', default: { type: 'color', openColor: 1, color: '#fff' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 2 },
                    ],
                    selector: '{{WPRIG}} .wprig-team-content'
                }
            ]
        },
        contentBorder: {
            type: 'object', default: { openBorder: 1, position: 'all', type: 'solid', width: 1, color: '#e5e5e5' },
            style: [
                {
                    condition: [
                        { key: 'layout', relation: '!=', value: 2 },
                    ],
                    selector: '{{WPRIG}} .wprig-team-content'
                }
            ]
        },

        // Body
        bodyBg: {
            type: 'object', default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-block-team'
                }
            ]
        },
        bodyPadding: {
            type: 'object',
            default: {
                paddingType: 'global',
                global: {}
            },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-block-team'
                }
            ]
        },
        bodyBorder: {
            type: 'object', default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-block-team'
                }
            ]
        },
        bodyBorderRadius: {
            type: 'object',
            default: {
                openBorderRadius: 1
            },
            style: [
                {
                    selector: '{{WPRIG}} .wprig-block-team'
                }
            ]
        },
        bodyBoxShadow: {
            type: 'object', default: {},
            style: [
                {
                    selector: '{{WPRIG}} .wprig-block-team'
                }
            ]
        },
        sourceOfCopiedStyle: { type: 'boolean', default: false }
    },
    edit: Edit,
    save: Save,
});
