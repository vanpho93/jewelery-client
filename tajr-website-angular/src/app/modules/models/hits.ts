import {environment} from '../../../environments/environment';

export class Hits {
  private _listing_id: string;
  private _category_dc: string;
  private _full_category_id: string;
  private _category_arabic_level_1: string;
  private _category_english_level_1: string;
  private _category_number_level_1: string;
  private _category_arabic_level_2: string;
  private _category_english_level_2: string;
  private _category_number_level_2: string;
  private _category_arabic_level_3: string;
  private _category_english_level_3: string;
  private _category_number_level_3: string;
  private _modelDetail: string;
  private _bodyStyle: string;
  private _model: string;
  private _listingType: string;
  private _subtitle: string;
  private _showMobileNumber: string;
  private _title: string;
  private _year: string;
  private _kilometers: string;
  private _askingPrice: string;
  private _onRoadCostsIncluded: string;
  private _startDate: string;
  private _endDate: string;
  private _photo_1: string;
  private _member_id: string;
  private _username: string;
  private _member_since: string;
  private _locality_arabic: string;
  private _locality_english: string;
  private _district_arabic: string;
  private _district_english: string;
  private _orNearOffer:string;
  private _dd:string;
  private _watchlist_id:string;
  private _description:string;

  hasFirstPhoto() {
    const noImageUrl = '../../../assets/images/item-images/tajr-item000001.png';
    if (this.photo_1 !== undefined && this.photo_1 !== null) {
      return environment.baseUrl + '/v1/photos/' + this.photo_1 + '/sizes/508x380';
    }
    return noImageUrl;
  }

  get watchlist_id(): string {
    return this._watchlist_id;
  }

  set watchlist_id(value: string) {
    this._watchlist_id = value;
  }

  get listing_id(): string {
    return this._listing_id;
  }

  set listing_id(value: string) {
    this._listing_id = value;
  }

  get category_dc(): string {
    return this._category_dc;
  }

  set category_dc(value: string) {
    this._category_dc = value;
  }

  get full_category_id(): string {
    return this._full_category_id;
  }

  set full_category_id(value: string) {
    this._full_category_id = value;
  }

  get category_arabic_level_1(): string {
    return this._category_arabic_level_1;
  }

  set category_arabic_level_1(value: string) {
    this._category_arabic_level_1 = value;
  }

  get category_english_level_1(): string {
    return this._category_english_level_1;
  }

  set category_english_level_1(value: string) {
    this._category_english_level_1 = value;
  }

  get category_number_level_1(): string {
    return this._category_number_level_1;
  }

  set category_number_level_1(value: string) {
    this._category_number_level_1 = value;
  }

  get category_arabic_level_2(): string {
    return this._category_arabic_level_2;
  }

  set category_arabic_level_2(value: string) {
    this._category_arabic_level_2 = value;
  }

  get category_english_level_2(): string {
    return this._category_english_level_2;
  }

  set category_english_level_2(value: string) {
    this._category_english_level_2 = value;
  }

  get category_number_level_2(): string {
    return this._category_number_level_2;
  }

  set category_number_level_2(value: string) {
    this._category_number_level_2 = value;
  }

  get category_arabic_level_3(): string {
    return this._category_arabic_level_3;
  }

  set category_arabic_level_3(value: string) {
    this._category_arabic_level_3 = value;
  }

  get category_english_level_3(): string {
    return this._category_english_level_3;
  }

  set category_english_level_3(value: string) {
    this._category_english_level_3 = value;
  }

  get category_number_level_3(): string {
    return this._category_number_level_3;
  }

  set category_number_level_3(value: string) {
    this._category_number_level_3 = value;
  }

  get modelDetail(): string {
    return this._modelDetail;
  }

  set modelDetail(value: string) {
    this._modelDetail = value;
  }

  get bodyStyle(): string {
    return this._bodyStyle;
  }

  set bodyStyle(value: string) {
    this._bodyStyle = value;
  }

  get model(): string {
    return this._model;
  }

  set model(value: string) {
    this._model = value;
  }

  get listingType(): string {
    return this._listingType;
  }

  set listingType(value: string) {
    this._listingType = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get showMobileNumber(): string {
    return this._showMobileNumber;
  }

  set showMobileNumber(value: string) {
    this._showMobileNumber = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get year(): string {
    return this._year;
  }

  set year(value: string) {
    this._year = value;
  }

  get kilometers(): string {
    return this._kilometers;
  }

  set kilometers(value: string) {
    this._kilometers = value;
  }

  get askingPrice(): string {
    return this._askingPrice;
  }

  set askingPrice(value: string) {
    this._askingPrice = value;
  }

  get onRoadCostsIncluded(): string {
    return this._onRoadCostsIncluded;
  }

  set onRoadCostsIncluded(value: string) {
    this._onRoadCostsIncluded = value;
  }

  get startDate(): string {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = value;
  }

  get endDate(): string {
    return this._endDate;
  }

  set endDate(value: string) {
    this._endDate = value;
  }

  get photo_1(): string {
    return this._photo_1;
  }

  set photo_1(value: string) {
    this._photo_1 = value;
  }

  get member_id(): string {
    return this._member_id;
  }

  set member_id(value: string) {
    this._member_id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get member_since(): string {
    return this._member_since;
  }

  set member_since(value: string) {
    this._member_since = value;
  }

  get locality_arabic(): string {
    return this._locality_arabic;
  }

  set locality_arabic(value: string) {
    this._locality_arabic = value;
  }

  get locality_english(): string {
    return this._locality_english;
  }

  set locality_english(value: string) {
    this._locality_english = value;
  }

  get district_arabic(): string {
    return this._district_arabic;
  }

  set district_arabic(value: string) {
    this._district_arabic = value;
  }

  get district_english(): string {
    return this._district_english;
  }

  set district_english(value: string) {
    this._district_english = value;
  }

  get orNearOffer(): string {
    return this._orNearOffer;
  }

  set orNearOffer(value: string) {
    this._orNearOffer = value;
  }

  get dd(): string {
    return this._dd;
  }

  set dd(value: string) {
    this._dd = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
