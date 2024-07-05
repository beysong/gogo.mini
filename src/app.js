
import Taro, { useLaunch } from '@tarojs/taro'
import './app.scss'
import { AuthProvider } from './utils/authContext'

function App({ children }) {

  useLaunch(() => {
    console.log('App launched.')
  })

  // children 是将要会渲染的页面
  return <AuthProvider>{children}</AuthProvider>
}

export default App
