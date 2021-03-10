import * as fs from 'fs';
import { JwtConstantsModel } from '../interface/jwtConstants.interface';
import { Algorithm } from 'jsonwebtoken';
import 'dotenv/config';

export const jwtConstants: JwtConstantsModel = {
    jwtStrategyType: process.env.JWT_STRATEGY_TYPE,
    jwtPublicKey: fs.readFileSync(process.env.JWT_PUBLIC_KEY),
    jwtPrivateKey: fs.readFileSync(process.env.JWT_PRIVATE_KEY),
    jwtExpireTime: process.env.JWT_EXPIRE_TIME,
    jwtAlgorithm: <Algorithm> process.env.JWT_ALGORITHM,
}
