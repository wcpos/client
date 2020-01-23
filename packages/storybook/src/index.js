import React from 'react';
import { getStorybookUI, configure, addDecorator } from '@storybook/react-native';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '@wcpos/common/src/lib/theme';

import '@storybook/addon-ondevice-knobs/register';
import '@storybook/addon-ondevice-actions/register';

// const stories = require.context('../stories', true, /\.stories\.(js|jsx|tsx)$/);
// const common = require.context('../../common/src/', true, /\.stories\.(js|jsx|tsx)$/);

function loadStories() {
	addDecorator(story => <ThemeProvider theme={defaultTheme}>{story()}</ThemeProvider>);
	// addDecorator(withKnobs);
	// addDecorator(withInfo);
	// stories.keys().forEach(filename => stories(filename));
	// common.keys().forEach(filename => common(filename));
	require('../../common/src/components/text/text.native.stories');
	// require('../../common/src/components/text/text.stories');
}

configure(loadStories, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});
// const StorybookUIRoot = getStorybookUI({ port: 7007, onDeviceUI: true });

export default StorybookUIRoot;
