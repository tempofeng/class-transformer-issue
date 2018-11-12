import {EthAddress} from "./EthAddress";

export class TeamTransaction2 {
    static create(teamId: string,
                  from: EthAddress,
                  to: EthAddress): TeamTransaction2 {
        return Object.assign(new TeamTransaction2(), {teamId, from, to});
    }

    teamId!: string;
    from!: EthAddress;
    to!: EthAddress;
}
