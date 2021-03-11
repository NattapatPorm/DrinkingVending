import { Controller, Get, Param, ParseIntPipe, Post, Req, Res } from '@nestjs/common';
import { Response, Request } from 'express';
import { MainProductsService } from "./main-products.service";
import { constantValue } from '../constants/constants';

const { HTTP_STATUS_CODES } = constantValue;

@Controller('mainProducts')
export class MainProductsController {

    constructor(
        private mainProductservice: MainProductsService,
    ) {}

    @Get()
    async getMainProducts(@Res() res: Response) {
        const result = await this.mainProductservice.getAll();
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }
}
