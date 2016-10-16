// routes.js


var appRouter = function(app) {
  app.get("/users", function(req, res) {
     res.json({ "key": "Hello World" });
 });
}

module.exports = appRouter;
