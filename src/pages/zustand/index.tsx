import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';

export default function Zustand() {

  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='zustand'>
      <Text>Hello world!</Text>
    </View>
  );
}
