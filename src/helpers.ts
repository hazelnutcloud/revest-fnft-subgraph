import { AddressLockFNFT } from "../generated/schema";

export function loadOrCreateAddressLockFNFT(id: string): AddressLockFNFT {
    let addressLockFNFT = AddressLockFNFT.load(id)
    if (!addressLockFNFT) {
        addressLockFNFT = new AddressLockFNFT(id)
    }
    return addressLockFNFT
}