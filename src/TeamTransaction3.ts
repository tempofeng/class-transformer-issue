import {EthAddress} from "./EthAddress";
import {Type} from "class-transformer";

export class TeamTransaction3 {
    static create(teamId: string,
                  addresses: EthAddress[]): TeamTransaction3 {
        return Object.assign(new TeamTransaction3(), {addresses});
    }

    teamId!: string;
    @Type(() => EthAddress)
    addresses!: EthAddress[];
}
