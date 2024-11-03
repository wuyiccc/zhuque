import {WebView} from '@tarojs/components';
import {useLoad} from '@tarojs/taro';
import {useState} from 'react';

const Detail = function () {

  const [link, setLink] = useState<string>();

  useLoad((option) => {

    setLink(option.link);
  });

  return <WebView src={link!}></WebView>;
};

export default Detail;
