// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CreateFNFT extends ethereum.Event {
  get params(): CreateFNFT__Params {
    return new CreateFNFT__Params(this);
  }
}

export class CreateFNFT__Params {
  _event: CreateFNFT;

  constructor(event: CreateFNFT) {
    this._event = event;
  }

  get fnftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RedeemFNFT extends ethereum.Event {
  get params(): RedeemFNFT__Params {
    return new RedeemFNFT__Params(this);
  }
}

export class RedeemFNFT__Params {
  _event: RedeemFNFT;

  constructor(event: RedeemFNFT) {
    this._event = event;
  }

  get fnftId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class TokenVault__cloneFNFTConfigResultValue0Struct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get pipeToContract(): Address {
    return this[1].toAddress();
  }

  get depositAmount(): BigInt {
    return this[2].toBigInt();
  }

  get depositMul(): BigInt {
    return this[3].toBigInt();
  }

  get split(): BigInt {
    return this[4].toBigInt();
  }

  get depositStopTime(): BigInt {
    return this[5].toBigInt();
  }

  get maturityExtension(): boolean {
    return this[6].toBoolean();
  }

  get isMulti(): boolean {
    return this[7].toBoolean();
  }

  get nontransferrable(): boolean {
    return this[8].toBoolean();
  }
}

export class TokenVault__cloneFNFTConfigInputOldStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get pipeToContract(): Address {
    return this[1].toAddress();
  }

  get depositAmount(): BigInt {
    return this[2].toBigInt();
  }

  get depositMul(): BigInt {
    return this[3].toBigInt();
  }

  get split(): BigInt {
    return this[4].toBigInt();
  }

  get depositStopTime(): BigInt {
    return this[5].toBigInt();
  }

  get maturityExtension(): boolean {
    return this[6].toBoolean();
  }

  get isMulti(): boolean {
    return this[7].toBoolean();
  }

  get nontransferrable(): boolean {
    return this[8].toBoolean();
  }
}

export class TokenVault__getFNFTResultValue0Struct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get pipeToContract(): Address {
    return this[1].toAddress();
  }

  get depositAmount(): BigInt {
    return this[2].toBigInt();
  }

  get depositMul(): BigInt {
    return this[3].toBigInt();
  }

  get split(): BigInt {
    return this[4].toBigInt();
  }

  get depositStopTime(): BigInt {
    return this[5].toBigInt();
  }

  get maturityExtension(): boolean {
    return this[6].toBoolean();
  }

  get isMulti(): boolean {
    return this[7].toBoolean();
  }

  get nontransferrable(): boolean {
    return this[8].toBoolean();
  }
}

export class TokenVault__tokenTrackersResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }
}

