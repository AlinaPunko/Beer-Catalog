export default class BeerShortInfo {
    constructor(dataModel) {
        this.id = dataModel.id;
        this.name = dataModel.name;
        this.tagline = dataModel.tagline;
        this.description = dataModel.description;
        this.imageUrl = dataModel.image_url;
        this.alcohol = dataModel.abv;
        this.color = dataModel.ebc;
        this.internationalBitternessUnits = dataModel.ibu;
    }
}
