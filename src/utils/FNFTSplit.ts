import { SplitFNFTCall } from "../../generated/Revest/Revest";
import { FNFT, FNFTSplit } from "../../generated/schema";
import { TokenVault } from "../../generated/Revest/TokenVault"
import { Address } from "@graphprotocol/graph-ts";
import { TOKENVAULT_ADDRESS } from "./constants";
import { copyFNFTFields, loadOrCreateFNFT } from "./FNFT";
import { updateFNFTBalance } from "./FNFTBalance";

export function loadOrCreateFNFTSplit(id: string):FNFTSplit {
  let fnftSplit = FNFTSplit.load(id)
  if (!fnftSplit) {
    fnftSplit = new FNFTSplit(id)
  }
  return fnftSplit
}

export function splitFNFT(call: SplitFNFTCall):void {
  const fnftSplit = loadOrCreateFNFTSplit(call.transaction.hash.toHexString())
  fnftSplit.splitter = call.from.toHexString()
  fnftSplit.quantity = call.inputs.quantity
  fnftSplit.fnft = call.inputs.fnftId.toString()
  fnftSplit.save()

  const oldFNFT = loadOrCreateFNFT(call.inputs.fnftId.toString())
  const newFNFTIds = call.outputs.value0
  for (let i=0; i<newFNFTIds.length; i++) {
    const tokenVaultContract = TokenVault.bind(Address.fromString(TOKENVAULT_ADDRESS))
    const newFNFTConfig = tokenVaultContract.getFNFT(newFNFTIds[i])
    const newFNFT = copyFNFTFields(loadOrCreateFNFT(newFNFTIds[i].toString()), oldFNFT)
    newFNFT.minter = call.from.toHexString()
    newFNFT.mintTimestamp = call.block.timestamp
    newFNFT.isSplit = true
    newFNFT.splitFrom = call.transaction.hash.toHexString()
    newFNFT.active = true
    newFNFT.depositAmount = newFNFTConfig.depositAmount
    newFNFT.split = newFNFTConfig.split
    newFNFT.save()
    
    updateFNFTBalance(newFNFTIds[i], call.from, call.inputs.quantity, call.block.timestamp)
  }
  updateFNFTBalance(call.inputs.fnftId, call.from, call.inputs.quantity, call.block.timestamp, false)
}