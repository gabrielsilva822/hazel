const aliases = {
  darwin: ['mac', 'macos', 'osx'],
  win32: ['windows', 'win']
}

module.exports = platform => {
  for (const guess in aliases) {
    if (!{}.hasOwnProperty.call(aliases, guess)) {
      continue
    }

    const list = aliases[guess]

    if (guess === platform || list.includes(platform)) {
      return guess
    }
  }

  return false
}
