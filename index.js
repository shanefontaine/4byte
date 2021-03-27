const request = require('request');

function fourByte(hash) {
  if (hash.length !== 10) {
    throw new Error('Expected valid hash');
  }

  const url = 'https://www.4byte.directory/api/v1/signatures/?hex_signature=' + hash;
  return httpGet(url);
}

const httpGet = url => {
  return new Promise((resolve, reject) => {
    request(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        const results = (JSON.parse(body)).results;
        resolve(
          results.map(res=> res.text_signature)
        );
      }
    }).on('error', reject);
  });
};

module.exports = fourByte