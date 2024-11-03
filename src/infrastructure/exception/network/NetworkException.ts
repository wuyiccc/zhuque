
export default class NetworkException extends Error{

  public msg: string;

  constructor(msg: string) {
    super(msg);
  }

}
