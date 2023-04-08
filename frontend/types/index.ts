export type AuthForm = {
  email: string
  password: string
}

export type EdittedTask = {
  id: number
  title: string
  description?: string | null
}
