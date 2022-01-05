import {
  FNFTAddressLockMinted,
} from "../generated/Revest/Revest"
import { loadOrCreateAddressLockFNFT } from "./helpers"

export function handleFNFTAddressLockMinted(event: FNFTAddressLockMinted): void {
  const addressLockFNFT = loadOrCreateAddressLockFNFT(event.params.fnftId.toString())
  const params = event.params
  const fnftConfig = params.fnftConfig
  
  addressLockFNFT.minter = params.from.toHexString()
  addressLockFNFT.trigger = params.trigger.toHexString()
  addressLockFNFT.asset = params.asset.toHexString()
  addressLockFNFT.pipeToContract = fnftConfig.pipeToContract.toHexString()
  addressLockFNFT.depositAmount = fnftConfig.depositAmount
  addressLockFNFT.depositMul = fnftConfig.depositMul
  addressLockFNFT.split = fnftConfig.split
  addressLockFNFT.depositStopTime = fnftConfig.depositStopTime
  addressLockFNFT.maturityExtension = fnftConfig.maturityExtension
  addressLockFNFT.isMulti = fnftConfig.isMulti
  addressLockFNFT.nontransferrable = fnftConfig.nontransferrable

  addressLockFNFT.save()
}