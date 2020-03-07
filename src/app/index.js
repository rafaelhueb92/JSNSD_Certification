const express = require("express");
const cors = require("cors");

class Application {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(require("./routes/health.route"));
  }
}

module.exports = new Application().app;
