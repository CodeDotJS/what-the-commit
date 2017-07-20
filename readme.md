<h1 align="center">
	<br>
	<img width="280px" src="https://raw.githubusercontent.com/rishigiridotcom/rishigiri.com/ff6404547af6980ada66419e144c8bb2174db2b7/github/what-the-commit.png">
	<br>
</h1>

> A random commit message generator.

[![Build Status](https://travis-ci.org/CodeDotJS/what-the-commit.svg?branch=master)](https://travis-ci.org/CodeDotJS/what-the-commit) [![Build Status](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)]()

## Install

```
$ npm install --save what-the-commit
```

## Usage

```js
const wtf = require('what-the-commit');

wtf().then(commit => {
  console.log(commit);
  // => Just committing so I can go home
});

wtf().then(commit => {
  console.log(commit);
  // => commented out failing tests
})
```

## API

-  __`wtf()`__ `:` `Return promise for random commit messages`

## Related

- __[`wtfcommits`](https://github.com/CodeDotJS/wtfcommits)__ `:` `Generate shitty commit messages from the command line`

## License

MIT &copy; [Rishi Giri](http://rishigiri.ml)
