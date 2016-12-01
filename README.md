# match-block

> Match multiple code blocks

## Installation

```sh
$ npm install --save match-block
```

## Usage

```js
const match = require('match-block');

match('```foo bar```') // foo bar
```

## API

### match(source, [nested])
Match text between block

**Returns**: `String`
| Parameter | Type    | Description         |
|-----------|---------|---------------------|
| nested    | Boolean | Parse nested blocks |

## License

MIT © [Sean Wilson](https://imsean.me)
