const test = require('tape-async')
const fourByte = require('../')

test('four-byte', async (t) => {
  const res = await fourByte('0x51c6590a');
  t.equal(res, '[addLiquidity(uint256)]');
})
