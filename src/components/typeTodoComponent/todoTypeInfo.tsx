import { useContext } from "react";
import { TodoContext } from "../../context/todoContext";
import { CreateTodoResetData } from "./todoCreate";
import { TodoGridComponent } from "./typeTodoStyle";


export const TodoTypeInfo = (type:number) => {

  const todoSort = useContext(TodoContext);


  if(todoSort)
    return  <TodoGridComponent>{todoSort[type].map((todo) => {
        return <CreateTodoResetData todo={todo} key={todo.id}/>;
    })}</TodoGridComponent>

  return <p>Todo list is empty</p>
}