import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const Web3CXIModule = buildModule("Web3CXIModule", (m) => {

    const erc20 = m.contract("Web3CXI");

    return { erc20 };
});

export default Web3CXIModule;



// Deployed Web3CXI: 0xab4E9eB7073D99B3B3Ed9d64FAD4b62bA13A574f