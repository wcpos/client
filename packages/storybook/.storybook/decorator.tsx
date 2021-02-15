import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { ThemeProvider } from '@wcpos/common/src/hooks/use-theme';

export default function (renderStory) {
	return (
		<React.Suspense fallback={<ActivityIndicator />}>
	    <ThemeProvider>
		    <View style={{ padding: '3em', flexDirection: 'row' }}>{renderStory()}</View>
	    </ThemeProvider>
		</React.Suspense>
	);
}