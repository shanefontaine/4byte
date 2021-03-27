const meow = require('meow')
const fourByte = require('.')

const cli = meow(`
    Usage
      $ 4byte <hash-of-function-sig>

    Examples
      $ 4byte 0x51c6590a
      addLiquidity(uint256)
`, {
  flags: {
    format: {
      type: 'string',
      alias: 'f'
    }
  }
})

let hash = cli.input[0]
const format = cli.flags.format || cli.flags.f

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

async function run () {
  try {
    const result = await fourByte(hash)
    if (format) {
      if (format === 'json') {
        console.log(JSON.stringify(result, null, 2))
      } else {
        throw new Error('format is invalid. Options are "json"')
      }
    } else {
      console.log(result.join('\n'))
    }
    process.exit(0)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}
