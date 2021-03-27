const meow = require('meow')
const fourByte = require('.')

const cli = meow(`
    Usage
      $ four-byte <hash-of-function-sig>

 git@github.com:shanefontaine/four-byte.git   Examples
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
  process.stdin.on('data', (buf) => {
    content += buf.toString()
  })
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

function run() {
  if (!hash) {
    console.log('Hash is required')
    process.exit(1)
  }

  console.log(fourByte(hash))
  process.exit(0)
}