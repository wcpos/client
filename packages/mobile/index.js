/**
 * @format
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import { AppRegistry } from 'react-native';
import App from '@wcpos/common/src/app';
// import App from '@wcpos/storybook/src'; // storybook
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
