import express from 'express';
import { graphql } from 'graphql';
import bodyParser from 'body-parser';
import path from 'path';
import schema from './schema';

const app = express();

app.set('views', 'src/server/');
app.set('view engine', 'ejs');

app.use('/public', express.static(path.join(__dirname, '../../dist')));

app.use(bodyParser.text({ type: 'application/graphql' }));

app.get('/graphql', (req, res) => {
  res.json({});
});

app.get('/', (req, res) => {
  res.render('index');
});

const server = app.listen(4000, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log('GraphQL listening at http://%s:%s', host, port);
});
