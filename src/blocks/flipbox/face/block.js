
import Save from './Save';
import Edit from './Edit';
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType('wprig/face', {
    title: __('Face'),
    category: 'wprig-blocks',
    parent: ['wprig/flipbox'],
    supports: {
        html: false,
        inserter: false,
        reusable: false,
    },
    icon: 'universal-access-alt',
    attributes: {
        uniqueId: {
            type: 'string',
            default: ''
        },
        id: {
            type: 'number',
            default: 1,
        },
        customClassName: {
            type: 'string',
            default: ''
        }
    },
    getEditWrapperProps(attributes) {
        return {
            'data-tab': attributes.id,
            className: `wp-block editor-block-list__block block-editor-block-list__block wprig-tab-content ` +attributes.customClassName
        }
    },
    edit: Edit,
    save: Save
}) 