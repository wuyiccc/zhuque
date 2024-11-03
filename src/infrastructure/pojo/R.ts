import ServerBizCode from "../code/ServerBizCode";

class R<T> {
  code?: string;

  msg?: string;

  data?: T;

  public static isOk(r: any): boolean {
    return r.code === ServerBizCode.OK;
  }

  public static isNotLogin(r: any): boolean {
    return r.code === ServerBizCode.ERROR_USER_NOT_LOGIN;
  }
}

export default R;
