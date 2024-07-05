import { Octokit } from "octokit";

import env from "./env.js";
import { getFormatTodayDate, getWeek } from "./date.js";
import logger from "./logger.js";

const octokit = new Octokit({
  auth: env.github.auth,
});

const OWNER = env.github.owner;
const REPO = env.github.repo;

const year = getFormatTodayDate("YYYY년");
const month = getFormatTodayDate("MM월");

export const createGithubIssue = async (nofiticationMessage) => {
  try {
    const response = await octokit.request(
      `POST /repos/${OWNER}/${REPO}/issues`,
      {
        owner: "OWNER",
        repo: "REPO",
        title: `${getFormatTodayDate(
          "YYYY년 MM월"
        )} ${getWeek()} 주차 인증 스레드`,
        body: nofiticationMessage,
        labels: [`${year} ${month}`],
        headers: {
          "X-GitHub-Api-Version": "2022-11-28",
        },
      }
    );
    logger.info(response.data);
    logger.info("GitHub 이슈를 성공적으로 생성했습니다.");
  } catch (error) {
    logger.error(error);
    logger.info("GitHub 이슈를 생성하지 못했습니다.");
  }
};
