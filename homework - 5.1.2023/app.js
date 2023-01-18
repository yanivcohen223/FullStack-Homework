const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')
const knex = require('knex')
const config = require('config')
const testsRouter = require('./routes/tests')
const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')
const logger = require('./logger/logger')
const test_dal = require('./dal/test_repo')


const port = config.express.port;

const app = express()

// to use body parameters 
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join('.', '/static/')));

//using ejs to show pages
app.set('view engine', 'ejs')

app.get('/my_ejs', async (req, res) => res.render('test_page', {
  tests : await test_dal.get_all_tests()
}))

//middleware
app.get('*', async (req, res, next) => {
  logger.debug(`get delivered ${req.url}`)
  next()
})

//system app 
app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})

//swagger
const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Library API",
        version: "1.0.0",
        description:"A simple Express Library API",
      },
      servers: [
        {
          url: "http://localhost:9000/",
        },
      ],
    },
    apis: ["./routes/*.js"],
  };
  
  const specs = swaggerJsdoc(options);

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs)
  );

app.use('/test', testsRouter)