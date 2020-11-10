const {
    globalSettings: {
        globalAttributes
    }
} = wp.wprigComponents;

const attributes = {
    // Global
    ...globalAttributes,
    uniqueId: {
        type: 'string',
        default: ''
    },
    recreateStyles: {
        type: 'boolean',
        default: true
    },
    listType: {
        type: 'string',
        default: 'unordered'
    },
    spacer: {
        type: 'object',
        default: {
            spaceTop: {
                md: '10',
                unit: "px"
            },
            spaceBottom: {
                md: '10',
                unit: "px"
            }
        },
        style: [
            { selector: '{{WPRIG}}' }
        ]
    },
    alignment: {
        type: 'string',
        default: 'left',
        style: [
            {
                selector: '{{WPRIG}} .wprig-block-advanced-list {text-align: {{alignment}};}'
            }
        ]
    },
    layout: {
        type: 'string',
        default: 'fill'
    },

    listItems: {
        type: 'array',
        default: ['Create advanced list items', 'Options to choose list design', 'Beautiful interaction transitions']
    },

    bulletStyle: {
        type: 'object',
        default: {
            name: 'check-circle-outline',
            value: 'far fa-check-circle'
        }
    },
    bulletSize: {
        type: 'string',
        default: '16px',
        style: [
            {
                condition:
                    [
                        { key: 'bulletSize', relation: '!=', value: 'custom' },
                        { key: 'listType', relation: '==', value: 'unordered' }
                    ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { font-size: {{bulletSize}};}'
            }
        ]
    },
    bulletSizeCustom: {
        type: 'object',
        default: {
            md: 18,
            unit: 'px'
        },
        style: [
            {
                condition: [
                    { key: 'bulletSize', relation: '==', value: 'custom' },
                    { key: 'listType', relation: '==', value: 'unordered' }
                ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { font-size: {{bulletSizeCustom}};}'
            }]
    },
    bulletSpacing: {
        type: 'object',
        default: {
            md: 10,
            unit: 'px'
        },
        style: [
            {
                condition: [{ key: 'alignment', relation: '==', value: 'left' }],
                selector: '{{WPRIG}} .wprig-list li::before { margin-right: {{bulletSpacing}};}'
            },
            {
                condition: [{ key: 'alignment', relation: '==', value: 'center' }],
                selector: '{{WPRIG}} .wprig-list li::before { margin-right: {{bulletSpacing}};}'
            },
            {
                condition:
                    [
                        { key: 'alignment', relation: '==', value: 'right' },
                    ],
                selector: '{{WPRIG}} .wprig-list li::after { margin-left: {{bulletSpacing}};}'
            }
        ]
    },

    bulletColor: {
        type: 'string',
        default: '',
        style: [
            { selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after {color: {{bulletColor}};}' }
        ]
    },
    bulletColorHover: {
        type: 'string',
        default: '',
        style: [
            { selector: '{{WPRIG}} .wprig-list li:hover::before, {{WPRIG}} .wprig-list li:hover::after {color: {{bulletColorHover}};}' }
        ]
    },

    useNumberBg: {
        type: 'boolean',
        default: true
    },
    numberFontSize: {
        type: 'string',
        default: '14',
        style: [
            {
                condition: [
                    { key: 'listType', relation: '==', value: 'ordered' }
                ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { font-size: {{numberFontSize}}px !important;}'
            }
        ]
    },
    numberBgSize: {
        type: 'string',
        default: '5',
        style: [
            {
                condition: [
                    { key: 'listType', relation: '==', value: 'ordered' },
                    { key: 'useNumberBg', relation: '==', value: true }
                ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { padding: {{numberBgSize}}px; }'
            }
        ]
    },
    numberBg: {
        type: 'string',
        default: '#c2e5ff',
        style: [
            {
                condition: [
                    { key: 'listType', relation: '==', value: 'ordered' },
                    { key: 'useNumberBg', relation: '==', value: true }
                ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { background-color: {{numberBg}};}'
            }
        ]
    },
    numberBgHover: {
        type: 'string',
        default: '',
        style: [{
            condition: [
                { key: 'listType', relation: '==', value: 'ordered' },
                { key: 'useNumberBg', relation: '==', value: true }
            ],
            selector: '{{WPRIG}} .wprig-list li:hover::before, {{WPRIG}} .wprig-list li:hover::after { background-color: {{numberBgHover}};}'
        }]
    },
    numberCorner: {
        type: 'string',
        default: '50',
        style: [
            {
                condition: [
                    { key: 'listType', relation: '==', value: 'ordered' },
                    { key: 'useNumberBg', relation: '==', value: true }
                ],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after { border-radius: {{numberCorner}}%;}'
            }]
    },

    typography: {
        type: 'object',
        default: {
            openTypography: 1,
            size: {
                md: 16,
                unit: 'px'
            }
        },
        style: [
            { selector: '{{WPRIG}} .wprig-list li' },
            {
                condition: [{ key: 'listType', relation: '==', value: 'ordered' }],
                selector: '{{WPRIG}} .wprig-list li::before, {{WPRIG}} .wprig-list li::after '
            }
        ]
    },
    color: {
        type: 'string',
        default: '#333',
        style: [
            { selector: '{{WPRIG}} .wprig-list li {color: {{color}};}' }]
    },
    colorHover: {
        type: 'string',
        default: '',
        style: [
            { selector: '{{WPRIG}} .wprig-list li:hover {color: {{colorHover}};}' }]
    },
    spacing: {
        type: 'object',
        default: {
            md: 5, unit: 'px'
        }, style: [{ selector: '{{WPRIG}} .wprig-list li:not(:last-child) {margin-bottom: {{spacing}};}' }]
    },

    backgroundSize: {
        type: 'object',
        default: {
            openPadding: 1,
            paddingType: 'global',
            global: {
                md: '10',
                unit: 'px'
            }
        },
        style: [{ selector: '{{WPRIG}} .wprig-list li' }]
    },

    background: {
        type: 'string',
        default: '#f5f5f5',
        style: [
            {
                condition: [{ key: 'layout', relation: '==', value: 'fill' }],
                selector: '{{WPRIG}} .wprig-list li {background-color: {{background}};}'
            }]
    },
    backgroundHover: {
        type: 'string',
        default: '',
        style: [{
            condition: [{ key: 'layout', relation: '==', value: 'fill' }],
            selector: '{{WPRIG}} .wprig-list li:hover {background-color: {{backgroundHover}};}'
        }]
    },

    borderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global'
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'fill' }
                ],
                selector: '{{WPRIG}} .wprig-list li'
            }
        ]
    },
    shadow: {
        type: 'object',
        default: {
            color: ''
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'fill' }
                ],
                selector: '{{WPRIG}} .wprig-list li'
            }
        ]
    },
    shadowHover: {
        type: 'object',
        default: {
            color: ''
        },
        style: [
            {
                condition: [{ key: 'layout', relation: '==', value: 'fill' }],
                selector: '{{WPRIG}} .wprig-list li:hover'
            }
        ]
    },

    border: {
        type: 'object',
        default: {
            color: "#006fbf",
        },
        style: [
            { selector: '{{WPRIG}} .wprig-list li' }
        ]
    },
    borderColorHover: {
        type: 'string',
        default: '',
        style: [
            { selector: '{{WPRIG}} .wprig-list li:hover {border-bottom-color: {{borderColorHover}};}' }
        ]
    },
    sourceOfCopiedStyle: {
        type: 'boolean',
        default: false
    }
}

export default attributes;