function controller() {
  function login(req, res) {
    req.login('user', (err) => {
      if (err) {
        res.send(`Error ${err}`);
      } else {
        res.send('Cool');
      }
    });
  }

  return { login };
}

module.exports = controller;
