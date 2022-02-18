import { createContext } from "react";
import { TodoMessage } from "../interface/interface";

export const TodoContext = createContext<{
  todoSort: TodoMessage[][] | undefined;
  setTodoSort: React.Dispatch<React.SetStateAction<TodoMessage[][] | undefined>>;
} | undefined>(undefined);