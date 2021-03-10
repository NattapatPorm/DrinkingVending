import { IsNotEmpty, Length } from 'class-validator';
import { ISignUpDTO } from '../interface/signup.interface';

export class SignUpDto implements ISignUpDTO{

  @IsNotEmpty()
  @Length(4,20)
  username: string;

  @IsNotEmpty()
  @Length(8,20)
  password: string;
}
