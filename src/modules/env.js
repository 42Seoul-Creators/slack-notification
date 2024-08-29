import "dotenv/config";

const env = {
  github: {
    owner: process.env.OWNER,
    repo: process.env.REPO,
    appId: process.env.APP_ID,
    installationId: process.env.APP_INSTALLATION_ID,
    privateKey: process.env.APP_PRIVATE_KEY,
  },
};

export default env;
