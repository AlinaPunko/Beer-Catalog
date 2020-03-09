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
        debugger;
        this.state = {
            currentImageIndex: 0,
            images: this.props.images
        };
    }

    previousSlide = () => {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }

    nextSlide = () => {
        const lastIndex = this.state.images.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    render() {
        const { images, currentImageIndex } = this.state;
        if (images.length === 0) {
            return null;
        }
        return (
            <div className="images-slider">
                <button type="button" className="images-slider__button" onClick={this.previousSlide}>
                    <Icon icon={left} iconClassName="images-slider__button-icon" />
                </button>
                <img src={images[currentImageIndex]} alt="" className="images-slider__image" />
                <button type="button" className="images-slider__button" onClick={this.nextSlide}>
                    <Icon icon={right} iconClassName="images-slider__button-icon" />
                </button>
            </div>
        );
    }
}
