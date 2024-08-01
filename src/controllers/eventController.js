const { addNewEvent, getAllEvent } = require("../service/EventService");
const asyncHandle = require("express-async-handler");

const createNewEvent = asyncHandle(async (req, res) => {
  const userData = req.body;

  if (userData) {
    const newEvent = await addNewEvent(userData);
    res.status(200).json({
      message: "Add new Event successfully!!!",
      data: newEvent,
    });
  } else {
    res.status(401);
    throw new Error("Event data not found!!!");
  }
});

const getAllEvents = asyncHandle(async (req, res) => {
  const events = await getAllEvent();
  if (events) {
    res.status(200).json({
      message: "Get all events successfully!!!",
      data: events,
    });
  }else {
    res.status(401);
    throw new Error("Events not found!!!");
  }
});

module.exports = {
  createNewEvent,
  getAllEvents,
};
