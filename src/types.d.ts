export interface User {
  id: number,
  name: string,
  email: string,
  isActiveYes: boolean,
  isActiveNo: boolean,
  role: string,
}

export interface UserMutation {
  name: string,
  email: string,
  isActiveYes: boolean,
  isActiveNo: boolean,
  role: string,
}