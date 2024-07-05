import { buildMessage } from "./modules/message.js";
import { createGithubIssue } from "./modules/github.js";

const run = () => {
  const notificationMessage = buildMessage();

  console.log(notificationMessage);
  // createGithubIssue(notificationMessage);
};

run();
