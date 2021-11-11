require("@nomiclabs/hardhat-waffle");
//#remember secret key
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});
console.log(process.env.projectId);
module.exports = {
  networks: {
    hardhat: { chainId: 1337 },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.projectId}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://polygon-mainnet.infura.io/v3/${process.env.projectId}`,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
