export class EthAddress {
    static create(address: string) {
        return Object.assign(new EthAddress(), {address});
    }

    readonly address!: string;
}
