import '@testing-library/jest-dom/extend-expect';
// require('@testing-library/jest-dom/extend-expect');

import mockRNDeviceInfo from 'react-native-device-info/jest/react-native-device-info-mock';

jest.mock('react-native-device-info', () => mockRNDeviceInfo);

jest.mock('@sentry/react-native', () => ({
	init: jest.fn(),
}));

// mock database adapter, react-native-sqlite-2 will cause error
jest.mock('@wcpos/common/src/database/adapter');

// beforeAll(() => {});
