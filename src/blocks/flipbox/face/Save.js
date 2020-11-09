import classnames from 'classnames';
const { Component } = wp.element;
const { InnerBlocks } = wp.blockEditor;
class Save extends Component {
    render() {
        const {
            attributes: {
                id,
                customClassName
            }
        } = this.props;

        return (
            <div className={customClassName}>
                <InnerBlocks.Content />
            </div>
        );
    }
}
export default Save;