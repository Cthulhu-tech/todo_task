import { createContext } from "react";
import { TodoMessage } from "../interface/interface";


export const TodoContext = createContext<TodoMessage[][] | null>(null);