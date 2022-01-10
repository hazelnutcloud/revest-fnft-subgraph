import { BigInt } from "@graphprotocol/graph-ts";
import { DepositAdditionalToFNFTCall } from "../../generated/Revest/Revest";
import { FNFTAdditionalDeposit } from "../../generated/schema";
import { copyFNFTFields, loadOrCreateFNFT } from "./FNFT";
import { updateFNFTBalance } from "./FNFTBalance";

export function loadOrCreateFNFTAdditionalDeposit(id: string):FNFTAdditionalDeposit {
  let fnftAdditionalDeposit = FNFTAdditionalDeposit.load(id)
  if (!fnftAdditionalDeposit) {
    fnftAdditionalDeposit = new FNFTAdditionalDeposit(id)
  }
  return fnftAdditionalDeposit
}

export function depositAdditionalFNFT(call: DepositAdditionalToFNFTCall):void {
  const fnftAdditionalDeposit = loadOrCreateFNFTAdditionalDeposit(call.transaction.hash.toHexString())
  fnftAdditionalDeposit.fnft = call.inputs.fnftId.toString()
  fnftAdditionalDeposit.depositor = call.from.toHexString()
  fnftAdditionalDeposit.quantity = call.inputs.quantity
  fnftAdditionalDeposit.amount = call.inputs.amount
  fnftAdditionalDeposit.save()

  if (call.outputs.value0 === BigInt.fromU32(0)) {
    const fnft = loadOrCreateFNFT(call.inputs.fnftId.toString())
    fnft.depositAmount = fnft.depositAmount.plus(call.inputs.amount)
    fnft.save()
  } else {
    const oldFnft = loadOrCreateFNFT(call.inputs.fnftId.toString())
    const newFNFT = copyFNFTFields(loadOrCreateFNFT(call.outputs.value0.toString()), oldFnft)
    newFNFT.isAdditionalDeposit = true
    newFNFT.additionalDepositFrom = call.transaction.hash.toHexString()
    newFNFT.depositAmount = newFNFT.depositAmount.plus(call.inputs.amount)
    newFNFT.save()
    updateFNFTBalance(call.inputs.fnftId, call.from, call.block.timestamp)
    updateFNFTBalance(call.outputs.value0, call.from, call.block.timestamp)
  }
}