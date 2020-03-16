import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import redirectToHomePageHelper from 'helpers/redirectToHomePageHelper';
import BrewingIngredients from 'components/common/BrewingIngredients/brewingIngredients';
import BrewingMethods from 'components/common/BrewingMethods/brewingMethods';
import beerService from 'services/beerService';
import serviceWrapper from 'helpers/serviceWrapper';
import brewingService from 'services/brewingService';
import ImagesSlider from 'components/common/ImagesSlider/imagesSlider';

import './brewingInfoPage.scss';

class BrewingInfoPage extends React.PureComponent {
    static propTypes={
        match: PropTypes.shape({
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isExact: PropTypes.bool.isRequired,
            params: PropTypes.shape({
                id: PropTypes.string.isRequired
            }).isRequired
        }).isRequired,
        history: PropTypes.shape({
            length: PropTypes.number.isRequired,
            action: PropTypes.string.isRequired,
            location: PropTypes.shape({
                pathname: PropTypes.string.isRequired,
                search: PropTypes.string.isRequired,
                hash: PropTypes.string.isRequired,
                key: PropTypes.string.isRequired
            }),
            push: PropTypes.func.isRequired
        }).isRequired
    }

    static contextType = UserContext;

    constructor(props) {
        super(props);
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const time = `${today.getHours()}:${today.getMinutes()}`;
        const dateTime = `${date} ${time}`;
        this.state = {
            beerInfo: null,
            location: '',
            datetime: dateTime,
            brewType: '',
            impression: '',
            images: []
        };
        this.getBeer(this.props.match.params.id);
    }

    async getBeer(id) {
        const result = await beerService.getByID(id);
        this.setState({ beerInfo: result });
    }

    changeLocation = (e) => {
        this.setState({
            location: e.target.value
        });
    }

    changeImpression = (e) => {
        this.setState({
            impression: e.target.value
        });
    }

    changeBrewType = (e) => {
        this.setState({
            brewType: e.target.value
        });
    }

    save = async (e) => {
        e.preventDefault();
        const brew = {
            userId: this.context.userId,
            datetime: this.state.datetime,
            location: this.state.location,
            images: this.state.images,
            brewType: this.state.brewType,
            brewName: this.state.beerInfo.name,
            impression: this.state.impression,
            ingredients: this.state.beerInfo.ingredients,
            methods: this.state.beerInfo.method
        };
        await serviceWrapper.callService(brewingService.add, brew, null);
    }

    close = (e) => {
        e.preventDefault();
        redirectToHomePageHelper.redirect(this.props.history);
    }

    addPhoto = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/x-png,image/gif,image/jpeg';
        const previousImages = this.state.images;

        input.onchange = () => {
            const filesSelected = input.files;
            if (filesSelected.length > 0) {
                const fileToLoad = filesSelected[0];
                const fileReader = new FileReader();
                fileReader.onload = (fileLoadedEvent) => {
                    previousImages.push(fileLoadedEvent.target.result);
                    this.setState({
                        images: previousImages
                    });
                };
                fileReader.readAsDataURL(fileToLoad);
            }
        };
        input.click();
    }

    render() {
        const {
            beerInfo,
            location,
            datetime,
            brewType,
            impression,
            images
        } = this.state;

        if (!beerInfo) {
            return null;
        }
        return (
            <section className="brewing-info-page">
                <h1 className="brewing-info-page__title">Brewing Info</h1>
                <form>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Location</label>
                        <input
                            name="location"
                            type="text"
                            value={location}
                            className="brewing-info-page__field-input"
                            onChange={this.changeLocation}
                        />
                    </div>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Date and time</label>
                        <input
                            name="datetime"
                            type="text"
                            value={datetime}
                            className="brewing-info-page__field-input"
                            disabled
                        />
                    </div>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Brew name</label>
                        <input
                            name="location"
                            type="text"
                            value={beerInfo.name}
                            className="brewing-info-page__field-input"
                            disabled
                        />
                    </div>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Brew type</label>
                        <input
                            name="brewType"
                            type="text"
                            onChange={this.changeBrewType}
                            value={brewType}
                            className="brewing-info-page__field-input"
                        />
                    </div>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Impression</label>
                        <textarea
                            name="impression"
                            type="text"
                            value={impression}
                            className="brewing-info-page__field-input"
                            onChange={this.changeImpression}
                        />
                    </div>
                    <button className="brewing-info-page__button" type="button" onClick={this.onAddPhotoClick}>
                        Add image
                    </button>
                    <ImagesSlider images={images} />
                    <div className="brewing-info-page__ingredients-method">
                        <BrewingIngredients ingredients={beerInfo.ingredients} />
                        <BrewingMethods method={beerInfo.method} />
                    </div>
                    <div className="brewing-info-page__buttons">
                        <input type="submit" onClick={this.save} value="Save" className="brewing-info-page__button" />
                        <input type="reset" onClick={this.close} value="Close" className="brewing-info-page__button" />
                    </div>
                </form>
            </section>
        );
    }
}

export default withRouter(BrewingInfoPage);
