const meow = require('meow')
const fourByte = require('.')

const cli = meow(`
    Usage
      $ four-byte <hash-of-function-sig>

    Examples
      $ four-byte 0x51c6590a
      addLiquidity(uint256)
`, {
  flags: {}
})

let hash = cli.input[0]

if (process.stdin) {
  process.stdin.setEncoding('utf8')
  process.stdin.resume()
  let content = ''
  setTimeout(() => {
    content = content.trim()

    if (content) {
      hash = content
    }

    run()
  }, 10)
} else {
  run()
}

async function run() {
  if (!hash) {
    console.log('Hash is required')
    process.exit(1)
  }

  if (hash.length !== 10) {
    console.log('Hash must be 10 characters')
    process.exit(1)
  }

  console.log(await fourByte(hash.toLowerCase()))
  process.exit(0)
}