import {Container, Service} from "typedi";
import {createExpressServer, useContainer} from "routing-controllers";
import {TransactionController} from "./TransactionController";

@Service()
export class RoutingControllerFactory {
    // List of all controllers
    readonly controllers = [TransactionController];
    readonly app: any;

    constructor() {
        // typedi
        useContainer(Container);

        // creates express app, registers all controller routes and returns you express app instance
        this.app = createExpressServer({
            defaults: {
                paramOptions: {
                    // with this option, argument will be required by default
                    required: true,
                },
            },
            classTransformer: true,
            cors: true,
            controllers: this.controllers, // we specify controllers we want to use
        });
    }
}
