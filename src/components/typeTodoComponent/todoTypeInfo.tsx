import { useContext, useEffect } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoMessage } from "../../interface/interface";
import { CreateTodoResetData } from "./todoCreate";
import { TodoGridComponent } from "./typeTodoStyle";


export const TodoTypeInfo = (props:{type:number}) => {

  const {type} = props;
  
  const todoContext = useContext(TodoContext);

  useEffect(() => {

  },[todoContext])

  if(todoContext?.todoSort)
    return  <TodoGridComponent>{todoContext.todoSort[type].map((todo:TodoMessage) => {
        return <CreateTodoResetData {...{todo, type}} key={todo.id}/>;
    })}</TodoGridComponent>

  return <p>Todo list is empty</p>
}