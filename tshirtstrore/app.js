const express = require('express');
require('dotenv').config();
const app = express();
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileUpload');


// for swagger docs related
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));




// cookies and file middleware
app.use(cookieParser());
app.use(fileUpload());

// morgan middleware
// app.use(morgan(":id :method :url :response-time"));
app.use(morgan("tiny"));


// regular middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// importing all routes
const home = require('./routes/home');
const user = require('./routes/user')


// router middleware

app.use('/api/v1', home)
app.use('/api/v1', user)




// exporting app js
module.exports = app;