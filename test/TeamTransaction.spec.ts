import "mocha-typescript/di/typedi";
import {suite, test} from "mocha-typescript";
import {classToPlain, plainToClass} from "class-transformer";
import {TeamTransaction} from "../src/TeamTransaction";
import chai = require("chai");

@suite
class TeamTransactionSpec {
    constructor() {
        chai.should();
    }

    @test
    async serialize() {
        // given Create an admin who have no teams.
        const txJson = `
{
                "teamId": "6468a5f1-64d7-4a56-9ba5-e4f66a1d8923",
                "from": "0xea95a7a25506c9F70fB7bC50877C435a609353b2",
                "to": "0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"
}`;

        // when convert json to TeamTransaction
        const teamTransaction = plainToClass(TeamTransaction, JSON.parse(txJson) as TeamTransaction);
        teamTransaction.teamId.should.be.eq("6468a5f1-64d7-4a56-9ba5-e4f66a1d8923");
        teamTransaction.from.address.should.be.eq("0xea95a7a25506c9F70fB7bC50877C435a609353b2");
        teamTransaction.to.address.should.be.eq("0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e");

        const value = classToPlain(teamTransaction);
        JSON.stringify(value).should.be.eq(
            `{"teamId":"6468a5f1-64d7-4a56-9ba5-e4f66a1d8923","from":"0xea95a7a25506c9F70fB7bC50877C435a609353b2","to":"0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"}`);
    }

    @test
    async serializeArray() {
        // given Create an admin who have no teams.
        const txJson = `
[
{
                "teamId": "6468a5f1-64d7-4a56-9ba5-e4f66a1d8923",
                "from": "0xea95a7a25506c9F70fB7bC50877C435a609353b2",
                "to": "0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"
},
{
                "teamId": "6468a5f1-64d7-4a56-9ba5-e4f66a1d8923",
                "from": "0xea95a7a25506c9F70fB7bC50877C435a609353b2",
                "to": "0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"
}
]`;

        // when convert json to TeamTransaction
        const teamTransactions = plainToClass(TeamTransaction, JSON.parse(txJson) as TeamTransaction[]);
        const teamTransaction = teamTransactions[0];
        teamTransaction.teamId.should.be.eq("6468a5f1-64d7-4a56-9ba5-e4f66a1d8923");
        teamTransaction.from.address.should.be.eq("0xea95a7a25506c9F70fB7bC50877C435a609353b2");
        teamTransaction.to.address.should.be.eq("0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e");

        const value = classToPlain(teamTransactions);
        JSON.stringify(value).should.be.eq(
            `[{"teamId":"6468a5f1-64d7-4a56-9ba5-e4f66a1d8923","from":"0xea95a7a25506c9F70fB7bC50877C435a609353b2","to":"0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"},{"teamId":"6468a5f1-64d7-4a56-9ba5-e4f66a1d8923","from":"0xea95a7a25506c9F70fB7bC50877C435a609353b2","to":"0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e"}]`);
    }
}
