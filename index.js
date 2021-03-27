const fetch = require('node-fetch')

async function fourByte(hash) {
  if (hash.length !== 10) {
    throw new Error('Expected valid hash');
  }

  const url = 'https://www.4byte.directory/api/v1/signatures/?hex_signature=' + hash;
  const res = await fetch(url)
  const results = (await res.json()).results
  return results.map(res=> res.text_signature)
}

module.exports = fourByte