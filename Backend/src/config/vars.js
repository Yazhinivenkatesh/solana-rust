const path = require("path");
const envPath = "../../.env";

// import .env variables
require("dotenv-safe").config({
  path: path.join(__dirname, envPath),
  sample: path.join(__dirname, "../../.env.example"),
});

module.exports = {
  env: process.env.NODE_ENV,
  frontend: process.env.FRONTEND,
  serverApiKey: process.env.SERVER_API_KEY,
  solanaDevNetwork: process.env.SOLANA_DEV_NETWORK_URL,
  solanaTestNetwork: process.env.SOLANA_TEST_NETWORK_URL,
  solanaMainNetwork: process.env.SOLANA_MAIN_NETWORK_URL,
  contractAddress: process.env.CONTRACT_ADDRESS,
  programId: process.env.PROGRAM_ID,
  privateKey: process.env.PRIVATE_KEY
};
