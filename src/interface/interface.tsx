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

export type Todo = {
  message: {
      data_start: number;
      data_end?: number;
      theme: string;
      text: string;
      location: string;
      done: boolean;
      type: number;
  }[];
  load: boolean;
}