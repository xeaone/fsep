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


### walk
#### walk(path, [options])  walk(options)

Options:
- path `string` Path to directory
- filters `array` RegExp strings
- ignoreDot `boolean` ignore files beginning with a dot default is `false`

```JavaScript
var Fsep = require('fsep');

var options = {
	path: '/home/user/directory',
	filters: ['.DS_Store'],
	ignoreDot: true
};

Fsep.walk(options).then(function (items) {
	console.log(items);
});
```


## License

Licensed Under MPL 2.0

Copyright (c) 2016 [Alexander Elias](https://github.com/AlexanderElias/)
