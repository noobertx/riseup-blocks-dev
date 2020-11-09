/* eslint-disable react/react-in-jsx-scope */
import './style.scss'
import Edit from './Edit'
import Save from './Save';
const { __ } = wp.i18n
const { RichText } = wp.blockEditor
const { registerBlockType } = wp.blocks
const { globalSettings: { globalAttributes }, HelperFunction: { IsInteraction } } = wp.wprigComponents

const attributes = {
    uniqueId: { type: 'string', default: '' },
    ...globalAttributes,
    listStyle: { type: 'string', default: 'ordered' },
    ordered: { type: 'boolean', default: false, },
    alignment: {
        type: 'object', default: { md: 'left' },
        style: [
            {
                selector: '{{WPRIG}} .wprig-block-icon-list {text-align: {{alignment}};}'
            }
        ]
    },

    layout: { type: 'string', default: 'classic' },

    listItems: {
        type: 'array',
        default: [
            {
                icon: 'far fa-star',
                text: 'Add beautiful icons and text'
            },
            {
                icon: 'far fa-heart',
                text: 'Set icon color for normal and hover state'
            },
            {
                icon: 'fas fa-check',
                text: 'Manage space between icon and the text'
            },
            {
                icon: 'fas fa-burn',
                text: 'Choose a desired layout from the list'
            },
        ]
    },

    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: 'px' }, spaceBottom: { md: '10', unit: 'px' } }, style: [{ selector: '{{wprig}}' }] },


    typography: { type: 'object', default: { openTypography: 1, size: { md: 16, unit: 'px' } }, style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li' }] },
    iconSize: {
        type: 'string',
        default: '18px',
        style: [
            {
                condition: [
                    { key: 'iconSize', relation: '!=', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-item-icon {font-size: {{iconSize}};}'
            }
        ]
    },
    iconSizeCustom: {
        type: 'object', default: { md: 16, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'iconSize', relation: '==', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-item-icon {font-size: {{iconSizeCustom}};}'
            }
        ]
    },
    iconPosition: { type: 'string', default: 'left' },
    iconSpacing: {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'iconPosition', relation: '==', value: 'left' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-item-icon {margin-right: {{iconSpacing}};}'
            },
            {
                condition: [
                    { key: 'iconPosition', relation: '==', value: 'right' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-item-icon {margin-left: {{iconSpacing}};}'
            }
        ]
    },

    iconColor: { type: 'string', default: 'var(--wprig-color-1)', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li .wprig-list-item-icon {color: {{iconColor}};}' }] },
    iconHoverColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li:hover .wprig-list-item-icon {color: {{iconHoverColor}};}' }] },


    color: { type: 'string', default: '#333', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li {color: {{color}};}' }] },
    colorHover: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li:hover {color: {{colorHover}};}' }] },
    spacing: { type: 'string', default: '5', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li:not(:last-child) {margin-bottom: {{spacing}}px;}' }] },
    padding: {
        type: 'object',
        default: {
            openPadding: 1,
            paddingType: 'custom',
            global: { md: '5' },
            custom: { md: '5 10 5 10' },
            unit: 'px'
        },
        style: [  
            { 
                condition: [
                    { key: 'layout', relation: '==', value: 'fill' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-li ' 
            }   
        ]
    },
    background: {
        type: 'string', default: '#f5f5f5',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'fill' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-li {background-color: {{background}};}'
            }
        ]
    },
    backgroundHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'fill' }
                ],
                selector: '{{WPRIG}} .wprig-list .wprig-list-li:hover {background-color: {{backgroundHover}};}'
            }
        ]
    },

    shadow: { type: 'object', default: { color: '' }, style: [{ condition: [{ key: 'layout', relation: '==', value: 'fill' }], selector: '{{WPRIG}} .wprig-list .wprig-list-li' }] },
    shadowHover: { type: 'object', default: { color: '' }, style: [{ condition: [{ key: 'layout', relation: '==', value: 'fill' }], selector: '{{WPRIG}} .wprig-list .wprig-list-li:hover' }] },

    border: {
        type: 'object',
        default: {},
        style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li' }]
    },

    borderRadius: {
        type: 'object',
        default: {},
        style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li' }]
    },
    borderColorHover: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-list .wprig-list-li:hover {border-bottom-color: {{borderColorHover}};}' }] },
    sourceOfCopiedStyle: { type: 'boolean', default: false }
}

registerBlockType('wprig/iconlist-connector', {
    title: __('Icon List Connector'),
    description: __('Include attractive icon lists with Connector.'),
    category: 'wprig',
    icon: 'universal-access-alt',
    keywords: [__('icon', 'list', 'icon list')],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    example: {
        attributes: {},
    },

    attributes,
    edit: Edit,
    save: Save,
    deprecated: [
        {
            attributes,
            save(props) {
                const {
                    uniqueId,
                    interaction,
                } = props.attributes

                const renderListItems = () => {
                    const { attributes: { listItems, iconPosition } } = props
                    return listItems.map((item, index) => {
                        return (
                            <li className={'wprig-list-li'}>
                                {iconPosition == 'left' && <span className={`wprig-list-item-icon ${item.icon} fa-fw`} />}
                                <RichText.Content tagName="span" value={item.text} />
                                {iconPosition == 'right' && <span className={`wprig-list-item-icon ${item.icon} fa-fw`} />}
                            </li>
                        )
                    })

                }

                const interactionClass = IsInteraction(interaction) ? 'qubley-block-interaction' : '';

                return (
                    <div className={`wprig-block-${uniqueId}`}>
                        <div className={`wprig-block-icon-list ${interactionClass}`}>
                            <ul className="wprig-list">
                                {renderListItems()}
                            </ul>
                        </div>
                    </div>
                )
            }
        }
    ]
});
