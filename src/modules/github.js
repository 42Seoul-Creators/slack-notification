import { Octokit } from "@octokit/rest";
import { createAppAuth } from "@octokit/auth-app";

import env from "./env.js";
import { getFormatTodayDate, getWeek } from "./date.js";
import logger from "./logger.js";

const appOctokit = new Octokit({
  authStrategy: createAppAuth,
  auth: {
    appId: env.github.appId,
    privateKey: env.github.privateKey,
    installationId: env.github.installationId,
  },
});

const year = getFormatTodayDate("YYYY년");
const month = getFormatTodayDate("MM월");

export const createGithubIssue = async (nofiticationMessage) => {
  try {
    const { owner, repo } = env.github;

    const response = await appOctokit.issues.create({
      owner,
      repo,
      title: `${getFormatTodayDate(
        "YYYY년 MM월"
      )} ${getWeek()} 주차 인증 스레드`,
      body: nofiticationMessage,
      labels: [`${year} ${month}`],
    });
    logger.info(response.data);
    logger.info("GitHub 이슈를 성공적으로 생성했습니다.");
  } catch (error) {
    logger.error(error);
    logger.info("GitHub 이슈를 생성하지 못했습니다.");
  }
};
