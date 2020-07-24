const express = require('express')
const app = express()
const path = require('path')
const port = 3000

const convert = require('./lib/convert')
const apiBCB = require('./lib/api.bcb')

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', async (req, res) => {
    const cotacao = await apiBCB.getCotacao()
    res.render('home', { cotacao })
})

app.get('/cotation', (req, res) => {
    const { cotation, quantity } = req.query
    if(cotation && quantity){
        const conversion = convert.convert(cotation, quantity)
    res.render('cotation', {
        error: false,
        cotation: convert.toMoney(cotation),
        quantity: convert.toMoney(quantity),
        conversion: convert.toMoney(conversion)
    })
    } else {
        res.render('cotation', {
            error: 'Invalid Values'
        })
    }
})

app.listen(port, err => err ? console.log(err) : console.log(`ConvertMyMoney running on port ${port}`))