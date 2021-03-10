import * as bcrypt from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common';

export class adminUtil {

  public static hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    return hashPassword;
  }

  public static validatePassword = async (password: string, adminPassword: string) => {
    try {
      const passwordMatchChecker : boolean = await bcrypt.compare(password, adminPassword);

      return passwordMatchChecker;
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }
}