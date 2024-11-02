import {View} from '@tarojs/components';
import ZQButton from "@/component/zq-button";

export default function Index() {


  const handleBtnClick = () => {
    console.log('yes amd');
  };

  return (
    <View className='index global-style'>
      <ZQButton type='primary' onBtnClick={handleBtnClick}>Test Button</ZQButton>

      <ZQButton type='default' onBtnClick={handleBtnClick}>Test Button</ZQButton>
    </View>
  );
}
