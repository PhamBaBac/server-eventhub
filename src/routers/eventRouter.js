const Router = require("express");
const { addNewEvent } = require("../controllers/eventController");

const eventRouter = Router();

eventRouter.post("/add-new-event", addNewEvent);

module.exports = {
    eventRouter,
}
