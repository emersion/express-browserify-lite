# express-browserify-lite

Express middleware for browserify-lite.

Usage:
```js
var browserify = require('express-browserify-lite');

app.use('/js/bundle.js', browserify({
	entrySourcePath: __dirname+'/browser.js'
}));
```
