export type AuthenticationCheck = {
  login: boolean,
  message: string
}

export interface AuthenticationCheckPromise extends Response {
  data: AuthenticationCheck
}

export type FormCheck = {
  username: string,
  password: string
}