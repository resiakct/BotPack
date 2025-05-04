module.exports.config = {
  name: "ano",
  version: "1.1.0",
  hasPermssion: 0, // Assuming no admin permission needed
  credits: "Your Name/Credits Here",
  description: "Automatically sends a war message sequence. Use 'game' to begin and 'stop' to end.",
  usePrefix: false,
  commandCategory: "fun", // Or another appropriate category
  usages: "jay | pagod",
  cooldowns: 0,
  dependencies: {
    "axios": "" // While not directly used in the converted structure, it was in the original.
  }
};

let intervalId;
let isRunning = false;

module.exports.run = async ({ api, event, args }) => {
  const { threadID } = event;
  const send = (msg) => api.sendMessage(msg, threadID);
  const messages = [
    "HAHAHAHAHAHA ano na tota ko😝😝",
    "agay asar na sya oh",
    "makakapalag at tatagal ka kaya?🤔🤔",
    "paduduguin ko ulo mo ewan ko na lang kung hindi ka mag panic",
    "feeling makunat e no, sabayan mo ako🤔🤔",
    "walang aalis ha🤔🤔"
  ];
  let messageIndex = 0;

  if (args[0] === "jay" && !isRunning) {
    isRunning = true;
    intervalId = setInterval(() => {
      send(messages[messageIndex % messages.length]);
      messageIndex++;
    }, 1500);
  } else if (args[0] === "pagod" && isRunning) {
    clearInterval(intervalId);
    isRunning = false;
  }
};
