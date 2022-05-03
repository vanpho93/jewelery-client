import {ListingDetails} from './listingDetails';

export class CarouselItem {
  id: string;
  listingId: string;
  details: ListingDetails;

  constructor(
    id: string,
    listingId: string,
    details: ListingDetails
  ) {
    this.id = id;
    this.listingId = listingId;
    this.details = details;
  }
}

