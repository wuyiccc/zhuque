import { View, Text } from '@tarojs/components';
import { useLoad } from '@tarojs/taro';

export default function Cart() {

  useLoad(() => {
    console.log('Page loaded.');
  });

  return (
    <View className='category'>
      <Text>Hello world!</Text>
    </View>
  );
}
