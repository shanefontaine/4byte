const test = require('tape')
const fourByte = require('../')

test('four-byte', t => {
  t.plan(1)

  t.equal(fourByte('0x51c6590a'), 'addLiquidity(uint256)')
})