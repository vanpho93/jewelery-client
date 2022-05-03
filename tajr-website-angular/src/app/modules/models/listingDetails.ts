import {Strings} from './strings';
import {Numbers} from './numbers';
import {Bool} from './bool';
import {Dates} from './dates';
import {ProfileDetails} from './profile.details';
import {environment} from '../../../environments/environment';
import {CategoryDetails} from "./category.details";

export class ListingDetails {
  private _listing_id: string;
  private _category_id: string;
  private _category_date: string;
  private _strings: Strings[];
  private _numbers: Numbers[];
  private _bool: Bool[];
  private _dates: Dates[];
  private _member: ProfileDetails;
  private _photos: Array<string> = [];
  private _embedded_content_options: Array<EmbeddedContentOptions> = [];
  private _promotion: boolean;
  private _title: string;
  private _subtitle: string;

  private _endDateText: string;
  private _titleText: string;
  private _subTitleText: string;
  private _askingPrice: string;
  private _location: string;
  private _composedPrice: string;
  private _dd: string;
  private _watchers: string;
  private _watchlist_id: string;
  private _category_details: CategoryDetails;
  private _duration: string;

  hasPhoto(value: string) {
    const noImageUrl = '../../../assets/images/item-images/tajr-item000001.png';
    if (this.photos !== undefined && this.photos[value] !== undefined) {
      return environment.baseUrl + '/v1/photos/' + this.photos[value] + '/sizes/508x380';
    }
    return noImageUrl;
  }

  get category_details(): CategoryDetails {
    return this._category_details;
  }

  set category_details(value: CategoryDetails) {
    this._category_details = value;
  }

  get listing_id(): string {
    return this._listing_id;
  }

  set listing_id(value: string) {
    this._listing_id = value;
  }

  get category_id(): string {
    return this._category_id;
  }

  set category_id(value: string) {
    this._category_id = value;
  }

  get category_date(): string {
    return this._category_date;
  }

  set category_date(value: string) {
    this._category_date = value;
  }

  get strings(): Strings[] {
    return this._strings;
  }

  set strings(value: Strings[]) {
    this._strings = value;
  }

  get numbers(): Numbers[] {
    return this._numbers;
  }

  set numbers(value: Numbers[]) {
    this._numbers = value;
  }

  get bool(): Bool[] {
    return this._bool;
  }

  set bool(value: Bool[]) {
    this._bool = value;
  }

  get dates(): Dates[] {
    return this._dates;
  }

  set dates(value: Dates[]) {
    this._dates = value;
  }

  get member(): ProfileDetails {
    return this._member;
  }

  set member(value: ProfileDetails) {
    this._member = value;
  }

  get photos(): Array<string> {
    return this._photos;
  }

  set photos(value: Array<string>) {
    this._photos = value;
  }


  get promotion(): boolean {
    return this._promotion;
  }

  set promotion(value: boolean) {
    this._promotion = value;
  }

  get endDateText(): string {
    return this._endDateText;
  }

  set endDateText(value: string) {
    this._endDateText = value;
  }

  get titleText(): string {
    return this._titleText;
  }

  set titleText(value: string) {
    this._titleText = value;
  }


  get subTitleText(): string {
    return this._subTitleText;
  }

  set subTitleText(value: string) {
    this._subTitleText = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get subtitle(): string {
    return this._subtitle;
  }

  set subtitle(value: string) {
    this._subtitle = value;
  }

  get askingPrice(): string {
    return this._askingPrice;
  }

  set askingPrice(value: string) {
    this._askingPrice = value;
  }

  get location(): string {
    return this._location;
  }

  set location(value: string) {
    this._location = value;
  }

  get composedPrice(): string {
    return this._composedPrice;
  }

  set composedPrice(value: string) {
    this._composedPrice = value;
  }

  get embedded_content_options(): Array<EmbeddedContentOptions> {
    return this._embedded_content_options;
  }

  set embedded_content_options(value: Array<EmbeddedContentOptions>) {
    this._embedded_content_options = value;
  }

  get dd(): string {
    return this._dd;
  }

  set dd(value: string) {
    this._dd = value;
  }

  get watchers(): string {
    return this._watchers;
  }

  set watchers(value: string) {
    this._watchers = value;
  }

  get watchlist_id(): string {
    return this._watchlist_id;
  }

  set watchlist_id(value: string) {
    this._watchlist_id = value;
  }

  get duration(): string {
    return this._duration;
  }

  set duration(value: string) {
    this._duration = value;
  }
}

class EmbeddedContentOptions {
  id = '';
  value = '';
}
