# FSEP
Is a library that promisifies all native node FS operation and brings extras into the mix. Fsep follows the same naming schemes as fs-extra.

Contributions Welcome!
Submit a pull request. Fsep only has **one dependency**.


## Features
- Native node.js Fs methods (promisified)
- One dependency (removable in the future - promises)
- Only Promises


## TODO
- copy
- emptyDir
- ensureLink
- ensureSymlink
- move
- outputJson
- readJson
- remove
- writeJson


## API
- walk
- valid
- exist
- mkdirs
- ensureDir
- ensureFile
- outputFile
- readWriteLine
- readFiles
- scaffold


### walk
#### walk(path, [options])  walk(options)

Options:
- path `string` Path to directory
- filters `array` RegExp strings
- relative `boolean` Return paths relative or absolute. Default is `true`
- ignoreDot `boolean` Ignores files beginning with a dot. Default is `false`

```JavaScript
const Fsep = require('fsep');

var options = {
	path: '/home/user/directory',
	filters: ['.DS_Store'],
	relative: true,
	ignoreDot: false
};

Fsep.walk(options).then(function (files) {
	console.log(files);
}).catch(function (error) {
	throw error;
});
```


### exist
#### exist(path)
Checks if a path exists. Returns `true` or `false`. Uses `Fs.existsSync`.

```JavaScript
const Fsep = require('fsep');

Fsep.exist(path).then(function (exist) {
	console.log(exist); // true || false
}).catch(function (error) {
	throw error;
});
```


### valid
#### valid(path)
Checks if a path is valid. Returns `true` or `false`. Uses `Fs.stat`.

```JavaScript
const Fsep = require('fsep');

Fsep.valid(path).then(function (isValid) {
	console.log(isValid); // true || false
}).catch(function (error) {
	throw error;
});
```


### mkdirs
#### mkdirs(path, [mode || cwd])
Creates the path directories if they do not exist. If any of the directories in the path do not exists it will be created otherwise it will be ignored. Accepts a `mode` and `cwd` parameter.
The `cwd` parameter will change the start location of the directory creation, the path can still be relative or absolute.

```JavaScript
const Fsep = require('fsep');

var cwd = '/exists'; // change the start to 'also-exists'
var path = '/exists/also-exists/non-exists';

Fsep.mkdirs(path, cwd).then(function () {
	console.log('created non-exists directory');
}).catch(function (error) {
	throw error;
});
```

### ensureDir ###
#### ensureDir(path) ####
Exactly the same as `mkdirs`. If any of the directories in the path do not exists it will be created otherwise it will be ignored.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/dir';

Fsep.ensureDir(path).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
```


### ensureFile ###
#### ensureFile(path, data, [options]) ####
Ensures that the file and its directory structure exists. If the file already exists it is **not modified**.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/dirs/and/file.txt';

Fsep.ensureFile(path).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
```


### outputFile ###
#### outputFile(path, data, [options]) ####
Creates a file and also directories if non existent. Overwrites file if it exists.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/path/file.js';
var data = 'hello';

Fsep.outputFile(path, data).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
```


### readWriteLine ###
#### readWriteLine(options) ####
Reads and writes a file line by line. The `line` function allows line manipulation.

```JavaScript
const Fsep = require('fsep');

var options = {
	read: { // node stream options
		path: './rw/one.txt'
	},
	write: { // node stream options
		path: './rw/two.txt',
		flags: 'a'

	},
	line: function (line) {
		return line.toUpperCase();
	}
};

Fsep.readWriteLine(options).then(function () {
	console.log('done');
}).catch(function (error) {
	throw error;
});
```

### readFiles ###
#### readFiles(paths, options) ####
Reads an array of files asynchronously. The result is an array of files.

```JavaScript
const Fsep = require('fsep');

var paths = [
	'/one.txt',
	'two.txt'
];

Fsep.readFiles(paths).then(function (files) {
	console.log(files);
}).catch(function (error) {
	throw error;
});
```

### scaffold ###
#### scaffold(paths, data) ####
Requires a path and an object or array. Makes files and folders based on object or array. End points are assumed to be file names.

```JavaScript
const Fsep = require('fsep');

var data = {
	one: 'one.txt',
	two: 'two.txt',
	array: [
		'three.txt',
		'four.txt'
	]
};

Fsep.scaffold(path, data).then(function () {
	console.log('done');
	/* output
		one
			one.txt
		two
			two.txt
		array
			three.txt
			four.txt
	*/
}).catch(function (error) {
	throw error;
});
```
