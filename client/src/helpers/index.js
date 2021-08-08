import currencyFormatter from 'currency-formatter'

export const currency = (number, code = 'UAH') => {
  return currencyFormatter.format(number, {code: code})
}

export function setParam(obj, options) {
  let a = Object.assign({}, obj)
  for (let key in options) {
    a[key] = options[key]
  }
  return a
}