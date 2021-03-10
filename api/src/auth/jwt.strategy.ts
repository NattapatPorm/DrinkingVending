import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { jwtConstants } from './constants/jwt.constant';
import { Admin } from '../admin/entities/admin.entity';
import { JwtPayloadModel } from './interface/jwtPayloadModel.interface';


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(Admin)
    private adminRepository: Repository<Admin>,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.jwtPublicKey,
      algorithms: [jwtConstants.jwtAlgorithm],
    });
  }

  validate = async (payload: JwtPayloadModel): Promise<Object> => {
    const { username } = payload;
    const admin = await this.adminRepository.findOne({admin_username: username});

    if (!admin) {
      throw new UnauthorizedException();
    }

    return admin;
  }
}
