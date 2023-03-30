// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

const LOCALHOST_REGISTRY_ADDRESS="0x5FbDB2315678afecb367f032d93F642f64180aa3"
const LOCALHOST_OLD_OWNER_WALLET_ADDRESS="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
const LOCALHOST_NEW_OWNER_WALLET_ADDRESS="0x70997970C51812dc3A010C7d01b50e0d17dc79C8"

async function main() {
  const RegistryContract = await ethers.getContractFactory('EthereumDIDRegistry')
  const contractInstance = await RegistryContract.attach(LOCALHOST_REGISTRY_ADDRESS)
  
  await contractInstance.changeOwner(LOCALHOST_OLD_OWNER_WALLET_ADDRESS, LOCALHOST_NEW_OWNER_WALLET_ADDRESS)
  console.log('Identity ' + LOCALHOST_OLD_OWNER_WALLET_ADDRESS + 'has changed ownership to ' + LOCALHOST_NEW_OWNER_WALLET_ADDRESS)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
