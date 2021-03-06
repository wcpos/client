import '@testing-library/jest-dom/extend-expect';
// require('@testing-library/jest-dom/extend-expect');

// mock database adapter, react-native-sqlite-2 will cause error
jest.mock('@wcpos/common/src/database/adapter');

// beforeAll(() => {});
