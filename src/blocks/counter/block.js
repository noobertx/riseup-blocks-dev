const { __ } = wp.i18n
import Edit from './Edit'
import Save from './Save'
const { registerBlockType } = wp.blocks
const { globalSettings: { globalAttributes } } = wp.wprigComponents

registerBlockType( 'wprig/counter', {
    title: __('Counter'),
    description: 'Set counters in your pages and posts with wprig Counter.',
    category: 'wprig-blocks',
    icon: 'universal-access-alt',
    keywords: [ __('Counter'), __('Animated Number'), __('Count up'), ],
    supports: {
        align: ['center', 'wide', 'full'],
    },
    example: {
        attributes: {
            counterLimit: 9999,
            postfix: '+',
            counterTypo: {
                openTypography: 1,
                size: {
                    md: 82,
                    unit: 'px'
                }
            },
        },
    },
    attributes: {
        uniqueId: { type: 'string', default: '' },
        ...globalAttributes,
        spacer: { type: 'object', default:{spaceTop: { md: '10', unit: "px"}, spaceBottom: { md: '10', unit: "px"}}, style: [{ selector: '{{wprig}}' }] },
        alignment: { type: 'object', default: {md: 'center'}, style: [{ selector: '{{WPRIG}} .wprig-block-counter {text-align: {{alignment}};}' }] },
        prefix: { type: 'string', default: '' },
        postfix: { type: 'string', default: '' },
        counterLimit: { type: 'string', default: "500" },
        counterDuration: { type: 'string', default: "500" },
        prepostTypo: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-counter-prefix, {{WPRIG}} .wprig-block-counter-postfix' }] },
        prepostColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-block-counter-prefix {color: {{prepostColor}};} {{WPRIG}} .wprig-block-counter-postfix {color: {{prepostColor}};}' }] },
        prepostSpacing: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-block-counter-prefix {margin-right: {{prepostSpacing}};} {{WPRIG}} .wprig-block-counter-postfix {margin-left: {{prepostSpacing}};}' }] },
        counterTypo: { type: 'object', default: {}, style: [{ selector: '{{WPRIG}} .wprig-block-counter-content' }] },
        counterColor: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-block-counter-content {color: {{counterColor}};}' }] },
        sourceOfCopiedStyle: { type: 'boolean', default: false }
    },
    edit: Edit,
    save: Save
});
