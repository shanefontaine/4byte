# 4byte

> Look up an Ethereum function signature by the 4 bytes of its hash

[![License](http://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/shanefontaine/4byte/master/LICENSE)
[![NPM version](https://badge.fury.io/js/4byte.svg)](http://badge.fury.io/js/4byte)

## Install

```bash
npm install 4byte
```

## Getting started

```javascript
const fourByte = require('4byte')

const signatures = fourByte('0x51c6590a')
console.log(signatures) // ['addLiquidity(uint256)']
```

## CLI

Install:

```bash
npm install -g 4byte
```

Look up a function signature:

```bash
$ 4byte 0xa9059cbb
transfer(bytes4[9],bytes5[6],int48[11])
many_msg_babbage(bytes1)
transfer(address,uint256)
```

```bash
$ 4byte 0xa9059cbb --format=json
[
  "transfer(bytes4[9],bytes5[6],int48[11])",
  "many_msg_babbage(bytes1)",
  "transfer(address,uint256)"
]
```

## Test

```bash
npm test
```

## License

[MIT](LICENSE)