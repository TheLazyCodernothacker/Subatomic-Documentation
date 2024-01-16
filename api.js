function initApis(app) {
  app.get("/api", (req, res) => {
    res.send("APIs");
  });
}

module.exports = initApis;