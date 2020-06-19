import "angular";
import "angular-mocks";

// https://webpack.js.org/guides/dependency-management/#requirecontext
// all files in the current and descending folders ending with `.test.js`
const testsContext = require.context(".", true, /\.(test|spec)\.js$/);
testsContext.keys().forEach(testsContext);