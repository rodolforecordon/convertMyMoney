const convert = require('./convert')

test('convert cotation 4 and quantity 4', () => {
    expect(convert.convert(4,4)).toBe(16)
})

test('convert cotation 0 and ', () => {
    expect(convert.convert(0,4)).toBe(0)
})

test('toMoney converts float', () => {
    expect(convert.toMoney(2)).toBe('2.00')
})

test('toMoney converts string', () => {
    expect(convert.toMoney('2')).toBe('2.00')
})