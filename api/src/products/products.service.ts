import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {ProductRepository} from "./repositories/product.repository";
import {ServiceResultUtil} from "../utils/httpResponseService/serviceResult.util";
import {BuyProductDto} from "./dto/buyProduct.dto";
import {LessThan} from "typeorm";

@Injectable()
export class ProductsService {

    constructor(
        @InjectRepository(ProductRepository)
        private productRepository: ProductRepository,
    ) {}

    getProductByMachineId = async (machineId: number): Promise<ServiceResultUtil> => {

        const data = await this.productRepository.findProductByMachineId(machineId);

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(data);
        serviceResult.setSuccess(true);
        serviceResult.setMessage('Get all product success');

        return serviceResult;
    }

    buyProduct = async (buyProduct: BuyProductDto): Promise<ServiceResultUtil> => {
        const { productId, productNumber } = buyProduct;

        const product = await this.productRepository.findOne({product_id: productId});
        const quantity = product.product_quantity - productNumber;
        await this.productRepository.update(productId, { product_quantity: quantity });

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(`product id : ${productId} total quantity: ${quantity}`);
        serviceResult.setSuccess(true);
        serviceResult.setMessage(`Buy product id : ${productId} success...`);

        return serviceResult;
    }

    findProductByQuantity = async (): Promise<ServiceResultUtil> => {

        const product = await this.productRepository.findProductInfoByQuantity();

        const serviceResult = new ServiceResultUtil();
        serviceResult.setResult(product);
        serviceResult.setSuccess(true);
        serviceResult.setMessage(`Check quantity product success...`);

        return serviceResult;
    }
}
