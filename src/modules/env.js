import "dotenv/config";

const env = {
  github: {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    auth: process.env.TOKEN,
  },
};

export default env;
