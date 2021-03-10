import { Body, Controller, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';
import { SignUpDto } from './dto/signup.dto';
import { SigninDto } from './dto/signin.dto';
import { constantValue } from '../constants/constants';

const { HTTP_STATUS_CODES } = constantValue;

@Controller('admin')
export class AdminController {
  constructor(
    private adminService: AdminService,
  ) {}

  @Post('signup')
  @UsePipes(ValidationPipe)
  async signup(
    @Body() signupData: SignUpDto,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.adminService.signUp(signupData);

    return res.status(HTTP_STATUS_CODES.OK).send({ result });
  }

  @Post('signin')
  @UsePipes(ValidationPipe)
  async signin(
    @Body() signinData: SigninDto,
    @Res() res: Response,
  ): Promise<Response> {
    const result = await this.adminService.signIn(signinData);

    return res.status(HTTP_STATUS_CODES.OK).send({ result });
  }
}
