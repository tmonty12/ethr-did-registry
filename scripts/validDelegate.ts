// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from 'hardhat'

const LOCALHOST_REGISTRY_ADDRESS="0x5FbDB2315678afecb367f032d93F642f64180aa3"
const LOCALHOST_IDENTITY="0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
const LOCALHOST_IDENTITY_OWNER="0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
const LOCALHOST_IDENTITY_DELEGATE="0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC"
const LOCALHOST_DELEGATE_TYPE = ethers.utils.formatBytes32String("test")
const LOCALHOST_IDENTITY_INVALID_DELEGATE = "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199"

const GOERLI_REGISTRY_ADDRESS="0xDB91e57fcF6c5b8A3ee443B4aAC1c6ba2A7f8ccE"
const GOERLI_IDENTITY="0xE2A5dCfe8B116Dd77Ac99A2631F7B0c2704e3d4D"
const GOERLI_IDENTITY_OWNER="0xE2A5dCfe8B116Dd77Ac99A2631F7B0c2704e3d4D"
const GOERLI_IDENTITY_DELEGATE="0x7Dba34042740F4B884D0180c42aC63B5f8553e06"
const GOERLI_DELEGATE_TYPE = ethers.utils.formatBytes32String("test")

async function main() {
  // const signer = await ethers.provider.getSigner(LOCALHOST_IDENTITY_OWNER);

  const RegistryContract = await ethers.getContractFactory('EthereumDIDRegistry')
  const contractInstance = await RegistryContract.attach(GOERLI_REGISTRY_ADDRESS)
  
  const validDelegate = await contractInstance.validDelegate(
    GOERLI_IDENTITY,
    GOERLI_DELEGATE_TYPE,
    GOERLI_IDENTITY_DELEGATE)
  console.log('Delegate ' + GOERLI_IDENTITY_DELEGATE + ' for identity ' + GOERLI_IDENTITY + ' validity: ' + validDelegate)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
