import {Durations} from './durations'

export class ListAnItemModules {
  categoryId: string;
  model: string;
  modelDetail: string;
  exteriorColor: string;
  bodyStyle: string;
  fuelType: string;
  mvpiExpires: string;
  numberPlate: string;
  description: string;

  year: string;
  kilometers: string;
  doors: string;
  seats: string;
  cylinders: string;
  engineSize: string;
  transmission: string;
  numberOfOwners: string;
  importHistory: string;

  fourWheelDrive: string;
  mojazInspectionReport: string;
  driverAirbag: string;
  sunroof: string;
  passengerAirbag: string;
  alarm: string;
  powerSteering: string;
  absBrakes: string;
  airConditioning: string;
  centralLocking: string;

  title: string;
  subtitle: string;
  showMobileNumber: string;
  bestContactTime: string;
  askingPrice: string;
  orNearOffer: string;
  onRoadCostsIncluded: string;
  endDate: string;
  endDateDisplay: string;
  duration: string;
  listingType: string;
  dd: string;
  allowed_durations: string[];
  durations: Durations[];
  listingId: string;

  constructor(
    categoryId: string = '',
    model: string = '',
    modelDetail: string = '',
    exteriorColor: string = '',
    bodyStyle: string = '',
    fuelType: string = '',
    mvpiExpires: string = '',
    numberPlate: string = '',
    description: string = '',
    year: string = '',
    kilometers: string = '',
    doors: string = '',
    seats: string = '',
    cylinders: string = '',
    engineSize: string = '',
    transmission: string = '',
    numberOfOwners: string = '',
    importHistory: string = '',
    fourWheelDrive: string = '',
    mojazInspectionReport: string = '',
    driverAirbag: string = '',
    sunroof: string = '',
    passengerAirbag: string = '',
    alarm: string = '',
    powerSteering: string = '',
    absBrakes: string = '',
    airConditioning: string = '',
    centralLocking: string = '',
    title: string = '',
    subtitle: string = '',
    showMobileNumber: string = '',
    bestContactTime: string = '',
    askingPrice: string = '',
    orNearOffer: string = '',
    onRoadCostsIncluded: string = '',
    endDate: string = '',
    endDateDisplay: string = '',
    duration: string = '',
    listingType: string = '',
    dd: string = '',
    allowed_durations = [],
    durations = [],
    listingId: string = ''
  ) {
    this.categoryId = categoryId;
    this.model = model;
    this.modelDetail = modelDetail;
    this.exteriorColor = exteriorColor;
    this.bodyStyle = bodyStyle;
    this.fuelType = fuelType;
    this.mvpiExpires = mvpiExpires;
    this.numberPlate = numberPlate;
    this.description = description;
    this.year = year;
    this.kilometers = kilometers;
    this.doors = doors;
    this.seats = seats;
    this.cylinders = cylinders;
    this.engineSize = engineSize;
    this.transmission = transmission;
    this.numberOfOwners = numberOfOwners;
    this.importHistory = importHistory;
    this.fourWheelDrive = fourWheelDrive;
    this.mojazInspectionReport = mojazInspectionReport;
    this.driverAirbag = driverAirbag;
    this.sunroof = sunroof;
    this.passengerAirbag = passengerAirbag;
    this.alarm = alarm;
    this.powerSteering = powerSteering;
    this.absBrakes = absBrakes;
    this.airConditioning = airConditioning;
    this.centralLocking = centralLocking;
    this.title = title;
    this.subtitle = subtitle;
    this.showMobileNumber = showMobileNumber;
    this.bestContactTime = bestContactTime;
    this.askingPrice = askingPrice;
    this.orNearOffer = orNearOffer;
    this.onRoadCostsIncluded = onRoadCostsIncluded;
    this.endDate = endDate;
    this.endDateDisplay = endDateDisplay;
    this.duration = duration;
    this.listingType = listingType;
    this.dd = dd;
    this.allowed_durations = allowed_durations;
    this.durations = durations;
    this.listingId = listingId;
  }
}
