require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret ").toString();

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${PROJECT_ID}`,
      accounts: [privateKey],
    },
    matic: {
      url: `https://polygon-mainnet.infura.io/v3/${PROJECT_ID}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
