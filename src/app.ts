import "reflect-metadata"; // this shim is required
import "./logging/Log4jsConfig"; // this import is required
import {Container} from "typedi";
import {RoutingControllerFactory} from "./RoutingControllerFactory";

const routingControllerFactory = Container.get(RoutingControllerFactory);
routingControllerFactory.app.listen(3000);
