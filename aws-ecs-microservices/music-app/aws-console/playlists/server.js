const app = require("koa")();
const router = require("koa-router")();
const db = require("./db.json");

// Log requests
app.use(function* (next) {
  const start = new Date();
  yield next;
  const ms = new Date() - start;
  console.log("%s %s - %s", this.method, this.url, ms);
});

router.get('/api/playlists', function *(next) {
    this.body = db.playlists;
  });
  
  router.get('/api/playlists/:playlistId', function *(next) {
    const id = parseInt(this.params.playlistId);
    this.body = db.playlists.find((user) => user.id == id);
  });

router.get("/api/", function* () {
  this.body = "API ready to receive requests...";
});

router.get("/", function* () {
  this.body = "Setup and ready to receive request...";
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);

console.log("Worker started");
