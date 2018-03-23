import { Dollar } from './dollar';

export class App {
  constructor() {
    const dollar = new Dollar()
    
    dollar.amount = 100

    document.getElementById('app').innerHTML = `${dollar.getAmountWithCurrency()} amount`
  }
}
