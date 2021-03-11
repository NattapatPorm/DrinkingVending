import {Controller, Get, Res} from '@nestjs/common';
import {LocationsService} from "./locations.service";
import { Response } from 'express';
import { constantValue } from '../constants/constants';

const { HTTP_STATUS_CODES } = constantValue;

@Controller('locations')
export class LocationsController {
    constructor(
        private locationsService: LocationsService,
    ) {}

    @Get()
    async getAll(@Res() res: Response) {
        const result = await this.locationsService.getAll();
        res.status(HTTP_STATUS_CODES.OK).send(result);
    }
}
