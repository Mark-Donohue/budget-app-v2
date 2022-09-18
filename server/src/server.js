import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

const app = express();
app.use(bodyParser.json());
app.use(morgan('combined'));

require('./routes')(app);

app.listen('8000', () => {
  console.log("Server started on port 8000.");
});