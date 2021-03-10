import { ISigninDTO } from '../interface/signin.interface';
import { IsNotEmpty, Length } from 'class-validator';

export class SigninDto implements ISigninDTO{

  @IsNotEmpty()
  @Length(4,20)
  username: string;

  @IsNotEmpty()
  @Length(8,20)
  password: string;
}