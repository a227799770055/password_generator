function generatePassword(options) {
  // 定義大小寫字母、符號、數字
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/'
  // function
  function sample(array) {
    const arrayIndex = Math.floor(Math.random() * array.length)
    return array[arrayIndex]
  }

  // 

  // 依據使用者條件放入需要的元素
  let collection = []
  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }

  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }

  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  // 移除不需要的元素
  if (options.excludeCharacters) {
    collection = collection.filter(
      character => !options.excludeCharacters.includes(character)
    )
  }
  // 開始創造密碼
  if (collection.length === 0) {
    return 'There is no valid characters in your selection.'
  }
  let password = ''
  for (let i = 0; i < options.length; i++) {
    password += sample(collection)
  }
  // 回傳密碼
  return password

}

module.exports = generatePassword