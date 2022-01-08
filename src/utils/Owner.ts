import { Owner } from "../../generated/schema"

export function loadOrCreateOwner(id: string): Owner {
    let owner = Owner.load(id)
    if (!owner) {
        owner = new Owner(id)
    }
    return owner
}