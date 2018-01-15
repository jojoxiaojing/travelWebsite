const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const FileManager = require('./js/FileManager');

app.get('/', (req, res) => res.send('Hello World!'))

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.get('/api/getStoreList', function (req, res) {
  res.json(FileManager.loadStoreList())
});

app.post('/api/insertStore', function (req,res) {
  FileManager.insertStore(req);
  res.json(['添加成功']);

});

app.post('/api/deleteStore', function (req,res) {
  FileManager.deleteStore(req.body.title);
  res.json(['success']);
});


app.listen(3000, () => console.log('Example app listening on port 3000!'))