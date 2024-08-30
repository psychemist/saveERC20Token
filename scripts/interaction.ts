import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0xab4E9eB7073D99B3B3Ed9d64FAD4b62bA13A574f";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x3EC22910AeE669cB69D66852937fCaab8177a2Fc";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    // Deposit tokens in savings contract
    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance after :::", contractBalanceAfterDeposit);

    // Withdraw tokens from savings contract
    const contractBalanceBeforeWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeWithdrawal);

    const withdrawalAmount = ethers.parseUnits("10", 18);
    const withdrawalTx = await saveERC20.withdraw(withdrawalAmount);

    console.log(withdrawalTx);

    withdrawalTx.wait();

    const contractBalanceAfterWithdrawal = await saveERC20.getContractBalance();
    console.log("Contract balance after :::", contractBalanceAfterWithdrawal);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
