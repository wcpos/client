import { AppRegistry } from 'react-native-web';
import App from '@wcpos/common/src/app';

import './index.css';

// register the app
AppRegistry.registerComponent('wcpos', () => App);

AppRegistry.runApplication('wcpos', {
	rootTag: document.getElementById('root'),
	initialProps: (window as any).initialProps,
});
