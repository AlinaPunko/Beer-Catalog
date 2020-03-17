import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/common/Icon/icon';

import './imagesSlider.scss';
import left from 'styles/icons/left.svg';
import right from 'styles/icons/right.svg';

export default class ImagesSlider extends React.PureComponent {
    static propTypes = {
        images: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            currentImageIndex: 0
        };
    }

    setPreviousSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    setNextSlide = () => {
        const lastIndex = this.props.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const { currentImageIndex } = this.state;
        const { images } = this.props;
        if (images.length === 0) {
            return null;
        }

        return (
            <div className="images-slider">
                <button type="button" className="images-slider__button" onClick={this.setPreviousSlide}>
                    <Icon icon={left} iconClassName="images-slider__button-icon" />
                </button>
                <img src={images[currentImageIndex]} alt="Image_item" className="images-slider__image" />
                <button type="button" className="images-slider__button" onClick={this.setNextSlide}>
                    <Icon icon={right} iconClassName="images-slider__button-icon" />
                </button>
            </div>
        );
    }
}
