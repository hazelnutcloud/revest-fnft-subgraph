import {
  DepositAdditionalToFNFTCall,
  FNFTWithdrawn,
  MintAddressLockCall,
  MintTimeLockCall,
  MintValueLockCall,
  SplitFNFTCall,
} from "../generated/Revest/Revest"
import { loadOrCreateFNFT, updateAddressLockFNFT, updateTimeLockFNFT, updateValueLockFNFT } from "./utils/FNFT"
import { updateFNFTBalance } from "./utils/FNFTBalance"
import { splitFNFT } from "./utils/FNFTSplit"
import { withdrawFNFT } from "./utils/FNFTWithdraw"

export function handleMintTimeLock(call: MintTimeLockCall): void {
  const fnftID = call.outputs.value0
  const fnft = loadOrCreateFNFT(fnftID.toString())
  updateTimeLockFNFT(fnft, call)
  const recipients = call.inputs.recipients
  for (let i=0; i<recipients.length; i++) {
    updateFNFTBalance(fnftID, recipients[i], call.inputs.quantities[i], call.block.timestamp)
  }
}

export function handleMintValueLock(call: MintValueLockCall): void {
  const fnftID = call.outputs.value0
  const fnft = loadOrCreateFNFT(fnftID.toString())
  updateValueLockFNFT(fnft, call)
  const recipients = call.inputs.recipients
  for (let i=0; i<recipients.length; i++) {
    updateFNFTBalance(fnftID, recipients[i], call.inputs.quantities[i], call.block.timestamp)
  }
}

export function handleMintAddressLock(call: MintAddressLockCall): void {
  const fnftID = call.outputs.value0
  const fnft = loadOrCreateFNFT(fnftID.toString())
  updateAddressLockFNFT(fnft, call)
  const recipients = call.inputs.recipients
  for (let i=0; i<recipients.length; i++) {
    updateFNFTBalance(fnftID, recipients[i], call.inputs.quantities[i], call.block.timestamp)
  }
}

export function handleFNFTWithdrawn(event: FNFTWithdrawn): void {
  withdrawFNFT(event)
}

export function handlesplitFNFT(call: SplitFNFTCall): void {
  splitFNFT(call)
}

export function handleDepositAdditionalToFNFT(call: DepositAdditionalToFNFTCall):void {

}