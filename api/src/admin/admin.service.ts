import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AdminRepository } from './repositories/admin.repository';
import { SignUpDto } from './dto/signup.dto';
import { Admin } from './entities/admin.entity';
import { ServiceResultUtil } from '../utils/httpResponseService/serviceResult.util';
import { adminUtil } from './utils/admin.util';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from '../auth/auth.service';
import { AdminLoginLogRepository } from './repositories/adminLoginLog.repository';
import { AdminLogRepository } from './repositories/adminLog.repository';
import { AdminLoginLog } from './entities/admin_login_logs.entity';
import { AdminLog } from './entities/admin_logs.entity';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(AdminRepository)
    private adminRepository: AdminRepository,

    @InjectRepository(AdminLoginLogRepository)
    private adminLoginLogRepository: AdminLoginLogRepository,

    @InjectRepository(AdminLogRepository)
    private adminLogRepository: AdminLogRepository,

    private authService: AuthService,
  ) {}

  signUp = async (signupData: SignUpDto): Promise<ServiceResultUtil> => {

    const { username, password } = signupData;
    const adminSignUp = new Admin();
    adminSignUp.admin_username = username;
    const hashPassword: string = await adminUtil.hashPassword(password);
    adminSignUp.admin_password = hashPassword;
    const serviceResult = new ServiceResultUtil();

    try {

      const adminLog = new AdminLog();
      adminLog.admin = adminSignUp;
      adminLog.log_action = "admin signUp"
      adminLog.log_infomation = JSON.stringify(adminSignUp);

      adminSignUp.adminLogs = [adminLog];
      adminSignUp.save();
      adminLog.save();

      serviceResult.setMessage("Success");
      serviceResult.setSuccess(true);
    } catch (e) {
      serviceResult.setMessage(e.message);
      serviceResult.setSuccess(false);
    }

    return serviceResult;
  }

  signIn = async (sighInData: SigninDto) => {
    const {username, password } = sighInData;
    const admin = await this.adminRepository.findOne({admin_username: username});
    const isAdmin = await adminUtil.validatePassword(password, admin.admin_password);
    const serviceResult = new ServiceResultUtil();

    if (isAdmin) {
      try {
        const accessToken = await this.authService.generateAccessToken(username);
        const adminLoginLog = new AdminLoginLog();
        adminLoginLog.login_time = new Date();
        adminLoginLog.token = accessToken;
        adminLoginLog.admin = admin;
        adminLoginLog.save();
        serviceResult.setResult(accessToken);
        serviceResult.setMessage("Success");
        serviceResult.setSuccess(true);
      } catch (e) {
        serviceResult.setMessage(e.message);
        serviceResult.setSuccess(false);
      }
    } else {
      serviceResult.setMessage("Can not login");
      serviceResult.setSuccess(false);
    }

    return serviceResult;

  }
}
