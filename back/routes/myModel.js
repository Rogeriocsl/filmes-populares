const router = require('express').Router();
const MyModel = require('../models/myModel');

router.route('/').get((req, res) => {
  MyModel.find()
    .then(myModels => res.json(myModels))
    .catch(err => res.status(400).json('Erro: ' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;

  const newMyModel = new MyModel({ name, description });

  newMyModel.save()
    .then(() => res.json('Registro adicionado!'))
    .catch(err => res.status(400).json('Erro: ' + err));
});

module.exports = router;
