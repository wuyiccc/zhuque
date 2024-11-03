import R from '../../pojo/R';

class CustomException extends Error {
  public data: R<any>;

  constructor(message: string, msgData: R<any>) {
    super(message);
    this.data = msgData;
  }
}

export default CustomException;
