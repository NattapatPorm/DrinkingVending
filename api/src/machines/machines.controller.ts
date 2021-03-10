import {Controller, Get, Res} from '@nestjs/common';
import { MachinesService } from './machines.service';
import { Response } from 'express';
import { constantValue } from '../constants/constants';

const { HTTP_STATUS_CODES } = constantValue;

@Controller('machines')
export class MachinesController {
    constructor(
        private machineService: MachinesService,
    ) {}

    @Get()
    async getAll(@Res() res: Response) {
        const result = await this.machineService.getAll();
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }
}
