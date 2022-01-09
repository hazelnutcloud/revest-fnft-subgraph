import { MintAddressLockCall, MintTimeLockCall, MintValueLockCall } from "../../generated/Revest/Revest"
import { FNFT } from "../../generated/schema"

export function loadOrCreateFNFT(id: string): FNFT {
  let fnft = FNFT.load(id)
  if (!fnft) {
    fnft = new FNFT(id)
    fnft.isSplit = false
    fnft.isAdditionalDeposit = false
    fnft.unlockRisingEdge = false //boolean fields cannot be null for some reason
  }
  return fnft
}

export function copyFNFTFields(newFNFT: FNFT, oldFNFT: FNFT):FNFT {
  newFNFT.minter = oldFNFT.minter
  newFNFT.type = oldFNFT.type
  newFNFT.endTime = oldFNFT.endTime
  newFNFT.primaryAsset = oldFNFT.primaryAsset
  newFNFT.compareTo = oldFNFT.compareTo
  newFNFT.unlockValue = oldFNFT.unlockValue
  newFNFT.unlockRisingEdge = oldFNFT.unlockRisingEdge
  newFNFT.oracleDispatch = oldFNFT.oracleDispatch
  newFNFT.trigger = oldFNFT.trigger
  newFNFT.arguments = oldFNFT.arguments
  newFNFT.mintTimestamp = oldFNFT.mintTimestamp
  newFNFT.isSplit = oldFNFT.isSplit
  newFNFT.splitFrom = oldFNFT.splitFrom
  newFNFT.totalSupply = oldFNFT.totalSupply
  newFNFT.asset = oldFNFT.asset
  newFNFT.pipeToContract = oldFNFT.pipeToContract
  newFNFT.depositAmount = oldFNFT.depositAmount
  newFNFT.depositMul = oldFNFT.depositMul
  newFNFT.split = oldFNFT.split
  newFNFT.depositStopTime = oldFNFT.depositStopTime
  newFNFT.maturityExtension = oldFNFT.maturityExtension
  newFNFT.isMulti = oldFNFT.isMulti
  newFNFT.nontransferrable = oldFNFT.nontransferrable
  return newFNFT
}

export function updateTimeLockFNFT(fnft: FNFT, tx: MintTimeLockCall): void {
  const fnftConfig = tx.inputs.fnftConfig
  fnft.minter = tx.from.toHexString()
  fnft.type = "time"
  fnft.endTime = tx.inputs.endTime
  fnft.mintTimestamp = tx.block.timestamp
  fnft.asset = fnftConfig.asset.toHexString()
  fnft.pipeToContract = fnftConfig.pipeToContract.toHexString()
  fnft.depositAmount = fnftConfig.depositAmount
  fnft.depositMul = fnftConfig.depositMul
  fnft.split = fnftConfig.split
  fnft.depositStopTime = fnftConfig.depositStopTime
  fnft.maturityExtension = fnftConfig.maturityExtension
  fnft.isMulti = fnftConfig.isMulti
  fnft.nontransferrable = fnftConfig.nontransferrable
  fnft.save()
}

export function updateValueLockFNFT(fnft: FNFT, tx: MintValueLockCall): void {
  const fnftConfig = tx.inputs.fnftConfig
  fnft.minter = tx.from.toHexString()
  fnft.type = "value"
  fnft.primaryAsset = tx.inputs.primaryAsset.toHexString()
  fnft.compareTo = tx.inputs.compareTo.toHexString()
  fnft.unlockValue = tx.inputs.unlockValue
  fnft.unlockRisingEdge = tx.inputs.unlockRisingEdge
  fnft.oracleDispatch = tx.inputs.oracleDispatch.toHexString()
  fnft.mintTimestamp = tx.block.timestamp
  fnft.asset = fnftConfig.asset.toHexString()
  fnft.pipeToContract = fnftConfig.pipeToContract.toHexString()
  fnft.depositAmount = fnftConfig.depositAmount
  fnft.depositMul = fnftConfig.depositMul
  fnft.split = fnftConfig.split
  fnft.depositStopTime = fnftConfig.depositStopTime
  fnft.maturityExtension = fnftConfig.maturityExtension
  fnft.isMulti = fnftConfig.isMulti
  fnft.nontransferrable = fnftConfig.nontransferrable
  fnft.save()
}

export function updateAddressLockFNFT(fnft: FNFT, tx: MintAddressLockCall): void {
  const fnftConfig = tx.inputs.fnftConfig
  fnft.minter = tx.from.toHexString()
  fnft.type = "address"
  fnft.trigger = tx.inputs.trigger.toHexString()
  fnft.arguments = tx.inputs.arguments
  fnft.mintTimestamp = tx.block.timestamp
  fnft.asset = fnftConfig.asset.toHexString()
  fnft.pipeToContract = fnftConfig.pipeToContract.toHexString()
  fnft.depositAmount = fnftConfig.depositAmount
  fnft.depositMul = fnftConfig.depositMul
  fnft.split = fnftConfig.split
  fnft.depositStopTime = fnftConfig.depositStopTime
  fnft.maturityExtension = fnftConfig.maturityExtension
  fnft.isMulti = fnftConfig.isMulti
  fnft.nontransferrable = fnftConfig.nontransferrable
  fnft.save()
}