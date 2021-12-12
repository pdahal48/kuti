const express  = require('express')
const { NotFoundError } = require("./expressError");
// const { authenticateJWT } = require('./Middleware/auth')
const jweleryRoutes = require('./Routes/jweleries')
const sellerRoutes = require('./Routes/sellers')
const customerRoutes = require('./Routes/customers')
const sareeRoutes = require('./Routes/sarees')
const lahengaRoutes = require('./Routes/lahengas')

const cors = require("cors");

const app = express()
app.use(express.json())
// app.use(authenticateJWT)
app.use(cors());

app.use('/sellers', sellerRoutes)
app.use('/jweleries', jweleryRoutes)
app.use('/customers', customerRoutes)
app.use('/sarees', sareeRoutes)
app.use('/lahengas', lahengaRoutes)

app.use(function (req, res, next) {
    return next(new NotFoundError());
  });
  
  /** Generic error handler; anything unhandled goes here. */
  app.use(function (err, req, res, next) {
    if (process.env.NODE_ENV !== "test") console.error(err.stack);
    const status = err.status || 500;
    const message = err.message;
  
    return res.status(status).json({
      error: { message, status },
    });
  });

module.exports = app;