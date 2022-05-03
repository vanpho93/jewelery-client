import {Language} from './language';
import {Attributes} from './attributes';
import {EmbeddedContentOptions} from './embedded.content.options';
import {PickupOptions} from './pickup.options';
import {Fees} from './fees';
import {ListingFeeTiers} from './listing.fee.tiers';
import {SuccessFeeTiers} from './success.fee.tiers';
import {Durations} from './durations'

export class CategoryDetails {
  private _id: string;
  private _date_created: string;
  private _name: Language;
  private _free_photo_count: string;
  private _is_free_to_relist: string;
  private _maximum_photo_count: string;
  private _can_list_auctions: string;
  private _can_list_classifieds: string;
  private _can_relist: string;
  private _default_duration: string;
  private _default_relist_duration: string;
  private _extension_period: string;
  private _answers_character_limit: string;
  private _anquiries_character_limit: string;
  private _questions_character_limit: string;

  private _authenticated_bid_options: string[];
  private _allowed_durations: string[];
  private _durations: Durations[];
  private _attributes: Attributes[];
  private _embedded_content_options: EmbeddedContentOptions[];
  private _pickup_options: PickupOptions[];
  private _shipping_options: PickupOptions[];
  private _payment_options: PickupOptions[];
  private _fees: Fees[];
  private _listing_fee_tiers: ListingFeeTiers[];
  private _success_fee_tiers: SuccessFeeTiers[];

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get date_created(): string {
    return this._date_created;
  }

  set date_created(value: string) {
    this._date_created = value;
  }

  get name(): Language {
    return this._name;
  }

  set name(value: Language) {
    this._name = value;
  }

  get free_photo_count(): string {
    return this._free_photo_count;
  }

  set free_photo_count(value: string) {
    this._free_photo_count = value;
  }

  get is_free_to_relist(): string {
    return this._is_free_to_relist;
  }

  set is_free_to_relist(value: string) {
    this._is_free_to_relist = value;
  }

  get maximum_photo_count(): string {
    return this._maximum_photo_count;
  }

  set maximum_photo_count(value: string) {
    this._maximum_photo_count = value;
  }

  get can_list_auctions(): string {
    return this._can_list_auctions;
  }

  set can_list_auctions(value: string) {
    this._can_list_auctions = value;
  }

  get can_list_classifieds(): string {
    return this._can_list_classifieds;
  }

  set can_list_classifieds(value: string) {
    this._can_list_classifieds = value;
  }

  get can_relist(): string {
    return this._can_relist;
  }

  set can_relist(value: string) {
    this._can_relist = value;
  }

  get default_duration(): string {
    return this._default_duration;
  }

  set default_duration(value: string) {
    this._default_duration = value;
  }

  get default_relist_duration(): string {
    return this._default_relist_duration;
  }

  set default_relist_duration(value: string) {
    this._default_relist_duration = value;
  }

  get extension_period(): string {
    return this._extension_period;
  }

  set extension_period(value: string) {
    this._extension_period = value;
  }

  get answers_character_limit(): string {
    return this._answers_character_limit;
  }

  set answers_character_limit(value: string) {
    this._answers_character_limit = value;
  }

  get anquiries_character_limit(): string {
    return this._anquiries_character_limit;
  }

  set anquiries_character_limit(value: string) {
    this._anquiries_character_limit = value;
  }

  get questions_character_limit(): string {
    return this._questions_character_limit;
  }

  set questions_character_limit(value: string) {
    this._questions_character_limit = value;
  }

  get authenticated_bid_options(): string[] {
    return this._authenticated_bid_options;
  }

  set authenticated_bid_options(value: string[]) {
    this._authenticated_bid_options = value;
  }

  get allowed_durations(): string[] {
    return this._allowed_durations;
  }

  set allowed_durations(value: string[]) {
    this._allowed_durations = value;
  }

  get durations(): Durations[] {
    return this._durations;
  }

  set durations(value: Durations[]) {
    this._durations = value;
  }

  get attributes(): Attributes[] {
    return this._attributes;
  }

  set attributes(value: Attributes[]) {
    this._attributes = value;
  }

  get embedded_content_options(): EmbeddedContentOptions[] {
    return this._embedded_content_options;
  }

  set embedded_content_options(value: EmbeddedContentOptions[]) {
    this._embedded_content_options = value;
  }

  get pickup_options(): PickupOptions[] {
    return this._pickup_options;
  }

  set pickup_options(value: PickupOptions[]) {
    this._pickup_options = value;
  }

  get shipping_options(): PickupOptions[] {
    return this._shipping_options;
  }

  set shipping_options(value: PickupOptions[]) {
    this._shipping_options = value;
  }

  get payment_options(): PickupOptions[] {
    return this._payment_options;
  }

  set payment_options(value: PickupOptions[]) {
    this._payment_options = value;
  }

  get fees(): Fees[] {
    return this._fees;
  }

  set fees(value: Fees[]) {
    this._fees = value;
  }

  get listing_fee_tiers(): ListingFeeTiers[] {
    return this._listing_fee_tiers;
  }

  set listing_fee_tiers(value: ListingFeeTiers[]) {
    this._listing_fee_tiers = value;
  }

  get success_fee_tiers(): SuccessFeeTiers[] {
    return this._success_fee_tiers;
  }

  set success_fee_tiers(value: SuccessFeeTiers[]) {
    this._success_fee_tiers = value;
  }
}
