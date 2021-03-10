import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {LocationRepository} from "./repositories/location.repository";
import {ServiceResultUtil} from "../utils/httpResponseService/serviceResult.util";

@Injectable()
export class LocationsService {
    constructor(
        @InjectRepository(LocationRepository)
        private locationRepository: LocationRepository,
    ) {}

    getAll = async (): Promise<ServiceResultUtil> => {
        const data = await this.locationRepository.find();

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(data);
        serviceResult.setSuccess(true);
        serviceResult.setMessage('Get all location success...');
        return serviceResult;
    }
}
