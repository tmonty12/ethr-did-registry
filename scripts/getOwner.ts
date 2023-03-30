// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

const LOCALHOST_REGISTRY_ADDRESS='0x5FbDB2315678afecb367f032d93F642f64180aa3'
const LOCALHOST_IDENITY='0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266'

async function main() {
  const RegistryContract = await ethers.getContractFactory('EthereumDIDRegistry')
  const contractInstance = await RegistryContract.attach(LOCALHOST_REGISTRY_ADDRESS)
  
  const identityOwner = await contractInstance.identityOwner(LOCALHOST_IDENITY)
  console.log(identityOwner)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
