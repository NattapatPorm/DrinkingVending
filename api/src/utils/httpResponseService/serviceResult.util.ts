import { IServiceResult } from '../../interface/httpResponseInterface/serviceResult.interface';

export class ServiceResultUtil implements IServiceResult{

  private result: Promise<any> | any;

  private message: String;

  private success: boolean;

  public setResult(result: Promise<any>| any): void {
    this.result = result;
  }

  public setMessage(message: String): void {
    this.message = message;
  }

  public setSuccess(success: boolean): void {
    this.success = success;
  }

}
