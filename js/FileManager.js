var fs = require('fs');

var FileManager = {};

FileManager.loadStoreList = function () {
  return JSON.parse(fs.readFileSync('./storeList.json'));
};

FileManager.insertStore = function (newStore) {
  var list = FileManager.loadStoreList();
  var newStore1 = {"id":newStore.body.id,"title":newStore.body.title,"desc":newStore.body.desc,"imageUrl":newStore.body.imageUrl};
  list.push(newStore1);
  fs.writeFileSync('./storeList.json',JSON.stringify(list));

};

FileManager.deleteStore = function (title) {
  var list = FileManager.loadStoreList();
  var newList = list.filter(function (l) {
    return l.title !== title;
  });
  fs.writeFileSync('./storeList.json',JSON.stringify(newList));
}


module.exports = FileManager;