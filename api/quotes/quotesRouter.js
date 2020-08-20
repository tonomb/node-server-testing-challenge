const express = require('express')
const router = express.Router()

const Books = require('./quotesModel')

// ==== /quotes =====

router.get('/', (req, res) => {
  Books.getBooks()
    .then(books => {
      res.status(200).json({books})
    })
})

module.exports = router