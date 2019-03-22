import React from 'react';
import { ActivityIndicator } from 'react-native';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'styled-components/native';
import { defaultTheme } from '@wcpos/common/src/lib/theme';
import '@wcpos/common/src/fonts/fonts.css';

const stories = require.context('../stories', true, /\.stories\.(js|jsx|tsx)$/);
const common = require.context('../../common/src/', true, /\.stories\.(js|jsx|tsx)$/);

function loadStories() {
	addDecorator(story => (
		<ThemeProvider theme={defaultTheme}>
			<React.Suspense fallback={<ActivityIndicator />}>{story()}</React.Suspense>
		</ThemeProvider>
	));
	addDecorator(withKnobs);
	addDecorator(withInfo);
	stories.keys().forEach(filename => stories(filename));
	common.keys().forEach(filename => common(filename));
}

configure(loadStories, module);
