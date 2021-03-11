import { EntityRepository, Repository } from "typeorm";
import { Machine } from "../entities/machine.entity";

@EntityRepository(Machine)
export class MachineRepository extends Repository<Machine> {

    findMachineLocation = async (): Promise<Machine[]> => {
        const query = this.createQueryBuilder('machines');

        const machines = await query
            .leftJoinAndSelect("machines.machine_location_id", "locations")
            .getMany();

        return machines;
    }
}
