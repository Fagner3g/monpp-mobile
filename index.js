import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'

console.disableYellowBox = true

const STORYBOOK_START = true

const App = STORYBOOK_START
  ? require('./storybook').default
  : require('./src/App').default

AppRegistry.registerComponent(appName, () => App)
