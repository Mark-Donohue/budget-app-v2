module.exports = {
  register(req, res) {
    res.send(`Welcome, ${req.body.firstName}!`);
  },
  login(req, res) {
    res.send(`Hello, ${req.body.email}!`);
  }
}