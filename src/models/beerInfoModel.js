export default class BeerInfo {
    constructor(dataModel) {
        this.id = dataModel.id;
        this.name = dataModel.name;
        this.tagline = dataModel.tagline;
        this.description = dataModel.description;
        this.imageUrl = dataModel.image_url;
        this.alcohol = dataModel.abv;
        this.color = dataModel.ebc;
        this.internationalBitternessUnits = dataModel.ibu;
        this.brewerTips = dataModel.brewers_tips;
        this.foodPairing = dataModel.food_pairing;
        this.ingredients = dataModel.ingredients;
        this.method = dataModel.method;
        this.volume = dataModel.volume;
        this.boilVolume = dataModel.boil_volume;
        this.attentuationLevel = dataModel.attetuation_level;
        this.ph = dataModel.ph;
        this.targetFg = dataModel.target_fg;
        this.targetOg = dataModel.target_og;
        this.standartReferenceMethod = dataModel.srm;
    }
}
