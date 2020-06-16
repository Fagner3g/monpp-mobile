import { AppRegistry } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'

console.disableYellowBox = true

const STORYBOOK_START = false

const App = STORYBOOK_START
  ? require('./storybook').default
  : require('./src').default

AppRegistry.registerComponent(appName, () => App)
