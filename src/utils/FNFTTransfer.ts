import { Address, BigInt } from "@graphprotocol/graph-ts";
import { FNFTTransfer } from "../../generated/schema";
import { updateFNFTBalance } from "./FNFTBalance";

export function loadOrCreateFNFTTransfer(id: string):FNFTTransfer {
  let transfer = FNFTTransfer.load(id)
  if(!transfer) {
    transfer = new FNFTTransfer(id)
  }
  return transfer
}

export function updateFNFTTransfer(transfer: FNFTTransfer, from: Address, to: Address, id: BigInt, quantity: BigInt, timestamp: BigInt):void {
  transfer.from = from.toHexString()
  transfer.to = to.toHexString()
  transfer.fnft = id.toString()
  transfer.amount = quantity
  transfer.timestamp = timestamp
  transfer.save()
}

export function transferFNFT(transfer: FNFTTransfer, fnftid: BigInt, from: Address, to: Address, amount: BigInt, timestamp: BigInt):void {
  updateFNFTTransfer(transfer, from, to, fnftid, amount, timestamp)
  updateFNFTBalance(fnftid, from, timestamp)
  updateFNFTBalance(fnftid, to, timestamp)
}