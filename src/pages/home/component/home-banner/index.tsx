import {Image, Swiper, SwiperItem} from '@tarojs/components';
import styles from './index.module.less';

type Props = {
  banners: string[]
}

export default function (props : Props) {



  return <Swiper className={styles.container} indicatorDots indicatorColor='#999' indicatorActiveColor='#ff464e' autoplay interval={3000}>
    {
      props.banners.map((item, index) => {
        return (
          <SwiperItem key={index}>
            <Image className={styles.bannerImg} mode="widthFix" src={item}></Image>
          </SwiperItem>
        );
      })
    }
  </Swiper>;

}
