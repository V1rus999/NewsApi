function controller() {
  function getIndex(req, res) {
    res.send('Hello agent');
  }

  return { getIndex };
}

module.exports = controller;
