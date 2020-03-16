import React from 'react';
import { withRouter } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import PropTypes from 'prop-types';

import { UserContext } from 'store/context/userContext';
import Input from 'components/common/Input/input';
import SelectPhotoField from 'components/common/PhotoSelector/photoSelector';
import brewValidationConfig from 'validationConfigs/brewValidationConfig';
import redirectHelper from 'helpers/redirectHelper';
import BrewingIngredients from 'components/common/BrewingIngredients/brewingIngredients';
import BrewingMethods from 'components/common/BrewingMethods/brewingMethods';
import beerService from 'services/beerService';
import serviceWrapper from 'helpers/serviceWrapper';
import brewingService from 'services/brewingService';
import ImagesSlider from 'components/common/ImagesSlider/imagesSlider';
import RatingPanel from 'components/brewingInfoPage/RatingPanel/ratingPanel';

import './brewingInfoSection.scss';

class BrewingInfoSection extends React.PureComponent {
    static propTypes={
        match: PropTypes.shape({
            path: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            isExact: PropTypes.bool.isRequired,
            params: PropTypes.shape({
                beerId: PropTypes.number.isRequired,
                brewId: PropTypes.number.isRequired
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

    constructor(props, context) {
        super(props, context);
        this.validator = new SimpleReactValidator();
        const { params } = this.props.match;
        const today = new Date();
        const date = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
        const time = `${today.getHours()}:${today.getMinutes()}`;
        const dateTime = `${date} ${time}`;

        this.state = {
            id: 0,
            userId: this.context.userId,
            beerInfo: null,
            location: '',
            rating: 0,
            datetime: dateTime,
            beerType: '',
            impression: '',
            photos: []
        };

        this.getBeer(params.beerId);
        if (params.brewId) {
            this.getBrew(params.brewId);
        }
    }

    async getBeer(id) {
        const result = await beerService.getByID(id);
        this.setState({ beerInfo: result });
    }


    async getBrew(id) {
        const result = await brewingService.getBrewById(id);

        if (result) {
            this.setState(
                {
                    id: result.id,
                    location: result.location,
                    userId: result.userId,
                    datetime: result.dateTime,
                    beerType: result.beerType,
                    rating: result.rating,
                    impression: result.impression,
                    photos: result.photos ? result.photos : []
                }
            );
        }
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
            id,
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
            id,
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

        if (this.validator.allValid()) {
            if (this.state.id) {
                await serviceWrapper.callService(brewingService.update, brew, null);
                alert('Brew has been updated');
                redirectHelper.redirectToHomePage(this.props.history);
                return;
            }
            alert('Brew has been added');
            await serviceWrapper.callService(brewingService.add, brew, this.errorFieldRef);
            redirectHelper.redirectToHomePage(this.props.history);
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
    }

    close = (e) => {
        e.preventDefault();
        redirectToHomePageHelper.redirect(this.props.history);
    }

    delete = async () => {
        const {
            id,
            beerInfo,
            location,
            datetime,
            beerType,
            impression,
            photos
        } = this.state;

        const brew = {
            id,
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
            rating
        };

        await serviceWrapper.callService(brewingService.deleteItem, brew, this.errorFieldRef);
        alert('Brew has been deleted');
        redirectToHomePageHelper.redirect(this.props.history);
    }

    addPhoto = () => {
        this.setState({ photos: this.state.photos.concat(srcData) });
    }

    renderButtons = () => {
        if (this.state.userId === this.context.userId) {
            return (
                <div className="brewing-info-section__buttons">
                    <input type="submit" onClick={this.save} value="Save" className="brewing-info-section__button" />
                    <input type="button" onClick={this.delete} value="Delete" className="brewing-info-section__delete-button" />
                    <input type="reset" onClick={this.close} value="Delete" className="brewing-info-section__button" />
                </div>
            );
        }
        return null;
    }

    renderValidationResult = () => {
        return (
            <div className="brewing-info-section__validation-result" ref={this.errorFieldRef}>
                {
                    this.validator.message(brewValidationConfig.beerType.fieldName, this.state.beerType, brewValidationConfig.beerType.rule)
                }
                {
                    this.validator.message(brewValidationConfig.impression.fieldName, this.state.impression, brewValidationConfig.impression.rule)
                }
            </div>
        );
    }

    render() {
        const {
            id,
            rating,
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
            <section className="brewing-info-section">
                <h1 className="brewing-info-section__title">Brewing Info</h1>
                <form>
                    <Input name="location" type="text" label="Location:" onChange={this.changeLocation} value={location} />
                    <div className="brewing-info-section__field">
                        <label className="brewing-info-section__field-title">Date and time:</label>
                        <input
                            name="datetime"
                            type="text"
                            value={datetime}
                            className="brewing-info-section__field-input"
                            disabled
                        />
                    </div>
                    <div className="brewing-info-section__field">
                        <label className="brewing-info-section__field-title">Brew name:</label>
                        <input
                            name="location"
                            type="text"
                            value={beerInfo.name}
                            className="brewing-info-section__field-input"
                            disabled
                        />
                    </div>
                    <Input name="beerType" type="text" label="Beer type:" onChange={this.changeBeerType} value={beerType} />
                    <div className="brewing-info-section__field">
                        <label className="brewing-info-section__field-title">Impression:</label>
                        <textarea
                            onChange={this.changeImpression}
                            name="location"
                            value={impression}
                            className="brewing-info-section__impression-field"
                        />
                    </div>
                    {
                        this.renderValidationResult()
                    }
                    <SelectPhotoField onChange={this.addPhoto} />
                    <ImagesSlider images={photos} />
                    <div className="brewing-info-section__ingredients-method">
                        <BrewingIngredients ingredients={beerInfo.ingredients} />
                        <div>
                            <BrewingMethods method={beerInfo.method} />
                            <RatingPanel rating={rating} brewId={id} />
                        </div>
                    </div>
                    {this.renderButtons()}
                </form>
            </section>
        );
    }
}

export default withRouter(BrewingInfoSection);
