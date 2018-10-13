const createError = require('http-errors');
const express = require('express');
const logger = require('morgan');
const app = express();
const userRoutes = require('./UserRoutes/routes')
const tripRoutes = require('./TripRoutes/routes')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRoutes)
app.use(tripRoutes)
app.get('/', (req, res) => {
  res.send('batata')
})
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});





const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
})