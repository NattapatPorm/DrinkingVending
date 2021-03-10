import { EntityRepository, Repository } from "typeorm";
import { MainProductLog } from "../entities/mainProduct_logs.entity";

@EntityRepository(MainProductLog)
export class MainProductLogRepository extends Repository<MainProductLog> {}
