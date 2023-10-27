import { HardhatUserConfig } from "hardhat/config";
/* import "@nomicfoundation/hardhat-toolbox"; */
import * as dotenv from 'dotenv';
import "@nomiclabs/hardhat-ethers";


dotenv.config();
const { API_URL, PRIVATE_KEY } = process.env;
console.log({ PRIVATE_KEY, API_URL });
const config: HardhatUserConfig = {
  solidity: "0.8.9",
  defaultNetwork: "sepolia",
  networks: {
    sepolia: {
      url: API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
