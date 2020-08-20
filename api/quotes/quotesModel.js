const db = require('../../data/dbConfig');

module.exports = {
  getBooks,
}


function getBooks(){
  return db('books')
}