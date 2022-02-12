require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    // mumbai: {
    //   url: `https://polygon-mumbai.infura.io/v3/${process.env.PROJECT_ID}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
    // matic: {
    //   url: `https://polygon-mainnet.infura.io/v3/${process.env.PROJECT_ID}`,
    //   accounts: [`0x${process.env.PRIVATE_KEY}`],
    // },
  },
  solidity: "0.8.4",
};
