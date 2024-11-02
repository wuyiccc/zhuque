import {Text, View} from '@tarojs/components';
import StatusDB from "@/infrastructure/status/StatusDB";
import ZQButton from "@/component/zq-button";

export default function Zustand() {


  const search = StatusDB.db((state) => state.search)
  const setSearch = StatusDB.db((state) => state.setSearch)


  const onClick = () => {

    setSearch(Date.now().toString())
  }

  return (
    <View className='zustand'>
      <Text>zustand: {search}</Text>
      <ZQButton type='blue' onBtnClick={onClick}>searchTime</ZQButton>
    </View>
  );
}
