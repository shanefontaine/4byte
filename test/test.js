const test = require('tape')
const fourByte = require('../')

test('hex input', async (t) => {
  t.plan(1)
  const got = await fourByte('0x51c6590a')
  const want = ['addLiquidity(uint256)']
  t.deepEqual(got, want)
})

test('buffer input', async (t) => {
  t.plan(1)
  const got = await fourByte(Buffer.from('51c6590a', 'hex'))
  const want = ['addLiquidity(uint256)']
  t.deepEqual(got, want)
})
