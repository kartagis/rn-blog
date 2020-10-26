import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Index from './src/screens/Index'

const navigator = createStackNavigator({
  Index: Index,
}, {
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Blog'
  }
})

export default createAppContainer(navigator)