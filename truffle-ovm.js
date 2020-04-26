const HDWalletProvider = require("truffle-hdwallet-provider");
const mnemonic = "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat";

// Set this to the desired Execution Manager Address -- required for the transpiler
process.env.EXECUTION_MANAGER_ADDRESS = process.env.EXECUTION_MANAGER_ADDRESS || "0xA193E42526F1FEA8C99AF609dcEabf30C1c29fAA";
const gasPrice = process.env.OVM_DEFAULT_GAS_PRICE || 0;
const gas = /*process.env.OVM_DEFAULT_GAS*/ 900000000;

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    ganache: {
      network_id: 108,
      host: "127.0.0.1",
      port: 8545,
      gas,
      gasPrice
    },
    coverage: {
      host: "localhost",
      network_id: "*",
      port: 8545,         // <-- If you change this, also set the port option in .solcover.js.
      gas: 0xfffffffffff, // <-- Use this high gas value
      gasPrice: 0x0000000000000001      // <-- Use this low gas price
    },
  },

  compilers: {
    solc: {
      version: "node_modules/@eth-optimism/solc-transpiler"
    }
  },
  solc: {
    version: "node_modules/@eth-optimism/solc-transpiler",
    optimizer: {
      enabled: true, // TO TURN ON for launch
      runs: 500,
      details: {
        yul: true
      }
    }
  },

  mocha: {
    reporter: "eth-gas-reporter",
    reporterOptions: {
      currency: "USD",
      gasPrice: 21,
      outputFile: "/dev/null",
      showTimeSpent: true
    }
  }

}
