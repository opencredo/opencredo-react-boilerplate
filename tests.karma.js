// require all `tests/**/*.spec.js`
const context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
