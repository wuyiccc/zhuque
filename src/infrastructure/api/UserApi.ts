import ApiUtils from "@/infrastructure/utils/ApiUtils";
import UserLoginBO from "@/infrastructure/pojo/UserLoginBO";

export default class UserApi {


  public static PREFIX_URL = "/user";

  public static login(userLoginBO: UserLoginBO): Promise<any> {
    return ApiUtils.post(UserApi.PREFIX_URL + "/login", userLoginBO);
  }
}
