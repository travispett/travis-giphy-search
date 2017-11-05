const GiphyService = require('../services/GiphyService');

function index(req, res) {
  const { searchParams } = req.query;

  if (!searchParams) {
    res.sendStatus(204);
  }

  GiphyService
    .search(searchParams)
    .then((response) => res.send(response))
    .catch((err) => res.status(404).send(err));
}

module.exports = { index };
