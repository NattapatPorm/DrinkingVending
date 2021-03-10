import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { JwtPayloadModel } from './interface/jwtPayloadModel.interface';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
  ) {}

  generateAccessToken = async (username: string): Promise<string> => {
    const payload: JwtPayloadModel = { username };

    try {
      const accessToken = this.jwtService.sign(payload);

      return accessToken;
    } catch (e) {
      throw new Error(e);
    }
  }
}
