import { Injectable } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { AuthService } from "../auth/auth.service";
import {MainProductRepository} from "./repositories/mainProduct.repository";
import {MainProductLogRepository} from "./repositories/mainProductLog.repository";
import {ServiceResultUtil} from "../utils/httpResponseService/serviceResult.util";

@Injectable()
export class MainProductsService {

    constructor(
        @InjectRepository(MainProductRepository)
        private mainProductRepository: MainProductRepository,

        @InjectRepository(MainProductLogRepository)
        private mainProductLog: MainProductLogRepository,

        private authService: AuthService,
    ) {}

    getAll = async (): Promise<ServiceResultUtil> => {

        const data = await this.mainProductRepository.find();

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(data);
        serviceResult.setSuccess(true);
        serviceResult.setMessage('Get all main products success...');

        return serviceResult;
    }
}
