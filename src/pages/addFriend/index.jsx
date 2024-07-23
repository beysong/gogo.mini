import { View, Text, Image } from '@tarojs/components'
import { useEffect, useState } from 'react'
import Taro, { useLoad, useRouter } from '@tarojs/taro'
import useSWR from 'swr'
import { useLogin } from '@/hooks/useLogin'
import { getRule } from './api'

// import img1 from './images/MASK-01.png'
// import img2 from './images/MASK-02.png'
// import img3 from './images/MASK-03.png'
// import imgQrCode from './images/qrcode.jpg'


import './index.scss'

const defaultImg1 = 'https://assets-img.ezrpro.com/taro/mobile/addFriend-MASK-01.png';
const defaultImg2 = 'https://assets-img.ezrpro.com/taro/mobile/addFriend-MASK-02.png';
const defaultImg3 = 'https://assets-img.ezrpro.com/taro/mobile/addFriend-MASK-03.png';
const defaultQrcode = 'https://assets-img.ezrpro.com/taro/mobile/addFriend-qrcode.png';


export default function Index() {
  const router = useRouter()
  const [pageData, setPageData] = useState();

  useLoad(() => {
    // console.log('Page loaded.', router, isLoading, data)
    const { JDMerchantId, JdOrderId } = router.params;
    // const JDMerchantId = 50001;
    if (!JDMerchantId || !JdOrderId) {
      // Taro.showToast({
      //   title: 'JDMerchantId或JdOrderId参数为空',
      //   icon: 'none',
      //   duration: 2000
      // });
      return;
    }
    getRule({ JDMerchantId, JdOrderId }).then(({ Result }) => {
      console.log('res', Result)
      setPageData(Result)
      Result?.PageName && Taro.setNavigationBarTitle({
        title: Result?.PageName
      })
    })
  })

  if (!router.params.JDMerchantId) {
    return <View className='index'>
      <View className='imgWrap'>
        <Image src={defaultImg1} mode='widthFix' />
      </View>
      <View className='imgWrap'>
        <Image src={defaultImg2} mode='widthFix' />
        <View className='qrCode'>
          <View><Image showMenuByLongpress src={defaultQrcode} mode='widthFix' /></View>
          <View className='codeDesc'>长按二维码  加企微好友</View>
        </View>
      </View>
      <View className='imgWrap'>
        <Image src={defaultImg3} mode='widthFix' />
      </View>
    </View>
  }

  return (
    <View className='index'>
      {
        pageData?.BgImg &&
        <View className='imgWrap'>
          <Image src={pageData?.BgImg} mode='widthFix' />
        </View>
      }
      <View className='imgWrap'>
        <Image src={pageData?.BgImg1} mode='widthFix' />
        <View className='qrCode'>
          <View><Image showMenuByLongpress src={pageData?.WxWorkUserQrCode} mode='widthFix' /></View>
          <View className='codeDesc'>{pageData?.TipContent}</View>
        </View>
      </View>
      <View className='imgWrap'>
        <Image src={pageData?.BgImg2} mode='widthFix' />
      </View>
    </View>
  )
}
