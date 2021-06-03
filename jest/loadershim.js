global.___loader = {
	enqueue: jest.fn(),
};

// setImmediate and clearImmediate has been removed from global
// https://github.com/facebook/jest/issues/11511
global.setImmediate = require('timers').setImmediate;
global.clearImmediate = require('timers').clearImmediate;
