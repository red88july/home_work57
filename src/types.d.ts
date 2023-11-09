export interface User {
  id: number,
  name: string,
  email: string,
  isActive: boolean,
  role: string,
}

export interface UserMutation {
  name: string,
  email: string,
  isActive: boolean,
  role: string,
}