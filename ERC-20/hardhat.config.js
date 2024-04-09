require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const url = process.env.RINKEBY_URL;
const accounts = [process.env.PRIVATE_KEY];
const apiKey = process.env.ETHER_SCAN_API_KEY;

module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    rinkeby: { url, accounts },
  },
  etherscan: {
    apiKey,
  },
  // defaultNetwork: "ganache",
  // networks: {

  //   ganache: {
  //     url: "HTTP://127.0.0.1:7545",
  //     accounts: [
  //       "0xfb8299ccb8fcd908e5a33bdfc9b4c031f748c43fd1e3176934c19be5c7dddc96",
  //     ],
  //   },
  // },
  solidity: "0.8.4",
};
