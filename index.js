const cool = require('cool-ascii-faces');
const express = require('express')
const morgan = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 5000

const requestLogger = morgan('tiny');

express()
  .use(requestLogger)
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
