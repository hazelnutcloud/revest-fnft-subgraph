// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class FNFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("minter", Value.fromString(""));
    this.set("type", Value.fromString(""));
    this.set("mintTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("totalSupply", Value.fromBigInt(BigInt.zero()));
    this.set("asset", Value.fromString(""));
    this.set("pipeToContract", Value.fromString(""));
    this.set("depositAmount", Value.fromBigInt(BigInt.zero()));
    this.set("depositMul", Value.fromBigInt(BigInt.zero()));
    this.set("split", Value.fromBigInt(BigInt.zero()));
    this.set("depositStopTime", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFT entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFT entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFT", id.toString(), this);
    }
  }

  static load(id: string): FNFT | null {
    return changetype<FNFT | null>(store.get("FNFT", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get minter(): string {
    let value = this.get("minter");
    return value!.toString();
  }

  set minter(value: string) {
    this.set("minter", Value.fromString(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get endTime(): BigInt | null {
    let value = this.get("endTime");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set endTime(value: BigInt | null) {
    if (!value) {
      this.unset("endTime");
    } else {
      this.set("endTime", Value.fromBigInt(<BigInt>value));
    }
  }

  get primaryAsset(): string | null {
    let value = this.get("primaryAsset");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set primaryAsset(value: string | null) {
    if (!value) {
      this.unset("primaryAsset");
    } else {
      this.set("primaryAsset", Value.fromString(<string>value));
    }
  }

  get compareTo(): string | null {
    let value = this.get("compareTo");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set compareTo(value: string | null) {
    if (!value) {
      this.unset("compareTo");
    } else {
      this.set("compareTo", Value.fromString(<string>value));
    }
  }

  get unlockValue(): BigInt | null {
    let value = this.get("unlockValue");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set unlockValue(value: BigInt | null) {
    if (!value) {
      this.unset("unlockValue");
    } else {
      this.set("unlockValue", Value.fromBigInt(<BigInt>value));
    }
  }

  get unlockRisingEdge(): boolean {
    let value = this.get("unlockRisingEdge");
    return value!.toBoolean();
  }

  set unlockRisingEdge(value: boolean) {
    this.set("unlockRisingEdge", Value.fromBoolean(value));
  }

  get oracleDispatch(): string | null {
    let value = this.get("oracleDispatch");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set oracleDispatch(value: string | null) {
    if (!value) {
      this.unset("oracleDispatch");
    } else {
      this.set("oracleDispatch", Value.fromString(<string>value));
    }
  }

  get trigger(): string | null {
    let value = this.get("trigger");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set trigger(value: string | null) {
    if (!value) {
      this.unset("trigger");
    } else {
      this.set("trigger", Value.fromString(<string>value));
    }
  }

  get arguments(): Bytes | null {
    let value = this.get("arguments");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set arguments(value: Bytes | null) {
    if (!value) {
      this.unset("arguments");
    } else {
      this.set("arguments", Value.fromBytes(<Bytes>value));
    }
  }

  get owners(): Array<string> {
    let value = this.get("owners");
    return value!.toStringArray();
  }

  set owners(value: Array<string>) {
    this.set("owners", Value.fromStringArray(value));
  }

  get mintTimestamp(): BigInt {
    let value = this.get("mintTimestamp");
    return value!.toBigInt();
  }

  set mintTimestamp(value: BigInt) {
    this.set("mintTimestamp", Value.fromBigInt(value));
  }

  get isSplit(): boolean {
    let value = this.get("isSplit");
    return value!.toBoolean();
  }

  set isSplit(value: boolean) {
    this.set("isSplit", Value.fromBoolean(value));
  }

  get splitFrom(): string | null {
    let value = this.get("splitFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set splitFrom(value: string | null) {
    if (!value) {
      this.unset("splitFrom");
    } else {
      this.set("splitFrom", Value.fromString(<string>value));
    }
  }

  get isAdditionalDeposit(): boolean {
    let value = this.get("isAdditionalDeposit");
    return value!.toBoolean();
  }

  set isAdditionalDeposit(value: boolean) {
    this.set("isAdditionalDeposit", Value.fromBoolean(value));
  }

  get additionalDepositFrom(): string | null {
    let value = this.get("additionalDepositFrom");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set additionalDepositFrom(value: string | null) {
    if (!value) {
      this.unset("additionalDepositFrom");
    } else {
      this.set("additionalDepositFrom", Value.fromString(<string>value));
    }
  }

  get totalSupply(): BigInt {
    let value = this.get("totalSupply");
    return value!.toBigInt();
  }

  set totalSupply(value: BigInt) {
    this.set("totalSupply", Value.fromBigInt(value));
  }

  get asset(): string {
    let value = this.get("asset");
    return value!.toString();
  }

  set asset(value: string) {
    this.set("asset", Value.fromString(value));
  }

  get pipeToContract(): string {
    let value = this.get("pipeToContract");
    return value!.toString();
  }

  set pipeToContract(value: string) {
    this.set("pipeToContract", Value.fromString(value));
  }

  get depositAmount(): BigInt {
    let value = this.get("depositAmount");
    return value!.toBigInt();
  }

  set depositAmount(value: BigInt) {
    this.set("depositAmount", Value.fromBigInt(value));
  }

  get depositMul(): BigInt {
    let value = this.get("depositMul");
    return value!.toBigInt();
  }

  set depositMul(value: BigInt) {
    this.set("depositMul", Value.fromBigInt(value));
  }

  get split(): BigInt {
    let value = this.get("split");
    return value!.toBigInt();
  }

  set split(value: BigInt) {
    this.set("split", Value.fromBigInt(value));
  }

  get depositStopTime(): BigInt {
    let value = this.get("depositStopTime");
    return value!.toBigInt();
  }

  set depositStopTime(value: BigInt) {
    this.set("depositStopTime", Value.fromBigInt(value));
  }

  get maturityExtension(): boolean {
    let value = this.get("maturityExtension");
    return value!.toBoolean();
  }

  set maturityExtension(value: boolean) {
    this.set("maturityExtension", Value.fromBoolean(value));
  }

  get isMulti(): boolean {
    let value = this.get("isMulti");
    return value!.toBoolean();
  }

  set isMulti(value: boolean) {
    this.set("isMulti", Value.fromBoolean(value));
  }

  get nontransferrable(): boolean {
    let value = this.get("nontransferrable");
    return value!.toBoolean();
  }

  set nontransferrable(value: boolean) {
    this.set("nontransferrable", Value.fromBoolean(value));
  }
}

export class Owner extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Owner entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Owner entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Owner", id.toString(), this);
    }
  }

  static load(id: string): Owner | null {
    return changetype<Owner | null>(store.get("Owner", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fnfts(): Array<string> {
    let value = this.get("fnfts");
    return value!.toStringArray();
  }

  set fnfts(value: Array<string>) {
    this.set("fnfts", Value.fromStringArray(value));
  }
}

export class FNFTTransfer extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("fnft", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTTransfer entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFTTransfer entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFTTransfer", id.toString(), this);
    }
  }

  static load(id: string): FNFTTransfer | null {
    return changetype<FNFTTransfer | null>(store.get("FNFTTransfer", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get fnft(): string {
    let value = this.get("fnft");
    return value!.toString();
  }

  set fnft(value: string) {
    this.set("fnft", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class FNFTWithdraw extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fnft", Value.fromString(""));
    this.set("withdrawer", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTWithdraw entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFTWithdraw entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFTWithdraw", id.toString(), this);
    }
  }

  static load(id: string): FNFTWithdraw | null {
    return changetype<FNFTWithdraw | null>(store.get("FNFTWithdraw", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fnft(): string {
    let value = this.get("fnft");
    return value!.toString();
  }

  set fnft(value: string) {
    this.set("fnft", Value.fromString(value));
  }

  get withdrawer(): string {
    let value = this.get("withdrawer");
    return value!.toString();
  }

  set withdrawer(value: string) {
    this.set("withdrawer", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class FNFTBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fnft", Value.fromString(""));
    this.set("owner", Value.fromString(""));
    this.set("balance", Value.fromBigInt(BigInt.zero()));
    this.set("lastChange", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTBalance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFTBalance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFTBalance", id.toString(), this);
    }
  }

  static load(id: string): FNFTBalance | null {
    return changetype<FNFTBalance | null>(store.get("FNFTBalance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fnft(): string {
    let value = this.get("fnft");
    return value!.toString();
  }

  set fnft(value: string) {
    this.set("fnft", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get lastChange(): BigInt {
    let value = this.get("lastChange");
    return value!.toBigInt();
  }

  set lastChange(value: BigInt) {
    this.set("lastChange", Value.fromBigInt(value));
  }
}

export class FNFTSplit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fnft", Value.fromString(""));
    this.set("splitter", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save FNFTSplit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFTSplit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFTSplit", id.toString(), this);
    }
  }

  static load(id: string): FNFTSplit | null {
    return changetype<FNFTSplit | null>(store.get("FNFTSplit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fnft(): string {
    let value = this.get("fnft");
    return value!.toString();
  }

  set fnft(value: string) {
    this.set("fnft", Value.fromString(value));
  }

  get splitter(): string {
    let value = this.get("splitter");
    return value!.toString();
  }

  set splitter(value: string) {
    this.set("splitter", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }
}

export class FNFTAdditionalDeposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("fnft", Value.fromString(""));
    this.set("depositor", Value.fromString(""));
    this.set("quantity", Value.fromBigInt(BigInt.zero()));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save FNFTAdditionalDeposit entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save FNFTAdditionalDeposit entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("FNFTAdditionalDeposit", id.toString(), this);
    }
  }

  static load(id: string): FNFTAdditionalDeposit | null {
    return changetype<FNFTAdditionalDeposit | null>(
      store.get("FNFTAdditionalDeposit", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get fnft(): string {
    let value = this.get("fnft");
    return value!.toString();
  }

  set fnft(value: string) {
    this.set("fnft", Value.fromString(value));
  }

  get depositor(): string {
    let value = this.get("depositor");
    return value!.toString();
  }

  set depositor(value: string) {
    this.set("depositor", Value.fromString(value));
  }

  get quantity(): BigInt {
    let value = this.get("quantity");
    return value!.toBigInt();
  }

  set quantity(value: BigInt) {
    this.set("quantity", Value.fromBigInt(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }
}
