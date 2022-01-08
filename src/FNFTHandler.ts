import { SafeBatchTransferFromCall, SafeTransferFromCall } from '../generated/FNFTHandler/FNFTHandler'
import { loadOrCreateFNFTTransfer, transferFNFT } from './utils/FNFTTransfer'

export function handleSafeTransferFrom(call: SafeTransferFromCall): void {
	const transfer = loadOrCreateFNFTTransfer(`${call.transaction.hash.toHexString()}-${call.inputs.id}`)
	transferFNFT(transfer, call.inputs.id, call.inputs.from, call.inputs.to, call.inputs.amount, call.block.timestamp)
}

export function handleSafeBatchTransferFrom(call: SafeBatchTransferFromCall): void {
	const ids = call.inputs.ids
	for (let i=0; i<ids.length; i++) {
		const transfer = loadOrCreateFNFTTransfer(`${call.transaction.hash.toHexString()}-${ids[i]}`)
		transferFNFT(transfer, ids[i], call.inputs.from, call.inputs.to, call.inputs.amounts[i], call.block.timestamp)
	}
}