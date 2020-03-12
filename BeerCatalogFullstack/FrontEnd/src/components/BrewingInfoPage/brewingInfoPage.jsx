import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import FormRow from 'components/common/FormRow/formRow';
import SelectPhotoField from 'components/common/SelectPhotoField/selectPhotoField';
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
            beerType: '',
            impression: '',
            photos: []
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

    changeBeerType = (e) => {
        this.setState({
            beerType: e.target.value
        });
    }

    getMalts = () => {
        const malts = [];
        this.state.beerInfo.ingredients.malt.forEach((item) => {
            malts.push(
                {
                    beerId: this.state.beerInfo.id,
                    name: item.name,
                    amountValue: item.amount.value,
                    amountUnit: item.amount.unit
                }
            );
        });

        return malts;
    }

    getMashTemperatures = () => {
        const mashTemperatues = [];
        this.state.beerInfo.method.mash_temp.forEach((item) => {
            mashTemperatues.push({
                beerId: this.state.beerInfo.id,
                duration: item.duration,
                temperatureValue: item.temp.value,
                temperatureUnit: item.temp.unit
            });
        });

        return mashTemperatues;
    }

    getHops = () => {
        const hops = [];
        this.state.beerInfo.ingredients.hops.forEach((item) => {
            hops.push({
                beerId: this.state.beerInfo.id,
                name: item.name,
                amountValue: item.amount.value,
                amountUnit: item.amount.unit,
                add: item.amount.add,
                attribute: item.amount.attribute
            });
        });

        return hops;
    }

    save = async (e) => {
        e.preventDefault();

        const {
            beerInfo,
            location,
            datetime,
            beerType,
            impression,
            photos
        } = this.state;

        const fermentation = {
            beerId: beerInfo.id,
            temperatureValue: beerInfo.method.fermentation.temp.value,
            temperatureUnit: beerInfo.method.fermentation.temp.unit
        };

        const yeast = {
            beerId: beerInfo.id,
            Name: beerInfo.ingredients.yeast
        };

        const brew = {
            id: 0,
            userId: this.context.userId,
            beerId: beerInfo.id,
            tagline: beerInfo.tagline,
            imageUrl: beerInfo.imageUrl,
            datetime,
            location,
            photos,
            beerType,
            name: beerInfo.name,
            impression,
            rating: 0,
            hops: this.getHops(),
            malt: this.getMalts(),
            fermentation,
            yeast,
            mashTemperatures: this.getMashTemperatures()
        };

        await serviceWrapper.callService(brewingService.add, brew, null);
    }

    close = (e) => {
        e.preventDefault();
        redirectToHomePageHelper.redirect(this.props.history);
    }

    addPhoto = (e) => {
        const filesSelected = e.target.files;
        if (filesSelected.length > 0) {
            const fileToLoad = filesSelected[0];
            const fileReader = new FileReader();
            fileReader.onload = (fileLoadedEvent) => {
                const srcData = fileLoadedEvent.target.result;
                this.setState({ photos: this.state.photos.concat(srcData) });
            };
            fileReader.readAsDataURL(fileToLoad);
        }
    }

    render() {
        const {
            beerInfo,
            location,
            datetime,
            beerType,
            impression,
            photos
        } = this.state;

        if (!beerInfo) {
            return null;
        }
        return (
            <section className="brewing-info-page">
                <h1 className="brewing-info-page__title">Brewing Info</h1>
                <form>
                    <FormRow name="location" type="text" label="Location:" onChange={this.changeLocation} value={location} />
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Date and time:</label>
                        <input
                            name="datetime"
                            type="text"
                            value={datetime}
                            className="brewing-info-page__field-input"
                            disabled
                        />
                    </div>
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Brew name:</label>
                        <input
                            name="location"
                            type="text"
                            value={beerInfo.name}
                            className="brewing-info-page__field-input"
                            disabled
                        />
                    </div>
                    <FormRow name="beerType" type="text" label="Beer type:" onChange={this.changeBeerType} value={beerType} />
                    <div className="brewing-info-page__field">
                        <label className="brewing-info-page__field-title">Impression:</label>
                        <textarea
                            onChange={this.changeImpression}
                            name="location"
                            value={impression}
                            className="brewing-info-page__impression-field"
                        />
                    </div>
                    <SelectPhotoField onChange={this.addPhoto} />
                    <ImagesSlider images={photos} />
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