export class TokenVault extends ethereum.SmartContract {
  static bind(address: Address): TokenVault {
    return new TokenVault("TokenVault", address);
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  OUTPUT_RECEIVER_INTERFACE_ID(): Bytes {
    let result = super.call(
      "OUTPUT_RECEIVER_INTERFACE_ID",
      "OUTPUT_RECEIVER_INTERFACE_ID():(bytes4)",
      []
    );

    return result[0].toBytes();
  }

  try_OUTPUT_RECEIVER_INTERFACE_ID(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "OUTPUT_RECEIVER_INTERFACE_ID",
      "OUTPUT_RECEIVER_INTERFACE_ID():(bytes4)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  cloneFNFTConfig(
    old: TokenVault__cloneFNFTConfigInputOldStruct
  ): TokenVault__cloneFNFTConfigResultValue0Struct {
    let result = super.call(
      "cloneFNFTConfig",
      "cloneFNFTConfig((address,address,uint256,uint256,uint256,uint256,bool,bool,bool)):((address,address,uint256,uint256,uint256,uint256,bool,bool,bool))",
      [ethereum.Value.fromTuple(old)]
    );

    return changetype<TokenVault__cloneFNFTConfigResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_cloneFNFTConfig(
    old: TokenVault__cloneFNFTConfigInputOldStruct
  ): ethereum.CallResult<TokenVault__cloneFNFTConfigResultValue0Struct> {
    let result = super.tryCall(
      "cloneFNFTConfig",
      "cloneFNFTConfig((address,address,uint256,uint256,uint256,uint256,bool,bool,bool)):((address,address,uint256,uint256,uint256,uint256,bool,bool,bool))",
      [ethereum.Value.fromTuple(old)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TokenVault__cloneFNFTConfigResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getFNFT(fnftId: BigInt): TokenVault__getFNFTResultValue0Struct {
    let result = super.call(
      "getFNFT",
      "getFNFT(uint256):((address,address,uint256,uint256,uint256,uint256,bool,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );

    return changetype<TokenVault__getFNFTResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getFNFT(
    fnftId: BigInt
  ): ethereum.CallResult<TokenVault__getFNFTResultValue0Struct> {
    let result = super.tryCall(
      "getFNFT",
      "getFNFT(uint256):((address,address,uint256,uint256,uint256,uint256,bool,bool,bool))",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<TokenVault__getFNFTResultValue0Struct>(value[0].toTuple())
    );
  }

  getFNFTCurrentValue(fnftId: BigInt): BigInt {
    let result = super.call(
      "getFNFTCurrentValue",
      "getFNFTCurrentValue(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );

    return result[0].toBigInt();
  }

  try_getFNFTCurrentValue(fnftId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getFNFTCurrentValue",
      "getFNFTCurrentValue(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getNontransferable(fnftId: BigInt): boolean {
    let result = super.call(
      "getNontransferable",
      "getNontransferable(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );

    return result[0].toBoolean();
  }

  try_getNontransferable(fnftId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "getNontransferable",
      "getNontransferable(uint256):(bool)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getRoleMember(role: Bytes, index: BigInt): Address {
    let result = super.call(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );

    return result[0].toAddress();
  }

  try_getRoleMember(role: Bytes, index: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getRoleMember",
      "getRoleMember(bytes32,uint256):(address)",
      [
        ethereum.Value.fromFixedBytes(role),
        ethereum.Value.fromUnsignedBigInt(index)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getRoleMemberCount(role: Bytes): BigInt {
    let result = super.call(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );

    return result[0].toBigInt();
  }

  try_getRoleMemberCount(role: Bytes): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getRoleMemberCount",
      "getRoleMemberCount(bytes32):(uint256)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getSplitsRemaining(fnftId: BigInt): BigInt {
    let result = super.call(
      "getSplitsRemaining",
      "getSplitsRemaining(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );

    return result[0].toBigInt();
  }

  try_getSplitsRemaining(fnftId: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getSplitsRemaining",
      "getSplitsRemaining(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(fnftId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  tokenTrackers(param0: Address): TokenVault__tokenTrackersResult {
    let result = super.call(
      "tokenTrackers",
      "tokenTrackers(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new TokenVault__tokenTrackersResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_tokenTrackers(
    param0: Address
  ): ethereum.CallResult<TokenVault__tokenTrackersResult> {
    let result = super.tryCall(
      "tokenTrackers",
      "tokenTrackers(address):(uint256,uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TokenVault__tokenTrackersResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get provider(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CreateFNFTCall extends ethereum.Call {
  get inputs(): CreateFNFTCall__Inputs {
    return new CreateFNFTCall__Inputs(this);
  }

  get outputs(): CreateFNFTCall__Outputs {
    return new CreateFNFTCall__Outputs(this);
  }
}

export class CreateFNFTCall__Inputs {
  _call: CreateFNFTCall;

  constructor(call: CreateFNFTCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get fnftConfig(): CreateFNFTCallFnftConfigStruct {
    return changetype<CreateFNFTCallFnftConfigStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }

  get quantity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get from(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class CreateFNFTCall__Outputs {
  _call: CreateFNFTCall;

  constructor(call: CreateFNFTCall) {
    this._call = call;
  }
}

export class CreateFNFTCallFnftConfigStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get pipeToContract(): Address {
    return this[1].toAddress();
  }

  get depositAmount(): BigInt {
    return this[2].toBigInt();
  }

  get depositMul(): BigInt {
    return this[3].toBigInt();
  }

  get split(): BigInt {
    return this[4].toBigInt();
  }

  get depositStopTime(): BigInt {
    return this[5].toBigInt();
  }

  get maturityExtension(): boolean {
    return this[6].toBoolean();
  }

  get isMulti(): boolean {
    return this[7].toBoolean();
  }

  get nontransferrable(): boolean {
    return this[8].toBoolean();
  }
}

export class DepositTokenCall extends ethereum.Call {
  get inputs(): DepositTokenCall__Inputs {
    return new DepositTokenCall__Inputs(this);
  }

  get outputs(): DepositTokenCall__Outputs {
    return new DepositTokenCall__Outputs(this);
  }
}

export class DepositTokenCall__Inputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get transferAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class DepositTokenCall__Outputs {
  _call: DepositTokenCall;

  constructor(call: DepositTokenCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class HandleMultipleDepositsCall extends ethereum.Call {
  get inputs(): HandleMultipleDepositsCall__Inputs {
    return new HandleMultipleDepositsCall__Inputs(this);
  }

  get outputs(): HandleMultipleDepositsCall__Outputs {
    return new HandleMultipleDepositsCall__Outputs(this);
  }
}

export class HandleMultipleDepositsCall__Inputs {
  _call: HandleMultipleDepositsCall;

  constructor(call: HandleMultipleDepositsCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newFNFTId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class HandleMultipleDepositsCall__Outputs {
  _call: HandleMultipleDepositsCall;

  constructor(call: HandleMultipleDepositsCall) {
    this._call = call;
  }
}

export class MapFNFTToTokenCall extends ethereum.Call {
  get inputs(): MapFNFTToTokenCall__Inputs {
    return new MapFNFTToTokenCall__Inputs(this);
  }

  get outputs(): MapFNFTToTokenCall__Outputs {
    return new MapFNFTToTokenCall__Outputs(this);
  }
}

export class MapFNFTToTokenCall__Inputs {
  _call: MapFNFTToTokenCall;

  constructor(call: MapFNFTToTokenCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get fnftConfig(): MapFNFTToTokenCallFnftConfigStruct {
    return changetype<MapFNFTToTokenCallFnftConfigStruct>(
      this._call.inputValues[1].value.toTuple()
    );
  }
}

export class MapFNFTToTokenCall__Outputs {
  _call: MapFNFTToTokenCall;

  constructor(call: MapFNFTToTokenCall) {
    this._call = call;
  }
}

export class MapFNFTToTokenCallFnftConfigStruct extends ethereum.Tuple {
  get asset(): Address {
    return this[0].toAddress();
  }

  get pipeToContract(): Address {
    return this[1].toAddress();
  }

  get depositAmount(): BigInt {
    return this[2].toBigInt();
  }

  get depositMul(): BigInt {
    return this[3].toBigInt();
  }

  get split(): BigInt {
    return this[4].toBigInt();
  }

  get depositStopTime(): BigInt {
    return this[5].toBigInt();
  }

  get maturityExtension(): boolean {
    return this[6].toBoolean();
  }

  get isMulti(): boolean {
    return this[7].toBoolean();
  }

  get nontransferrable(): boolean {
    return this[8].toBoolean();
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class SetAddressRegistryCall extends ethereum.Call {
  get inputs(): SetAddressRegistryCall__Inputs {
    return new SetAddressRegistryCall__Inputs(this);
  }

  get outputs(): SetAddressRegistryCall__Outputs {
    return new SetAddressRegistryCall__Outputs(this);
  }
}

export class SetAddressRegistryCall__Inputs {
  _call: SetAddressRegistryCall;

  constructor(call: SetAddressRegistryCall) {
    this._call = call;
  }

  get registry(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetAddressRegistryCall__Outputs {
  _call: SetAddressRegistryCall;

  constructor(call: SetAddressRegistryCall) {
    this._call = call;
  }
}

export class SplitFNFTCall extends ethereum.Call {
  get inputs(): SplitFNFTCall__Inputs {
    return new SplitFNFTCall__Inputs(this);
  }

  get outputs(): SplitFNFTCall__Outputs {
    return new SplitFNFTCall__Outputs(this);
  }
}

export class SplitFNFTCall__Inputs {
  _call: SplitFNFTCall;

  constructor(call: SplitFNFTCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get newFNFTIds(): Array<BigInt> {
    return this._call.inputValues[1].value.toBigIntArray();
  }

  get proportions(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get quantity(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class SplitFNFTCall__Outputs {
  _call: SplitFNFTCall;

  constructor(call: SplitFNFTCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawTokenCall extends ethereum.Call {
  get inputs(): WithdrawTokenCall__Inputs {
    return new WithdrawTokenCall__Inputs(this);
  }

  get outputs(): WithdrawTokenCall__Outputs {
    return new WithdrawTokenCall__Outputs(this);
  }
}

export class WithdrawTokenCall__Inputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }

  get fnftId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get quantity(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get user(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class WithdrawTokenCall__Outputs {
  _call: WithdrawTokenCall;

  constructor(call: WithdrawTokenCall) {
    this._call = call;
  }
}
