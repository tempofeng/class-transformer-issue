import {Transform, Type} from "class-transformer";

export class EthAddress {
    readonly address: string;

    constructor(address: string) {
        if (address.length !== 42) {
            throw new Error("Incorrect address format");
        }
        this.address = address;
    }
}

export enum Currency {
    ETH = "ETH",
}

export enum TransactionType {
    SEND = "Send",
    RECEIVE = "Receive",
}

export class TeamTransaction {
    static create(teamId: string,
                  hash: string,
                  blockNumber: number,
                  timeStamp: Date,
                  from: EthAddress,
                  to: EthAddress,
                  value: string,
                  currency: Currency,
                  fee: string,
                  feeCurrency: Currency,
                  type: TransactionType): TeamTransaction {
        return Object.assign(new TeamTransaction(),
            {teamId, hash, blockNumber, timeStamp, from, to, value, currency, fee, feeCurrency, type});
    }

    teamId!: string;
    hash!: string;
    blockNumber!: number;
    @Type(() => Date)
    timeStamp!: Date;
    @Type(() => EthAddress)
    @Transform((value) => new EthAddress(value), {toClassOnly: true})
    @Transform((value) => value.address, {toPlainOnly: true})
    from!: EthAddress;
    @Type(() => EthAddress)
    @Transform((value) => new EthAddress(value), {toClassOnly: true})
    @Transform((value) => value.address, {toPlainOnly: true})
    to!: EthAddress;
    value!: string;
    currency!: Currency;
    fee!: string;
    feeCurrency!: Currency;
    type!: TransactionType;
}
