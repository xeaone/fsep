# FSEP
Is a library that promisifies the native node FS operation and brings extras into the mix. Fsep follows the same naming schemes as fs-extra. Contributions Welcome! Submit a pull request. Fsep has **No Dependency**.


## Features
- Native node.js Fs methods (promisified)
- Only Promises


## TODO
- copy
- ensureLink
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
- emptyDir
- ensureDir
- ensureFile
- ensureFolder
- ensureSymlink
- outputFile
- outputFolder
- readWriteLine
- readFiles
- scaffold


### lift
Lift removed please use the library https://github.com/AlexanderElias/promise-tool.
```


### walk(path, [options])

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
	console.log(error);
});
```


### exist(path)
Checks if a path exists. Returns `true` or `false`. Uses `Fs.existsSync`.

```JavaScript
const Fsep = require('fsep');

Fsep.exist(path).then(function (exist) {
	console.log(exist); // true || false
}).catch(function (error) {
	console.log(error);
});
```


### valid(path)
Checks if a path is valid. Returns `true` or `false`. Uses `Fs.stat`.

```JavaScript
const Fsep = require('fsep');

Fsep.valid(path).then(function (isValid) {
	console.log(isValid); // true || false
}).catch(function (error) {
	console.log(error);
});
```


### outputFolder, mkdirs(path[,mode,cwd])
Creates the path directories if they do not exist. If any of the directories in the path do not exists it will be created otherwise it will be ignored. Accepts a `mode` and `cwd` parameter.
The `cwd` parameter will change the start location of the directory creation, the path can still be relative or absolute.

```JavaScript
const Fsep = require('fsep');

var cwd = process.cwd();
var path = 'exist/not-exists/also-not-exists';

Fsep.outputFolder(path, cwd).then(function () {
	console.log('created non-exists directory');
}).catch(function (error) {
	console.log(error);
});
```

### emptyDir(path, safe)
Deletes the contents of a directory if it exists and is not empty. This is recursive so be careful. Same as `rm -r`.

- `path: String` Path to the direcotry to empty.
- `safe: Boolean` Default is true which throws an error if you try to empty the root of the file system.

```JavaScript
const Fsep = require('fsep');

var path = '/home/username/dirs'; // contains folders and files

Fsep.emptyDir(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
```


### ensureDir(path, [mode || cwd])
Exactly the same as `mkdirs`. If any of the directories in the path do not exists it will be created otherwise it will be ignored.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/dir';

Fsep.ensureDir(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
```


### ensureFile(path, data, [options], [mode || cwd])
Ensures that the file and its directory structure exists. If the file already exists it is **not modified**.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/dirs/and/file.txt';

Fsep.ensureFile(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
```


### ensureSymlink(source, target, type, [mode || cwd])
Ensures that the symlink and its directory structure exists. If the file already exists it is **not modified**.

```JavaScript
const Fsep = require('fsep');
const src = '/existing/folders/file.txt';
const dst = '/non/existing/folders/file.txt';

Fsep.ensureSymlink(source, target).then(function () {
	console.log('symlink created');
}).catch(function (error) {
	console.log(error);
});
```


### outputFile(path, data, [options])
Creates a file and also directories if non existent. Overwrites file if it exists.

```JavaScript
const Fsep = require('fsep');

var path = '/non/existing/path/file.js';
var data = 'hello';

Fsep.outputFile(path, data).then(function () {
	console.log('done');
}).catch(function (error) {
	console.log(error);
});
```


### readWriteLine(options)
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
	console.log(error);
});
```

### readFiles(paths, options)
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
	console.log(error);
});
```

### scaffold(paths, data)
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
	console.log(error);
});
```
