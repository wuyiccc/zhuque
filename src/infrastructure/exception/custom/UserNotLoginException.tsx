import CustomException from './CustomException';

class UserNotLoginException extends CustomException {

  constructor(message: string, dataMsg: any) {
    super(message, dataMsg);
  }
}

export default UserNotLoginException;
