var express = require('express');
var router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { listAll, listPostcardById, addNewPostcard, removePostcardById, addNewPostcardMongo, listAllMongo } = require('../controllers/postcards');

// Rota GET para obter todos os Postcards
router.get('/', (req, res) => {
  listAllMongo(res);
});

router.get('/:id', (req, res) => {
    listPostcardById(res, req);
});

router.post('/', (req, res) => {
    addNewPostcardMongo(res, req);
});

router.delete('/:id', (req, res) => {
    removePostcardById(res, req);
});

module.exports = router;
