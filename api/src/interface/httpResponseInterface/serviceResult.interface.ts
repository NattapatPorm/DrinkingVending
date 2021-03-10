export interface IServiceResult {

  setResult(result: Promise<any>): void;

  setMessage(message: String): void;

  setSuccess(success: boolean): void;
}
