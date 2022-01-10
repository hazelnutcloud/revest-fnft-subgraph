import { FNFTWithdrawn } from "../../generated/Revest/Revest";
import { FNFTWithdraw } from "../../generated/schema";
import { updateFNFTBalance } from "./FNFTBalance";

export function withdrawFNFT(event: FNFTWithdrawn):void {
  updateFNFTWithdraw(event)
  updateFNFTBalance(event.params.fnftId, event.params.from, event.block.timestamp)
}

export function updateFNFTWithdraw(event: FNFTWithdrawn):void {
  const fnftWithdraw = loadOrCreateFNFTWithdraw(event.transaction.hash.toHexString())
  fnftWithdraw.fnft = event.params.fnftId.toString()
  fnftWithdraw.withdrawer = event.params.from.toHexString()
  fnftWithdraw.quantity = event.params.quantity
  fnftWithdraw.timestamp = event.block.timestamp
  fnftWithdraw.save()
}

export function loadOrCreateFNFTWithdraw(id: string):FNFTWithdraw {
  let fnftWithdraw = FNFTWithdraw.load(id)
  if (!fnftWithdraw) {
    fnftWithdraw = new FNFTWithdraw(id)
  }
  return fnftWithdraw
}