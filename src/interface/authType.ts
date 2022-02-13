export type AuthType =  {
  username: string;
  password: string;
  jwt?: string;
}

export type Todo = {
  todo: {
    data: string, 
    text: string
   }[];
}