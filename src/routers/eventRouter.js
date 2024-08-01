const Router = require("express");
const { createNewEvent } = require("../controllers/eventController");

const eventRouter = Router();

eventRouter.post("/add-new-event", createNewEvent);

module.exports = {
  eventRouter,
};
