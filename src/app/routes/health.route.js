const route = require("express").Router();
const healthController = require("../controllers/health.controller");

route.get("/health",healthController.get);

module.exports = route;