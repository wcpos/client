import { AppRegistry } from 'react-native';
/** Required polyfill for the global crypto.getRandomValues */
import 'react-native-get-random-values';
import App from '@wcpos/common/src/app';
// import App from '@wcpos/storybook/src'; // storybook
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
