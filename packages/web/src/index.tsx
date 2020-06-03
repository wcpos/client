import { AppRegistry } from 'react-native-web';
import App from '@wcpos/common/src/app';

import './index.css';
import '@wcpos/common/src/fonts/fonts.css';

// register the app
AppRegistry.registerComponent('wcpos', () => App);

AppRegistry.runApplication('wcpos', {
	rootTag: document.getElementById('root'),
});
