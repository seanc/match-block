function match(block, nested) {
  nested = nested || false

  const body = []
  const start = nested ? block.indexOf('```') : 3
  const end = block.lastIndexOf('```')

  function recurse(block, index) {
    while (index < block.length) {
      if (block[index] === '`' && nested) index = recurse(block, ++index)
      else if (block[index] === '`' && (index === end)) return index++
      else
        body.push(block[index])
        index++
    }
  }

  recurse(block, start)

  return body.join('').trim()
}

module.exports = match
