

# FSEP
Is a library that promisifies the native node FS operation and brings extras into the mix. Fsep follows the same naming schemes as fs-extra. Contributions Welcome! Submit a pull request. Fsep has **One Dependency**.


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
- exist

- mkdirs

- emptyFolder

- outputFile
- outputFolder

- ensureFile
- ensureFolder
- ensureSymlink

- scaffold
- readFiles
- readWriteLine


### walk(path, [options])
- `options: Object`
	- `path: String` Path to directory
	- `filters: Array` RegExp strings
	- `relative: Boolean` Return paths relative or absolute. Default is `false`
	- `ignoreDot: Boolean` Ignores files beginning with a dot. Default is `true`

```js
const Fsep = require('fsep');
const path = '/home/user/directory';
const options = {
	relative: false,
	ignoreDot: true,
	filters: ['.DS_Store']
};

Fsep.walk(path, options).then(function (files) {
	console.log(files);
}).catch(function (error) {
	console.error(error);
});
```

### exist(path)
Checks if a path exists. Returns `true` or `false`. Uses `Fs.stat`.

```js
const Fsep = require('fsep');

Fsep.exist(path).then(function (exist) {
	console.log(exist); // true || false
}).catch(function (error) {
	console.error(error);
});
```

### mkdirs(path [,mode])
Creates the path folders if they do not exist. Accepts a `mode` parameter.

```js
const Fsep = require('fsep');
const path = '/non/existing/dir';

Fsep.mkdirs(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### outputFile(path, data, [options])
Creates a file and also directories if non existent. Overwrites file if it exists.
```js
const Fsep = require('fsep');

var path = '/non/existing/path/file.js';
var data = 'hello';

Fsep.outputFile(path, data).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### outputFolder(path [,mode, cwd])
Creates folders in path if they do not exist.
```js
const Fsep = require('fsep');
const path = '/non/existing/dir';

Fsep.outputFolder(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### ensureFolder(path, [,mode, cwd])
Creates folders in path if they do not exist.
```js
const Fsep = require('fsep');
const path = '/non/existing/dir';

Fsep.ensureFolder(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### ensureFile(path, data, [options], [mode || cwd])
Ensures that the file and its directory structure exists. If the file already exists it is **not modified**.
```js
const Fsep = require('fsep');

var path = '/non/existing/dirs/and/file.txt';

Fsep.ensureFile(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### ensureSymlink(source, target, type, [mode || cwd])
Ensures that the symlink and its directory structure exists. If the file already exists it is **not modified**.
```js
const Fsep = require('fsep');
const src = '/existing/folders/file.txt';
const dst = '/non/existing/folders/file.txt';

Fsep.ensureSymlink(source, target).then(function () {
	console.log('symlink created');
}).catch(function (error) {
	console.error(error);
});
```

### emptyFolder(path, safe)
Deletes the contents of a directory if it exists and is not empty. This is recursive so be careful. Same as `rm -r`.
- `path: String` Path to the direcotry to empty.
- `safe: Boolean` Default is true which throws an error if you try to empty the root of the file system.
```js
const Fsep = require('fsep');

var path = '/home/username/dirs'; // contains folders and files

Fsep.emptyFolder(path).then(function () {
	console.log('done');
}).catch(function (error) {
	console.error(error);
});
```

### scaffold(path, data)
Requires a path and an object or array. Makes files and folders based on object or array. End points are assumed to be file names.
```js
const Fsep = require('fsep');

const data = {
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
	console.error(error);
});
```

### readFiles(paths, options)
Reads an array of files asynchronously. The result is an array of files.

```js
const Fsep = require('fsep');

var paths = [
	'/one.txt',
	'two.txt'
];

Fsep.readFiles(paths).then(function (files) {
	console.log(files);
}).catch(function (error) {
	console.error(error);
});
```

### readWriteLine(options)
Reads and writes a file line by line. The `line` function allows line manipulation.

```js
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
	console.error(error);
});
```

## Authors
[AlexanderElias](https://github.com/AlexanderElias)

## License
[Why You Should Choose MPL-2.0](http://veldstra.org/2016/12/09/you-should-choose-mpl2-for-your-opensource-project.html)
This project is licensed under the MPL-2.0 License
