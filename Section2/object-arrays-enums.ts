// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Leva',
//   age: 30,
//   hobbies: ['Sports', 'Cooling'],
//   role: [2, 'author'],
// }

// const ADMIN = 0
// const READ_ONLY = 1
// const AUTHOR = 2

enum Role {
  ADMIN = 1,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'Leva',
  age: 30,
  hobbies: ['Spports', 'Cooking'],
  role: Role.ADMIN,
}

// person.role.push('admin')

console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
}

if (person.role === Role.ADMIN) {
  console.log('is admin' + person.role)
}
