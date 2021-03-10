import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from '../admin/entities/admin.entity';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { jwtConstants } from './constants/jwt.constant';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModule.forFeature([Admin]),
    PassportModule.register({defaultStrategy: jwtConstants.jwtStrategyType}),
    JwtModule.register({
      privateKey: jwtConstants.jwtPrivateKey,
      publicKey: jwtConstants.jwtPublicKey,
      signOptions: {
        expiresIn: jwtConstants.jwtExpireTime,
        algorithm: jwtConstants.jwtAlgorithm,
      },
    })
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, PassportModule],
})
export class AuthModule {}
