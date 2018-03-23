import { Dollar } from './dollar'

describe('dollar', () => {
    
  it('should return amount', () => {
      const dollar = new Dollar()
      expect(dollar.getAmount()).toBe(0)

      dollar.amount = 10

      expect(dollar.getAmount()).toBe(10)
  })

  it('should return amount with currency', () => {
    const dollar = new Dollar()
    
    expect(dollar.getAmountWithCurrency()).toBe('0 USD')

    dollar.amount = 10

    expect(dollar.getAmountWithCurrency()).toBe("10 USD")

  })

})