let userInput: unknown
let userName: string

userInput = 6
userInput = 'input'

userName = userInput.toString()

function generateError(message: string, code: number): never {
  throw { message, errorCode: code }
}

const result = generateError('Some error', 404)

console.log(result)
