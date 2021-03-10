import { AdminRole } from '../enums/admin.enum';

export interface ISignUpDTO {

  username: string;

  password: string;

  role: AdminRole;
}