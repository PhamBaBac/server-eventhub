const EventModel = require("../models/eventModel");


const addNewEvent = async (eventData) => {
    try {
        const newEvent = new EventModel(eventData);
        await newEvent.save();
        return newEvent;
    } catch (error) {
        throw new Error("Can not add new event");
    }
};

const getAllEvent = async () => {
  try {
    const events = await EventModel.find();
    return events;
  } catch (error) {
    throw new Error("Can not get all events");
  }
};

module.exports = {
  addNewEvent,
  getAllEvent,
};
