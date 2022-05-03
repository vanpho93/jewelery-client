export class TajrAccount {
  public sellingTotal: number;
  public unsoldTotal: number;
  public withdrawnTotal: number;
  public watchlistTotal: number;

  constructor(sellingTotal: number, unsoldTotal: number, withdrawnTotal: number, watchlistTotal: number) {
    this.sellingTotal = sellingTotal;
    this.unsoldTotal = unsoldTotal;
    this.withdrawnTotal = withdrawnTotal;
    this.watchlistTotal = watchlistTotal;
  }
}
