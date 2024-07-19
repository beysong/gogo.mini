import { View, Text } from '@tarojs/components'
import Taro, { useLoad } from '@tarojs/taro'
import useSWR, { SWRConfig } from 'swr'
import { EzrButton } from '@ezr/pebble'
import { useLogin } from '@/hooks/useLogin'
import { useAuth } from '@/utils/authContext'

import './index.scss'

export default function Index() {

  const { userInfo, loading } = useAuth()
  const wxLogin = useLogin()

  useLoad(() => {
    console.log('Page loaded.')
    Taro.redirectTo({ url: '/pages/addFriend/index' })
  })

  console.log('Page render.', loading)
  return (
    <View className='index'>
      <Text>首页建设中...</Text>
      {/* <EzrButton onClick={wxLogin} type='primary'>按钮</EzrButton> */}
    </View>
  )
}
