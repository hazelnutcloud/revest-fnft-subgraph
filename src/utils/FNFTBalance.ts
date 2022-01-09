import { Address, BigInt } from "@graphprotocol/graph-ts"
import { FNFTHandler } from "../../generated/FNFTHandler/FNFTHandler"
import { FNFTBalance } from "../../generated/schema"
import { FNFTHANDLER_ADDRESS } from "./constants"
import { loadOrCreateFNFT } from "./FNFT"
import { loadOrCreateOwner } from "./Owner"

export function loadOrCreateFNFTBalance (id: string): FNFTBalance {
  let fnftBalance = FNFTBalance.load(id)
  if (!fnftBalance) {
    fnftBalance = new FNFTBalance(id)
    fnftBalance.balance = BigInt.fromU32(0)
  }
  return fnftBalance
}

export function updateFNFTBalance(fnftID: BigInt, owner: Address, quantity: BigInt, lastChange: BigInt, add: boolean = true): void {
  const _owner = loadOrCreateOwner(owner.toHexString())
  const fnftBalance = loadOrCreateFNFTBalance(`${fnftID}-${owner.toHexString()}`)
  fnftBalance.fnft = fnftID.toString()
  fnftBalance.owner = owner.toHexString()
  if (add) {
    fnftBalance.balance = fnftBalance.balance.plus(quantity)
  } else {
    fnftBalance.balance = fnftBalance.balance.minus(quantity)
  }
  fnftBalance.lastChange = lastChange

  const fnftHandlerContract = FNFTHandler.bind(Address.fromString(FNFTHANDLER_ADDRESS))
  const supply = fnftHandlerContract.getSupply(fnftID)
  const fnft = loadOrCreateFNFT(fnftID.toString())
  fnft.totalSupply = supply
  fnft.save()

  _owner.save()
  fnftBalance.save()
}