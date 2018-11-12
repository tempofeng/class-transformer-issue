import {Get, JsonController} from "routing-controllers";
import {Currency, EthAddress, TeamTransaction, TransactionType} from "./TeamTransaction";

@JsonController("/transaction")
export class TransactionController {
    @Get("/list")
    async list(): Promise<TeamTransaction[]> {
        return Promise.resolve([TeamTransaction.create("6468a5f1-64d7-4a56-9ba5-e4f66a1d8923",
            "0xf888e0acc8329bc6063f48b1c42d71c463de6b36aa551ea6b73a73677d3ee218",
            1871928,
            new Date("23/25/2014"),
            new EthAddress("0xea95a7a25506c9F70fB7bC50877C435a609353b2"),
            new EthAddress("0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"),
            "100000000000000000",
            Currency.ETH,
            "420000000000000",
            Currency.ETH,
            TransactionType.SEND)]);
    }
}
