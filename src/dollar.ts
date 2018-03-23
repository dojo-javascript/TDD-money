export class Dollar {
  
  public amount = 0

  public getAmount() {
    return this.amount
  }

  public getAmountWithCurrency() {
    return this.getAmount() + ' USD'
  }
}