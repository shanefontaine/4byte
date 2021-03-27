const fetch = require('node-fetch')

async function fourByte (hash) {
  if (!hash) {
    throw new Error('signature hash is required')
  }
  if (!Buffer.isBuffer(hash)) {
    hash = hash.replace(/^0x/, '')
    hash = Buffer.from(hash, 'hex')
  }
  if (hash.byteLength !== 4) {
    throw new Error('Hash size must be 4 bytes')
  }

  const url = `https://www.4byte.directory/api/v1/signatures/?hex_signature=0x${hash.toString('hex')}`
  const res = await fetch(url)
  const results = (await res.json()).results
  return results.map(res => res.text_signature)
}

module.exports = fourByte
