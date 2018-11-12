export class EthAddress {
    readonly address: string;

    constructor(address: string) {
        if (address.length !== 42) {
            throw new Error("Incorrect address format");
        }
        this.address = address;
    }
}
