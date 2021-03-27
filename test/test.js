const test = require('tape-async')
const fourByte = require('../')

test('four-byte', async (t) => {
  t.equal((await fourByte('0x51c6590a')).toString(), ([ 'addLiquidity(uint256)' ]).toString());
})
