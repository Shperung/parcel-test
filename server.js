const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();

const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
let db;

const port = process.env.PORT || 3012;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;
const db_host = process.env.DB_HOST;
const db_cluster = process.env.DB_CLUSTER;

/*GET*/
app.get('/api/artists', (req, res) => {
  db.collection('artists')
    .find()
    .toArray(function(err, docs) {
      if (err) {
        console.log('get /artists', err);
        return res.sendStatus(500);
      }
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
      res.send(docs);
    });
});

//   const ObjectID = require('mongodb').ObjectID;
//   app.get('/api/artists/:id', (req, res) => {
// 	db.collection('artists').findOne({_id: ObjectID(req.params.id)}, function (err, doc) {
// 	  if (err) {
// 		console.log('get /artists/:id');
// 		return res.sendStatus(500);
// 	  }
// 	  res.setHeader('Access-Control-Allow-Origin', '*');
// 	  res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
// 	  res.send(doc);
// 	});
//   });

app.get('/api/artists/:unique', (req, res) => {
  db.collection('artists').findOne({ unique: req.params.unique }, function(err, doc) {
    if (err) {
      console.log('get /artists/:unique');
      return res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(doc);
  });
});

/* POST */
app.post('/api/artists', function(req, res) {
  const artist = {
    name: req.body.name
  };

  db.collection('artists').insert(artist, function(err, result) {
    if (err) {
      console.log('post /artists');
      res.sendStatus(500);
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.send(artist);
  });
});

app.use(express.static(path.resolve(__dirname, 'build')));

app.get('/', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

const MongoClient = require('mongodb').MongoClient;
const mongo_uri = `mongodb+srv://${db_user}:${db_pass}@${db_host}/${db_cluster}?retryWrites=true`;
console.log('mongo_uri', mongo_uri);

const client = new MongoClient(mongo_uri, { useNewUrlParser: true });
client.connect(err => {
  if (err) {
    return console.log('mongodb ERROR->>>>>>>>>', err);
  }
  db = client.db('significanceCantoDB');
  app.listen(port, () => {
    console.info(
      '==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.',
      port,
      port
    );
  });
});
