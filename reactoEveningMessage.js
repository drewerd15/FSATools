function message(messageOptions) {
  return [
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Good Evening Seniors!\nTomorrow is your next *REACTO*!\n",
      },
    },
    {
      type: "divider",
    },
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Everyone",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "The *pairs* are attached below just remember to swap your roles :arrows_clockwise:.\n",
      },
    },
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Interviewers",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "Here’s the gist for tomorrow, make sure to review it this evening.",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: ":github: Gist Me",
          emoji: true,
        },
        value: "click_me_123",
        url: messageOptions.gist,
        action_id: "button-action",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "You all will join me at *9:30am EST* in the Zoom room tomorrow and we will go over the problem.\n",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: ":zoom: Zoom",
          emoji: true,
        },
        value: "click_me_123",
        url: messageOptions.zoom,
        action_id: "button-action",
      },
    },
    {
      type: "header",
      text: {
        type: "plain_text",
        text: "Interviewees",
        emoji: true,
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "*Do not look at the gist!* :sarah-vibrate-angry-mad:",
      },
    },
    {
      type: "section",
      text: {
        type: "mrkdwn",
        text: "You will join zoom at *9:45am EST* tomorrow and go directly to your breakout room.",
      },
      accessory: {
        type: "button",
        text: {
          type: "plain_text",
          text: ":zoom: Zoom",
          emoji: true,
        },
        value: "click_me_123",
        url: messageOptions.zoom,
        action_id: "button-action",
      },
    },
  ];
}
module.exports = message;
