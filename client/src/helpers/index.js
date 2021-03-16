import currencyFormatter from 'currency-formatter'

export const currency = (number, code = 'UAH') => {
  return currencyFormatter.format(number, {code: code})
}