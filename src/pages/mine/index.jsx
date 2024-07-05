import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import { EzrButton } from '@ezr/pebble'
import { useLogin } from '@/hooks/useLogin'

import './index.scss'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>建设中...</Text>
    </View>
  )
}
