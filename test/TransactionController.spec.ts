import "mocha-typescript/di/typedi"; // this shim is required
import {suite, test, timeout} from "mocha-typescript";
import {RoutingControllerFactory} from "../src/RoutingControllerFactory";
import chaiHttp = require("chai-http");
import chai = require("chai");

@suite
class TransactionControllerSpec {
    constructor(readonly routingControllerFactory: RoutingControllerFactory) {
        chai.should();
        chai.use(chaiHttp);
    }

    @test
    async run() {
        // given an eth account with transactions and update those transactions into DB.
        // when list transactions saved in DB.
        const app = this.routingControllerFactory.app;
        const res = await chai.request(app).get("/transaction/list");
        res.should.have.status(200);
        res.body[0].teamId.should.be.eq("6468a5f1-64d7-4a56-9ba5-e4f66a1d8923");
        res.body[0].from.should.be.eq("0xea95a7a25506c9F70fB7bC50877C435a609353b2");
        res.body[0].to.should.be.eq("0xf3Ad7a80c7deBE37Db5ceE1E3Ed45f31a5629e5e");
    }
}
