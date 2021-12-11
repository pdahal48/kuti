const express  = require('express')
const { NotFoundError } = require("./expressError");
const { authenticateJWT } = require('./Middleware/auth')
const cors = require("cors");

const app = express()
app.use(express.json())
app.use(authenticateJWT)
app.use(cors());

// app.use('/users', userRoutes)
// app.use('/jweleries', jweleryRoutes)
// app.use('/payment', paymentRoutes)

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