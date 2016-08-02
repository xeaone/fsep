# FSEP
Is a library that promisifies all native node FS operation and brings extras into the mix.

Contributions Welcome!
Submit a pull request. Currently Fsep only has one dependency it would be great to keep it that way.


## Features
- Native node.js Fs methods (promisified)
- One dependency (removable in the future)
- Only Promises


## TODO
- copy
- emptyDir
- ensureFile
- ensureDir
- ensureLink
- ensureSymlink
- mkdirs
- move
- outputFile
- outputJson
- readJson
- remove
- writeJson


## API
- walk
- valid


### walk
#### walk(path, [options])  walk(options)

Options:
- path `string` Path to directory
- filters `array` RegExp strings
- relative `boolean` Return paths relative or absolute. Default is `true`
- ignoreDot `boolean` Ignores files beginning with a dot. Default is `false`

```JavaScript
var Fsep = require('fsep');

var options = {
	path: '/home/user/directory',
	filters: ['.DS_Store'],
	relative: true,
	ignoreDot: false
};

Fsep.walk(options).then(function (files) {
	console.log(files);
})
.catch(function (error) {
	throw error;
});
```


### valid
#### valid(path)

Checks if a path is valid/exists, could be any file system object. Returns `true` or `false`.

```JavaScript
var Fsep = require('fsep');

Fsep.valid(path).then(function (isValid) {
	console.log(isValid); // true || false
})
.catch(function (error) {
	throw error;
});
```


## License

Licensed Under MPL 2.0

Copyright (c) 2016 [Alexander Elias](https://github.com/AlexanderElias/)
