import { Algorithm } from 'jsonwebtoken'

export interface JwtConstantsModel {
  jwtStrategyType: string,
  jwtPublicKey: string | Buffer,
  jwtPrivateKey: string | Buffer,
  jwtExpireTime: string,
  jwtAlgorithm: Algorithm,
}