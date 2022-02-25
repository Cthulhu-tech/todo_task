import { useState } from "react";
import { CreateTodoResetData } from "./todoCreate";
import { TodoAddFile, TodoAddFileButton } from "./typeTodoStyle"

export const TodoAdd = (props:{type:number}) => {

  const { type } = props

  const [add, setAdd] = useState(true);
  
  const todo = {
    data_start: '',
    data_end: '',
    theme: '',
    text: '',
    location: '',
    done: false,
    type: type,
    id: -100,
  }

  return  <TodoAddFile border={add ? 1 : 0}>
            {!add && <CreateTodoResetData {...{todo, type, add}}/>}
            <TodoAddFileButton onClick={() => setAdd(!add)}>{add ? 'Добавить' : 'Отменить'}</TodoAddFileButton>
          </TodoAddFile>
}