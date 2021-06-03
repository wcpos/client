// import '@testing-library/jest-native/extend-expect';
import '@testing-library/jest-dom/extend-expect';
import 'react-native-gesture-handler/jestSetup';
import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-reanimated', () => {
	// eslint-disable-next-line global-require
	const Reanimated = require('react-native-reanimated/mock');

	// The mock for `call` immediately calls the callback which is incorrect
	// So we override it with a no-op
	Reanimated.default.call = () => {};

	return Reanimated;
});

// jest.mock('react-native-gesture-handler', () => {
// 	return {
// 		Direction: {},
// 	};
// });

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('@sentry/react-native', () => ({
	init: jest.fn(),
}));

// mock database adapter, react-native-sqlite-2 will cause error
jest.mock('@wcpos/common/src/database/adapter');

// beforeAll(() => {});
