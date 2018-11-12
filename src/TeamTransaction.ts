import {Transform, Type} from "class-transformer";
import {EthAddress} from "./EthAddress";

export class TeamTransaction {
    static create(teamId: string,
                  from: EthAddress,
                  to: EthAddress): TeamTransaction {
        return Object.assign(new TeamTransaction(), {teamId, from, to});
    }

    teamId!: string;
    @Type(() => EthAddress)
    @Transform((value) => new EthAddress(value), {toClassOnly: true})
    @Transform((value) => value.address, {toPlainOnly: true})
    from!: EthAddress;
    @Type(() => EthAddress)
    @Transform((value) => new EthAddress(value), {toClassOnly: true})
    @Transform((value) => value.address, {toPlainOnly: true})
    to!: EthAddress;
}
