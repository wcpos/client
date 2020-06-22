import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
// import { ThemeProvider } from 'styled-components/native';
// import { defaultTheme } from '@wcpos/common/src/lib/theme';
import { ThemeProvider } from '@wcpos/common/src/hooks/use-theme';

// import '@wcpos/common/src/fonts/fonts.css';

// Option defaults
addParameters({
	options: {
		/**
		 * display the top-level grouping as a "root" in the sidebar
		 * @type {Boolean}
		 */
		showRoots: true,
		storySort: (a, b) => {
			const sectionA = a[1].id.split('-')[0];
			const sectionB = b[1].id.split('-')[0];

			return sectionA.localeCompare(sectionB);
		},
		theme: create({
			base: 'light',
			brandTitle: 'WCPOS',
			brandUrl: 'https://wcpos.com',
			// To control appearance:
			// brandImage: 'http://url.of/some.svg',
		}),
		/**
		 * regex for finding the hierarchy separator
		 * @example:
		 *   null - turn off hierarchy
		 *   /\// - split by `/`
		 *   /\./ - split by `.`
		 *   /\/|\./ - split by `/` or `.`
		 * @type {Regex}
		 */
		hierarchySeparator: /\/|\./,
		/**
		 * regex for finding the hierarchy root separator
		 * @example:
		 *   null - turn off multiple hierarchy roots
		 *   /\|/ - split by `|`
		 * @type {Regex}
		 */
		hierarchyRootSeparator: /\|/,
		panelPosition: 'bottom',
	},
});

addDecorator((story) => (
	<React.Suspense fallback={<ActivityIndicator />}>
		<ThemeProvider>
			<View style={{ padding: '3em', flexDirection: 'row' }}>{story()}</View>
		</ThemeProvider>
	</React.Suspense>
));
addDecorator(withKnobs);
addDecorator(withInfo);
