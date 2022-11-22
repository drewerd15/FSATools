const express = require("express");
const app = express();
var bodyParser = require("body-parser");
const { WebClient } = require("@slack/web-api");
require("dotenv").config();
const schedule = require("./scheduleModal.js");
const eveningMessage = require("./reactoEveningMessage.js");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

module.exports = app;

const web = new WebClient(process.env.SLACK_TOKEN);
app.post("/reacto", async (req, res, next) => {
  try {
    const payload = JSON.parse(req.body.payload);
    if (payload.type === "view_submission") {
      // console.log("payload", payload.view.state.values);
      const data = {
        gist: payload.view.state.values.gistLink.gistAction.value,
        zoom: payload.view.state.values.zoomLink.zoomAction.value,
        studentList:
          payload.view.state.values.studentList.studentAction.value.split(
            /\r?\n/
          ),
        time: payload.view.state.values.timePick.timeAction.selected_time,
        conversations:
          payload.view.state.values.conversations.conversationAction
            .selected_conversations,
      };
      // console.log(eveningMessage(data));
      // console.log("big test: ", data);
      web.chat.postMessage({
        channel: data.conversations[0],
        blocks: eveningMessage(data),
      });
      res.status(200).send();
    } else if (payload.type === "shortcut") {
      web.views.open({
        trigger_id: payload.trigger_id,
        view: schedule,
      });
      res.sendStatus(200);
    }

    //res.send("Hello World");
  } catch (e) {
    console.log("e", e);
  }
});
