const { __ } = wp.i18n
const { Fragment, Component, createRef } = wp.element;
const { PanelBody, SelectControl, TextControl, Toolbar } = wp.components
const { RichText, InspectorControls, BlockControls } = wp.blockEditor
const { WPRigButtonEdit, ButtonGroup, Url, Media, Tabs, Tab, Range, BoxShadow, ContextMenu: { ContextMenu, handleContextMenu }, RadioAdvanced, Typography, Toggle, Styles, Alignment, IconList, ColorAdvanced, Color, Headings, Border, BorderRadius, Padding, globalSettings: { globalSettingsPanel, animationSettings, interactionSettings }, Inline: { InlineToolbar }, wprigButton: { buttonSettings }, withCSSGenerator, InspectorTabs, InspectorTab } = wp.wprigComponents
import icons from '../../helpers/icons';
import svg from '../advance-heading/separators';
class Edit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            device: 'md',
            selector: true,
            spacer: true,
            openPanelSetting: ''
        };
        this.wprigContextMenu = createRef();
    }

    componentDidMount() {
        const { setAttributes, clientId, attributes: { uniqueId } } = this.props
        const _client = clientId.substr(0, 6)
        if (!uniqueId) {
            setAttributes({ uniqueId: _client });
        } else if (uniqueId && uniqueId != _client) {
            setAttributes({ uniqueId: _client });

        }
    }
    handlePanelOpenings = (panelName) => {
        this.setState({ ...this.state, openPanelSetting: panelName })
    }

    render() {
        const {
            uniqueId,
            className,
            layout,
            recreateStyles,
            mediaType,
            alignment,
            titleLevel,
            enableTitle,
            title,
            titleTypography,
            titleColor,
            titleColorHover,
            titleSpacing,

            subTitle,
            subTitleLevel,
            subTitleContent,
            subTitleTypography,
            subTitleColor,
            subTitleColorHover,
            subTitleSpacing,

            separatorStyle,
            separatorColor,
            separatorColorHover,
            separatorStroke,
            separatorPosition,
            separatorWidth,
            separatorSpacing,

            //content
            enableContent,
            content,
            contentTypography,
            contentColor,
            contentColorHover,
            contentPadding,
            contentSpacing,

            iconName,
            iconSize,
            iconSizeCustom,
            iconColor,
            iconHoverColor,
            useMediaBg,
            mediaBg,
            mediaBgHover,
            mediaBorderRadius,
            mediaBackgroundSize,
            mediaBorder,
            mediaBorderColorHover,
            mediaShadow,
            mediaShadowHover,
            mediaSpacing,

            image,
            image2x,
            imgAlt,
            imageType,
            imageWidth,
            externalImageUrl,

            number,
            numberColor,
            numberColorHover,
            numberTypography,

            bgColor,
            bgColorHover,
            bgBorder,
            bgBorderColorHover,
            bgPadding,
            bgBorderRadius,
            bgShadow,
            bgShadowHover,
            enableButton,

            // Button
            buttonSize,
            buttonFillType,
            buttonText,
            buttonIconName,
            buttonIconPosition,
            buttonUrl,


            bannerHeight,
            effect,
            animation,
            enablePosition,
            selectPosition,
            positionXaxis,
            positionYaxis,
            globalZindex,
            hideTablet,
            hideMobile,
            globalCss,
            interaction
        } = this.props.attributes

        const { name, clientId, attributes, isSelected, setAttributes } = this.props
        const { openPanelSetting, device } = this.state
        const separators = {
            solid: { type: 'css', separator: 'solid', width: 300, stroke: 10 },
            double: { type: 'css', separator: 'double', width: 300, stroke: 10 },
            dotted: { type: 'css', separator: 'dotted', width: 300, stroke: 10 },
            dashed: { type: 'css', separator: 'dashed', width: 300, stroke: 10 },
            pin: { type: 'svg', separator: 'pin', svg: svg['pin'], width: 100, stroke: 0 },
            pin_filled: { type: 'svg', separator: 'pin_filled', svg: svg['pin_filled'], width: 100, stroke: 0 },
            zigzag: { type: 'svg', separator: 'zigzag', svg: svg['zigzag'], style: 'fill', width: 88, stroke: 5 },
            zigzag_large: { type: 'svg', separator: 'zigzag_large', svg: svg['zigzag_large'], style: 'fill', width: 161, stroke: 5 },
        }

        const titleTagName = 'h' + titleLevel;
        const subTitleTagName = 'h' + subTitleLevel;

        const renderSeparators = <Fragment>
            {separatorStyle &&
                <Fragment>
                    {separators[separatorStyle].type == 'css' &&
                        <span className={`wprig-separator-type-css wprig-separator-${separatorStyle}`}></span>
                    }
                    {separators[separatorStyle].type == 'svg' &&
                        <span className={`wprig-separator-type-svg wprig-separator-${separatorStyle}`}>{separators[separatorStyle].svg}</span>
                    }
                </Fragment>
            }
        </Fragment>

        return (
            <Fragment>
                <InspectorControls key="inspector">
                    <InspectorTabs tabs={['style', 'advance']}>
                        <InspectorTab key={'style'}>
                            <PanelBody title={__('Layout')} initialOpen={true}>             
                                <Range label={__('Banner Height')} value={bannerHeight} onChange={val => setAttributes({ bannerHeight: val })} min={170} max={720} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />                   
                                <Alignment label={__('Alignment')} value={alignment} alignmentType="content" onChange={val => setAttributes({ alignment: val })} alignmentType="content" disableJustify responsive device={device} onDeviceChange={value => this.setState({ device: value })} />                               
                                <SelectControl
                                    label={__('Info Banner Effect')}
                                    value={effect}
                                    options={[
                                        { label: '--Select--', value: '' },
                                        { label: 'Effect 1', value: 'interactive-banner--effect-1' },
                                        { label: 'Effect 2', value: 'interactive-banner--effect-2' },
                                        { label: 'Effect 3', value: 'interactive-banner--effect-3' },
                                        { label: 'Effect 4', value: 'interactive-banner--effect-4' },
                                        { label: 'Effect 5', value: 'interactive-banner--effect-5' },
                                        { label: 'Effect 6', value: 'interactive-banner--effect-6' },
                                        { label: 'Effect 7', value: 'interactive-banner--effect-7' },
                                        { label: 'Effect 8', value: 'interactive-banner--effect-8' },
                                        { label: 'Effect 9', value: 'interactive-banner--effect-9' },
                                        { label: 'Effect 10', value: 'interactive-banner--effect-10' },
                                        { label: 'Effect 11', value: 'interactive-banner--effect-11' },
                                        { label: 'Effect 12', value: 'interactive-banner--effect-12' },
                                    ]}
                                    onChange={val => setAttributes({ effect: val })}
                                />
                            </PanelBody>

                            {layout != 4 &&
                                <PanelBody title={__('Media')} opened={'Media' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Media' ? 'Media' : '')}>
                                    <RadioAdvanced
                                        label={__('Type')}
                                        value={mediaType}
                                        options={[
                                            { label: __('Image'), value: 'image', title: __('Image') },
                                        ]}
                                        onChange={val => setAttributes({ mediaType: val, recreateStyles: !recreateStyles })}
                                    />
                                    {mediaType &&
                                        <Fragment>                                         
                                            {mediaType == 'image' &&
                                                <Fragment>
                                                    <ButtonGroup
                                                        label={__('Image Type')}
                                                        options={
                                                            [
                                                                [__('Local'), 'local'],
                                                                [__('External'), 'external']
                                                            ]
                                                        }
                                                        value={imageType}
                                                        onChange={value => setAttributes({ imageType: value })}
                                                    />
                                                    {
                                                        imageType === 'local' ?
                                                            <Fragment>
                                                                <Media label={__('Image')} multiple={false} type={['image']} panel={true} value={image} onChange={val => setAttributes({ image: val })} />
                                                                <Media label={__('Retina Image')} multiple={false} type={['image']} panel={true} value={image2x} onChange={val => setAttributes({ image2x: val })} />
                                                            </Fragment>
                                                            :
                                                            <Url label={__('Image Source')} disableAdvanced value={externalImageUrl} onChange={newUrl => setAttributes({ externalImageUrl: newUrl })} />
                                                    }
                                                    <TextControl label={__('Alt Text')} value={imgAlt} onChange={val => setAttributes({ imgAlt: val })} />
                                                    <Range label={__('Image Width')} value={imageWidth} onChange={val => setAttributes({ imageWidth: val })} min={0} max={2000} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                                </Fragment>
                                            }                                        
                                        
                                            <BorderRadius label={__('Radius')} value={mediaBorderRadius} onChange={val => setAttributes({ mediaBorderRadius: val })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                            <Range label={__('Spacing')} value={mediaSpacing} onChange={val => setAttributes({ mediaSpacing: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        </Fragment>
                                    }
                                </PanelBody>
                            
                            }

                            <PanelBody title={__('Title')} opened={'Title' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Title' ? 'Title' : '')}>
                                <Toggle label={__('Enable')} value={enableTitle} onChange={val => setAttributes({ enableTitle: val })} />
                                {enableTitle == 1 && 
                                <Fragment>
                                <Headings label={__('Title Tag')} selectedLevel={titleLevel} onChange={(value) => setAttributes({ titleLevel: value })} />
                                <Typography label={__('Typography')} value={titleTypography} onChange={(value) => setAttributes({ titleTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <Range label={<span>Spacing <span className="dashicons dashicons-sort" title="Y Spacing" /></span>} value={titleSpacing} onChange={val => setAttributes({ titleSpacing: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <Color label={__('Color')} value={titleColor} onChange={(value) => setAttributes({ titleColor: value })} />
                                    </Tab>
                                    <Tab tabTitle={__('Hover')}>
                                        <Color label={__('Color')} value={titleColorHover} onChange={(value) => setAttributes({ titleColorHover: value })} />
                                    </Tab>
                                </Tabs>

                                <SelectControl
                                    label={__('Separator')}
                                    value={separatorStyle}
                                    options={[
                                        { label: '--Select--', value: '' },
                                        { label: 'Line', value: 'solid' },
                                        { label: 'Line Doubled', value: 'double' },
                                        { label: 'Dashed', value: 'dashed' },
                                        { label: 'Dotted', value: 'dotted' },
                                        { label: 'Pin', value: 'pin' },
                                        { label: 'Pin Filled', value: 'pin_filled' },
                                        { label: 'Zigzag', value: 'zigzag' },
                                        { label: 'Zigzag Large', value: 'zigzag_large' }
                                    ]}
                                    onChange={val => setAttributes({ separatorStyle: val })}
                                />
                                {separatorStyle &&
                                    <Fragment>
                                        <Tabs>
                                            <Tab tabTitle={__('Normal')}>
                                                <Color label={__('Separator Color')} value={separatorColor} onChange={val => setAttributes({ separatorColor: val })} />
                                            </Tab>
                                            <Tab tabTitle={__('Hover')}>
                                                <Color label={__('Separator Color')} value={separatorColorHover} onChange={val => setAttributes({ separatorColorHover: val })} />
                                            </Tab>
                                        </Tabs>
                                        {(separatorStyle != 'pin' && separatorStyle != 'pin_filled') &&
                                            <Range label={__('Stroke')} value={separatorStroke} onChange={val => setAttributes({ separatorStroke: val })} min={1} max={separators[separatorStyle].stroke} />
                                        }
                                        <Range label={__('Width')} value={separatorWidth} onChange={val => setAttributes({ separatorWidth: val })} min={20} max={separators[separatorStyle].width} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Range label={__('Spacing')} value={separatorSpacing} onChange={val => setAttributes({ separatorSpacing: val })} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <SelectControl
                                            label="Position"
                                            value={separatorPosition}
                                            options={[
                                                { label: 'Top', value: 'top' },
                                                { label: 'Bottom', value: 'bottom' },
                                                { label: 'Left', value: 'left' },
                                                { label: 'Right', value: 'right' },
                                                { label: 'Left & Right', value: 'leftright' }
                                            ]}
                                            onChange={val => setAttributes({ separatorPosition: val })}
                                        />
                                    </Fragment>
                                }

                                </Fragment>
                                }
                            </PanelBody>

                            <PanelBody title={__('Sub Title')} opened={'Sub Title' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Sub Title' ? 'Sub Title' : '')}>
                                <Toggle label={__('Enable')} value={subTitle} onChange={val => setAttributes({ subTitle: val })} />
                                {subTitle == 1 &&
                                    <Fragment>
                                        <Headings label={__('Sub Title Tag')} selectedLevel={subTitleLevel} onChange={(value) => setAttributes({ subTitleLevel: value })} />
                                        <Typography label={__('Typography')} value={subTitleTypography} onChange={val => setAttributes({ subTitleTypography: val })} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Tabs>
                                            <Tab tabTitle={__('Normal')}>
                                                <Color label={__('Color')} value={subTitleColor} onChange={val => setAttributes({ subTitleColor: val })} />
                                            </Tab>
                                            <Tab tabTitle={__('Hover')}>
                                                <Color label={__('Color')} value={subTitleColorHover} onChange={val => setAttributes({ subTitleColorHover: val })} />
                                            </Tab>
                                        </Tabs>
                                        <Range label={__('Spacing')} value={subTitleSpacing} onChange={(value) => setAttributes({ subTitleSpacing: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    </Fragment>
                                }
                            </PanelBody>


                            <PanelBody title={__('Content')} opened={'Content' === openPanelSetting} onToggle={() => this.handlePanelOpenings(openPanelSetting !== 'Content' ? 'Content' : '')}>
                                <Toggle label={__('Show Content')} value={enableContent} onChange={val => setAttributes({ enableContent: val })} />
                                {
                                    enableContent &&
                                    <Fragment>

                                        <Typography label={__('Typography')} value={contentTypography} onChange={(value) => setAttributes({ contentTypography: value })} device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Tabs>
                                            <Tab tabTitle={__('Normal')}>
                                                <Color label={__('Color')} value={contentColor} onChange={(value) => setAttributes({ contentColor: value })} />
                                            </Tab>
                                            <Tab tabTitle={__('Hover')}>
                                                <Color label={__('Color')} value={contentColorHover} onChange={(value) => setAttributes({ contentColorHover: value })} />
                                            </Tab>
                                        </Tabs>
                                        <Padding label={__('Padding')} value={contentPadding} onChange={val => setAttributes({ contentPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        {enableButton &&
                                            <Range label={__('Spacing')} value={contentSpacing} onChange={(value) => setAttributes({ contentSpacing: value })} unit={['px', 'em', '%']} min={0} max={100} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        }
                                    </Fragment>
                                }
                            </PanelBody>

                            <PanelBody title={__('Background')} initialOpen={false}>
                                <Tabs>
                                    <Tab tabTitle={__('Normal')}>
                                        <ColorAdvanced label={__('Background Color')} value={bgColor} onChange={val => setAttributes({ bgColor: val })} />
                                        <Padding label={__('Padding')} value={bgPadding} onChange={val => setAttributes({ bgPadding: val })} min={0} max={200} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <Border label={__('Border')} value={bgBorder} onChange={val => setAttributes({ bgBorder: val })} min={0} max={10} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                        <BoxShadow label={__('Box-Shadow')} value={bgShadow} onChange={(value) => setAttributes({ bgShadow: value })} />
                                        <BorderRadius label={__('Radius')} value={bgBorderRadius} onChange={(value) => setAttributes({ bgBorderRadius: value })} min={0} max={100} unit={['px', 'em', '%']} responsive device={device} onDeviceChange={value => this.setState({ device: value })} />
                                    </Tab>
                                    <Tab tabTitle={__('Hover')}>
                                        <ColorAdvanced label={__('Background Color')} value={bgColorHover} onChange={val => setAttributes({ bgColorHover: val })} />
                                        <BoxShadow label={__('Box-Shadow')} value={bgShadowHover} onChange={(value) => setAttributes({ bgShadowHover: value })} />
                                        <Color label={__('Border Color')} value={bgBorderColorHover} onChange={(value) => setAttributes({ bgBorderColorHover: value })} />
                                    </Tab>
                                </Tabs>
                            </PanelBody>
                            {buttonSettings(this.props.attributes, device, (key, value) => { setAttributes({ [key]: value }) }, (key, value) => { this.setState({ [key]: value }) })}
                        </InspectorTab>
                        <InspectorTab key={'advance'}>
                            {animationSettings(uniqueId, animation, setAttributes)}
                            {interactionSettings(uniqueId, interaction, setAttributes)}
                        </InspectorTab>
                    </InspectorTabs> 
                </InspectorControls>

                <BlockControls>
                    <Toolbar>
                        <InlineToolbar
                            data={[{ name: 'InlineSpacer', key: 'spacer', responsive: true, unit: ['px', 'em', '%'] }]}
                            {...this.props}
                            prevState={this.state}
                        />
                    </Toolbar>
                </BlockControls>

                {globalSettingsPanel(enablePosition, selectPosition, positionXaxis, positionYaxis, globalZindex, hideTablet, hideMobile, globalCss, setAttributes)}

                <div className={`wprig-block-${uniqueId}${className ? ` ${className}` : ''}`}>
                    <div
                        className={`wprig-block-info-box wprig-info-box-layout-${layout} wprig-interactive-banner ${effect}`}
                        onContextMenu={event => handleContextMenu(event, this.wprigContextMenu.current)}
                    >
                        {(layout != 4 && mediaType) &&
                            <div className={`wprig-info-box-media${(useMediaBg && mediaType !== 'image') ? ' wprig-media-has-bg' : ''}`} onClick={() => this.handlePanelOpenings('Media')}>
                                {(mediaType == 'icon' && iconName) &&
                                    <i className={"wprig-info-box-icon " + iconName} />
                                }
                                {(mediaType == 'image') &&
                                    <Fragment>
                                        {
                                            (imageType === 'local' && image.url != undefined) ?
                                                <img className="wprig-info-box-image" src={image.url} srcset={image2x.url != undefined ? image.url + ' 1x, ' + image2x.url + ' 2x' : ''} alt={imgAlt && imgAlt} />
                                                :
                                                (imageType === 'external' && externalImageUrl.url != undefined) ?
                                                    <img className="wprig-info-box-image" src={externalImageUrl.url} alt={imgAlt && imgAlt} />
                                                    :
                                                    <div className="wprig-info-box-image wprig-image-placeholder"><i className="far fa-image" /></div>
                                        }
                                    </Fragment>
                                }
                                {(mediaType == 'number' && number) &&
                                    <span className="wprig-info-box-number">{number}</span>
                                }
                                <div className = "wprig-info-box-media-overlay"></div>
                            </div>
                        }
                        
                        
                        <div className="wprig-info-box-body">
                            <div className={`wprig-info-box-title-container ${separatorStyle ? 'wprig-has-separator' : ''} ${separatorPosition ? 'wprig-separator-position-' + separatorPosition : ''}`} >
                            {enableTitle == 1 &&
                                <div className="wprig-info-box-title-inner">
                                    {separatorStyle && (separatorPosition == 'left' || separatorPosition == 'top' || separatorPosition == 'leftright') ? <div className="wprig-separator wprig-separator-before">{renderSeparators}</div> : ''}
                                    
                                    
                                    <div onClick={() => this.handlePanelOpenings('Title')}>
                                        <RichText
                                            key="editable"
                                            tagName={titleTagName}
                                            className="wprig-info-box-title"
                                            keepPlaceholderOnFocus
                                            placeholder={__('Add Text...')}
                                            onChange={value => setAttributes({ title: value })}
                                            value={title} />
                                    </div>
                                    {separatorStyle != '' && (separatorPosition == 'right' || separatorPosition == 'bottom' || separatorPosition == 'leftright') ? <div className="wprig-separator wprig-separator-after">{renderSeparators}</div> : ''}
                                </div>

                                }

                                {subTitle == 1 &&
                                    <div className="wprig-info-box-sub-title-container" onClick={() => this.handlePanelOpenings('Sub Title')}>
                                        <RichText
                                            key="editable"
                                            tagName={subTitleTagName}
                                            className="wprig-info-box-sub-title"
                                            keepPlaceholderOnFocus
                                            placeholder={__('Add Text...')}
                                            onChange={value => setAttributes({ subTitleContent: value })}
                                            value={subTitleContent} />
                                    </div>
                                }
                            </div>

                            {
                                enableContent &&
                                <div className="wprig-info-box-content" onClick={() => this.handlePanelOpenings('Content')}>
                                    <RichText
                                        key="editable"
                                        tagName='div'
                                        className="wprig-info-box-text"
                                        keepPlaceholderOnFocus
                                        placeholder={__('Add Text...')}
                                        onChange={value => setAttributes({ content: value })}
                                        value={content}
                                    />
                                </div>
                            }
                            {enableButton &&
                                <WPRigButtonEdit
                                    enableButton={enableButton}
                                    buttonFillType={buttonFillType}
                                    buttonSize={buttonSize}
                                    buttonText={buttonText}
                                    buttonIconName={buttonIconName}
                                    buttonIconPosition={buttonIconPosition}
                                    buttonUrl={buttonUrl}
                                    onTextChange={value => setAttributes({ buttonText: value })}
                                />
                            }
                        </div>
                        <div
                            ref={this.wprigContextMenu}
                            className={`wprig-context-menu-wraper`}
                        >
                            <ContextMenu
                                name={name}
                                clientId={clientId}
                                attributes={attributes}
                                setAttributes={setAttributes}
                                wprigContextMenu={this.wprigContextMenu.current}
                            />
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default withCSSGenerator()(Edit);