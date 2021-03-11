import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, Res, UsePipes, ValidationPipe} from '@nestjs/common';
import { ProductsService } from "./products.service";
import { Response, Request } from 'express';
import { constantValue } from '../constants/constants';
import {BuyProductDto} from "./dto/buyProduct.dto";

const { HTTP_STATUS_CODES } = constantValue;

@Controller('products')
export class ProductsController {

    constructor(
        private productsService: ProductsService,
    ) {}

    @Get('/machine/:machineId')
    async getProducts(
        @Res() res: Response,
        @Param('machineId', ParseIntPipe) machineId: number,
    ) {
        const result = await this.productsService.getProductByMachineId(machineId);
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }

    @Put('/buyProduct')
    @UsePipes(ValidationPipe)
    async buyProduct(
        @Res() res: Response,
        @Body() buyProduct: BuyProductDto,
    ) {
        const result = await this.productsService.buyProduct(buyProduct);
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }

    @Get('/findByQuantiy')
    async findByQuantiy(@Res() res: Response) {
        const result = await this.productsService.findProductByQuantity();
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }
}
