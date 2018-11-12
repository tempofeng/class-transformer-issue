import {Get, JsonController} from "routing-controllers";
import {TeamTransaction} from "./TeamTransaction";
import {EthAddress} from "./EthAddress";

@JsonController("/transaction")
export class TransactionController {
    @Get("/list")
    async list(): Promise<TeamTransaction[]> {
        return Promise.resolve([TeamTransaction.create("6468a5f1-64d7-4a56-9ba5-e4f66a1d8923",
            new EthAddress("0xea95a7a25506c9F70fB7bC50877C435a609353b2"),
            new EthAddress("0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"))]);
    }
}
