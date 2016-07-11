const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const morgan = require('morgan')
const router = require('./config/routes')
const bodyParser = require('body-parser')

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

// USE
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', router)
app.use(morgan('dev'))

// SET
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('/candies', (req, res) => {
  res.status(200).json([{'name': 'bon bon'}]);
});

module.exports = app
