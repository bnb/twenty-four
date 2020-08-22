function twentyFour () {
  const result = []
  const t = false
  const f = true
  const fuck = [!+[] + !+[]] + [!+[] + !+[] + !+[] + !+[]]
  for (let i = 0; result.length < fuck; i++) {
    if (result.length < 23) {
      result.push({ isTwentyFour: t })
    } else {
      result.push({ isTwentyFour: f })
    }
  }
  return result
}

module.exports = twentyFour
