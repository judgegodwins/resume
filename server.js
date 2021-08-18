const express = require('express');
const cors = require('cors');
const path = require('path');
const { port, environment } = require('./config');
const db = require('./db');
const routes = require('./routes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: '10mb', parameterLimit: 50000 }));
app.use('/', express.static(path.resolve(__dirname, "./client/build")));
app.use(cors());
app.use('/api', routes);
app.use((req, res, next) => {
  return res.status(404).json({
    success: false,
    message: "Invalid endpoint"
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({
    success: false,
    message: 'Internal Error' 
  });
  
  if (environment == 'development')
    console.log('Internal error: ', err);
})

db.connect()
  .then(() => {
    console.log('DB connected');

    app
      .listen(port, () => {
        console.log('Listening on port ', port);
      })
      .on("error", (e) => console.log(e));
  })
  .catch(err => console.log('DB connection error: ', err));
