import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as path from 'path';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Client dist
app.use(express.static(path.join(__dirname, 'dist')));

// Endpoint
app.use('/api', (req, res) => {
  res.status(200).send('It is working ...');
});

// Point static path to dist
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist')));

export default app;
