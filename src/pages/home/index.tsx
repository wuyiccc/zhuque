import {View} from '@tarojs/components';
import {memo} from 'react';
import ZQButton from '@/component/zq-button';
import UserApi from '@/infrastructure/api/UserApi';
import UserLoginBO from '@/infrastructure/pojo/bo/UserLoginBO';
import NetworkException from '@/infrastructure/exception/network/NetworkException';
import CustomException from '@/infrastructure/exception/custom/CustomException';

const Home = memo(function () {

  const onLogin = async () => {

    const userLoginBO = new UserLoginBO();
    userLoginBO.username = 'admin';
    userLoginBO.password = '123';
    try {
      const bo = await UserApi.login(userLoginBO);
      console.log(bo);
    } catch (error) {
      if (error instanceof NetworkException) {
        console.log(error.message);
      } else if (error instanceof CustomException) {
        console.log(error.message);
      }
    }
  };

  return <View>
    <ZQButton type='blue' onBtnClick={onLogin}>request测试</ZQButton>
  </View>;
});

export default Home;
