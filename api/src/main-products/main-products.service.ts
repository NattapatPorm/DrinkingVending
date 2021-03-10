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
        const data = [
            {
                mainproduct_id: 1,
                mainproduct_name: 'Milk tea',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2020/03/31/17/42/ice-coffee-4988704_960_720.jpg',
            },
            {
                mainproduct_id: 2,
                mainproduct_name: 'Grape juice',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2019/11/04/14/50/beverage-4601340_960_720.jpg',
            },
            {
                mainproduct_id: 3,
                mainproduct_name: 'Orange juice',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2020/07/15/15/27/beverage-5408040_960_720.jpg',
            },
            {
                mainproduct_id: 4,
                mainproduct_name: 'Carrot juice',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2016/08/26/21/16/carrot-juice-1623157_960_720.jpg',
            },
            {
                mainproduct_id: 5,
                mainproduct_name: 'Raspberry juice',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2018/02/23/19/23/raspberry-3176371_960_720.jpg',
            },
            {
                mainproduct_id: 6,
                mainproduct_name: 'Lemon juice',
                mainproduct_image: 'https://cdn.pixabay.com/photo/2016/12/19/12/08/ginger-1918107_960_720.jpg',
            }
        ]

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(data);
        serviceResult.setSuccess(true);
        serviceResult.setMessage('Get all main products success...');

        return serviceResult;
    }
}
