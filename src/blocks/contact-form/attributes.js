const { globalSettings: { globalAttributes }, wprigButton: { buttonAttributes }, } = wp.wprigComponents
const formItems = [
    { type: 'text', label: 'Full Name', name: 'full-name ', placeholder: 'Full Name', width: { md: 50 }, required: true, hideLabel: false },
    { type: 'email', label: 'Email', name: 'email', placeholder: 'Email', width: { md: 50 }, required: true, hideLabel: false },
    { type: 'text', label: 'Subject', name: 'subject', placeholder: 'Subject', width: { md: 100 }, required: true, hideLabel: false },
    { type: 'textarea', label: 'Message', name: 'message', placeholder: 'Message', width: { md: 100 }, required: true, hideLabel: false }
]

const attributes =  {
    uniqueId: { type: 'string', default: '' },
    ...globalAttributes,
    ...buttonAttributes,
    layout: { type: 'string', default: 'classic' },
    useDefaultStyle: { type: 'boolean', default: true },
    spacer: { type: 'object', default: { spaceTop: { md: '10', unit: 'px' }, spaceBottom: { md: '10', unit: 'px' } }, style: [{ selector: '{{WPRIG}}' }] },
    enableButtonAlignment: { type: 'boolean', default: true },
    enableButton: { type: 'boolean', default: true },
    buttonTag: { type: 'string', default: 'button' },
    buttonText: { type: 'string', default: 'Submit' },
    formItems: { type: 'array', default: formItems },

    spacing: {
        type: 'object', default: { md: 30, unit: 'px' },
        style: [
            {
                selector: '{{WPRIG}} .wprig-form .wprig-form-group:not(:last-child) {margin-bottom: {{spacing}};}'
            }
        ]
    },

    gutter: {
        type: 'object', default: { md: 30, unit: 'px' },
        style: [
            {
                selector: '{{WPRIG}} .wprig-form {margin: 0 calc(-{{gutter}}/2);} {{WPRIG}} .wprig-form .wprig-form-group {padding: 0 calc({{gutter}}/2);}'
            }
        ]
    },

    labelTypography: {
        type: 'obejct', default: { openTypography: 1, size: { md: 16, unit: 'px' } },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-label'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-label'
            }
        ]
    },

    labelColor: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-label {color: {{labelColor}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-label {color: {{labelColor}};}'
            }
        ]
    },

    labelColorFocus: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' }
                ],
                selector: '{{WPRIG}} .wprig-form-control:focus ~ .wprig-form-label, {{WPRIG}} .wprig-form-control:valid ~ .wprig-form-label {color: {{labelColorFocus}};}'
            }
        ]
    },

    inputTypography: {
        type: 'obejct', default: { openTypography: 1, size: { md: 14, unit: 'px' } },
        style: [
            {
                selector: '{{WPRIG}} .wprig-form .wprig-form-control, {{WPRIG}} .wprig-form .wprig-form-control::placeholder'
            }
        ]
    },

    inputColor: { type: 'string', default: '#495057', style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control {color: {{inputColor}};}' }] },
    // inputColorHover: { type: 'string', default: "#495057", style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control:Hover {color: {{inputColorHover}};}' }] },
    inputColorFocus: { type: 'string', default: '#495057', style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control:focus {color: {{inputColorFocus}};}' }] },

    placeholderColor: { type: 'string', default: '#818181', style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control::placeholder {color: {{placeholderColor}};}' }] },
    placeholderColorHover: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control::placeholder:Hover {color: {{placeholderColorHover}};}' }] },
    placeholderColorFocus: { type: 'string', default: '', style: [{ selector: '{{WPRIG}} .wprig-form .wprig-form-control::placeholder:focus {color: {{placeholderColorFocus}};}' }] },

    inputBg: {
        type: 'string', default: '#fff',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control {background-color: {{inputBg}};}'
            }
        ]
    },

    inputBgHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:hover {background-color: {{inputBgHover}};}'
            }
        ]
    },

    inputBgFocus: {
        type: 'string', default: '#fff',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:focus {background-color: {{inputBgFocus}};}'
            }
        ]
    },

    inputBorder: {
        type: 'object',
        default: {
            openBorder: 1,
            type: 'solid',
            widthType: 'global',
            global: { md: 1 },
            custom: { md: '1 1 1 1' },
            color: '#ced4da'
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control'
            }
        ]
    },

    inputBorderMaterial: {
        type: 'object',
        default: { openBorder: 1, type: 'solid', widthType: 'custom', custom: { md: '0 0 2 0' }, color: '#ced4da' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control'
            }
        ]
    },

    inputBorderColorHover: {
        type: 'string', default: '',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:hover {border-color: {{inputBorderColorHover}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:hover {border-bottom-color: {{inputBorderColorHover}};}'
            }
        ]
    },

    inputBorderColorFocus: {
        type: 'string', default: 'var(--wprig-color-1)',
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:focus {border-color: {{inputBorderColorFocus}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' },
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:focus {border-bottom-color: {{inputBorderColorFocus}};}'
            }
        ]
    },

    inputColorHover: {
        type: 'string', default: '',
        style: [
            {
                selector: '{{WPRIG}} .wprig-form .wprig-form-control:hover {color: {{inputColorHover}};}'
            }
        ]
    },

    inputBorderRadius: {
        type: 'object',
        default: {
            openBorderRadius: 1,
            radiusType: 'global',
            global: {
                md: 5
            },
            unit: 'px'
        },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control'
            }
        ]
    },

    inputSize: { type: 'string', default: 'medium' },
    inputPaddingY: {
        type: 'object', default: { md: 10, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                    { key: 'inputSize', relation: '==', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
            },
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'material' },
                    { key: 'inputSize', relation: '==', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control {padding-top: {{inputPaddingY}}; padding-bottom: {{inputPaddingY}};}'
            }
        ]
    },
    inputPaddingX: {
        type: 'object', default: { md: 15, unit: 'px' },
        style: [
            {
                condition: [
                    { key: 'layout', relation: '==', value: 'classic' },
                    { key: 'inputSize', relation: '==', value: 'custom' }
                ],
                selector: '{{WPRIG}} .wprig-form .wprig-form-control {padding-left: {{inputPaddingX}}; padding-right: {{inputPaddingX}};}'
            }
        ]
    },
    textareaHeight: {
        type: 'object', default: { md: 200, unit: 'px' },
        style: [
            {
                selector: '{{WPRIG}} .wprig-form .wprig-form-group textarea.wprig-form-control {height: {{textareaHeight}};}'
            }
        ]
    },

    fieldErrorMessage: { type: 'string', default: 'Please fill the required field.' },
    formSuccessMessage: { type: 'string', default: 'Email successfully sent!' },
    formErrorMessage: { type: 'string', default: 'Email sending failed, something went wrong! Please try again.' },
    reCaptcha: { type: 'boolean', default: false },
    reCaptchaSiteKey: { type: 'string', default: '' },
    reCaptchaSecretKey: { type: 'string', default: '' },
    emailReceiver: { type: 'string', default: '' },
    emailHeaders: { type: 'string', default: 'Reply-To: {{email}}\nReply-name: {{full-name }} \nCc: {{email}}\nBcc: admin@yourcompany.com' },
    emailFrom: { type: 'string', default: `Your Company Name: admin@${wprig_admin.actual_url}` },
    emailSubject: { type: 'string', default: '{{subject}} | {{email}} | {{site-name}}' },
    emailBody: { type: 'string', default: '<p><strong>From:</strong> {{full-name }}</p><strong>Email:</strong> {{email}}</p>\n<p><strong>Subject:</strong> {{subject}}</p>\n<p><strong>Message:</strong> {{message}}</p>' },
    sourceOfCopiedStyle: { type: 'boolean', default: false },
}

export default attributes;