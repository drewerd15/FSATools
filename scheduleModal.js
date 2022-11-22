const schedule = {
  type: "modal",
  title: {
    type: "plain_text",
    text: "My App",
    emoji: true,
  },
  submit: {
    type: "plain_text",
    text: "Submit",
    emoji: true,
  },
  close: {
    type: "plain_text",
    text: "Cancel",
    emoji: true,
  },
  blocks: [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Howdy! Let's schedule our Reacto!",
      },
    },
    {
      type: "input",
      block_id: "gistLink",
      element: {
        type: "url_text_input",
        action_id: "gistAction",
      },
      label: {
        type: "plain_text",
        text: "Gist Link",
        emoji: true,
      },
    },
    {
      type: "input",
      block_id: "zoomLink",
      element: {
        type: "url_text_input",
        action_id: "zoomAction",
      },
      label: {
        type: "plain_text",
        text: "Zoom Link",
        emoji: true,
      },
    },
    {
      type: "input",
      block_id: "studentList",
      element: {
        type: "plain_text_input",
        multiline: true,
        action_id: "studentAction",
      },
      label: {
        type: "plain_text",
        text: "Student Pairs",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Schedule message time*",
      },
    },
    {
      type: "actions",
      block_id: "timePick",
      elements: [
        {
          type: "timepicker",
          initial_time: "18:00",
          placeholder: {
            type: "plain_text",
            text: "Message Broadcast Time",
            emoji: true,
          },
          action_id: "timeAction",
        },
      ],
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Select broadcast channels",
      },
      block_id: "conversations",
      accessory: {
        type: "multi_conversations_select",
        placeholder: {
          type: "plain_text",
          text: "Select conversations",
          emoji: true,
        },
        action_id: "conversationAction",
      },
    },
  ],
};
module.exports = schedule;
