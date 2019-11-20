import { User, RequestBody } from '../models/user'

// Databaseに下記のようなデータ格納されているとする
const users: Array<User> = [
  {
    id: 1,
    name: 'Tanka'
  },
  {
    id: 2,
    name: 'Suzuki'
  }
]

export const getUser = (id: number): User => {
  return users.find((user) => user.id === id) || {}
}
export const createUser = (body: RequestBody): void => {
  users.push({
    id: users.length + 1,
    name: body.name
  })
}
