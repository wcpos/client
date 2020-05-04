import React from 'react';
import { Text } from 'react-native';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '@wcpos/common/src/lib/theme';
import { withKnobs } from '@storybook/addon-ondevice-knobs';

import '@storybook/addon-ondevice-knobs/register';
import '@storybook/addon-ondevice-actions/register';

function loadStories() {
	addDecorator((story) => (
		<ThemeProvider theme={defaultTheme}>
			<React.Suspense fallback={<Text>loading ...</Text>}>{story()}</React.Suspense>
		</ThemeProvider>
	));
	addDecorator(withKnobs);

	// Note: the React Native packager resolves all imports at build-time,
	// so it’s not possible to load modules dynamically.
	// https://storybook.js.org/docs/basics/writing-stories/#loading-stories
	require('../../common/src/components/arrow/arrow.stories');
	require('../../common/src/components/avatar/avatar.stories');
	require('../../common/src/components/button/button.stories');
	require('../../common/src/components/checkbox/checkbox.stories');
	require('../../common/src/components/dimmer/dimmer.stories');
	require('../../common/src/components/dropdown/dropdown.stories');
	require('../../common/src/components/error/error.stories');
	require('../../common/src/components/format/format.stories');
	require('../../common/src/components/icon/icon.stories');
	require('../../common/src/components/image/image.stories');
	require('../../common/src/components/input/input.stories');
	require('../../common/src/components/list/list.stories');
	require('../../common/src/components/logo/logo.stories');
	require('../../common/src/components/menu/menu.stories');
	require('../../common/src/components/modal/modal.stories');
	require('../../common/src/components/placeholder/placeholder.stories');
	require('../../common/src/components/popover/popover.stories');
	require('../../common/src/components/segment/segment.stories');
	require('../../common/src/components/select/select.stories');
	require('../../common/src/components/table/table.stories');
	require('../../common/src/components/text/text.stories');
	require('../../common/src/components/toast/toast.stories');
	require('../../common/src/components/tooltip/tooltip.stories');
	require('../../common/src/components/webview/webview.stories');
}

configure(loadStories, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
	asyncStorage:
		// require('@react-native-community/async-storage').default ||
		// require('react-native').AsyncStorage ||
		null,
});
// const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

export default StorybookUIRoot;
