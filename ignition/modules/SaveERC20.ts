import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0xab4E9eB7073D99B3B3Ed9d64FAD4b62bA13A574f";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;


// Deployed SaveERC20: 0xF15244fd0234F6d5aD2fa50768a88812Aa841976
