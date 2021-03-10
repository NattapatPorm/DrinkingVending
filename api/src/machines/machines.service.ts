import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {MachineRepository} from "./repositories/machine.repository";
import {ServiceResultUtil} from "../utils/httpResponseService/serviceResult.util";

@Injectable()
export class MachinesService {
    constructor(
        @InjectRepository(MachineRepository)
        private machineRepository: MachineRepository,
    ) {}

    getAll = async (): Promise<ServiceResultUtil> => {
        const data = await this.machineRepository.findMachineLocation();

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(data);
        serviceResult.setSuccess(true);
        serviceResult.setMessage('Get all machine with location success...');

        return serviceResult;
    }
}
