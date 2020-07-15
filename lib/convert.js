const convert = (cotation, quantity) => cotation*quantity
const toMoney = valor => parseFloat(valor).toFixed(2)

module.exports = {
    convert,
    toMoney
}