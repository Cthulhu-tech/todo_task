import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { TextColor, TextColorDone, TodoComponent, TodoGridComponent, TodoGridComponentAll, TodoLocation, TodoText, TodoTheme, TodoTime, TodoTimeComponent, TypeTodoButton, TypeTodoContainer, TypeTodoDiv } from "./typeTodoStyle";

export const TypeTodo = () => {

  const [todoType, setTodoType] = useState(1)

  const todoSort = useContext(TodoContext);


  useEffect(() => {
    
  }, [todoSort])

  const ConvertData = (data:number) => {
    const data_normalized = new Date(data);
    return <p>{data_normalized.getDate() + '.' + (data_normalized.getMonth() + 1) + '.' + data_normalized.getFullYear()}</p>
  }

  const TodoTypeInfo = (type:number) => {
    if(todoSort)
    return <TodoGridComponent>{todoSort[type].map((todo) => {
      return  <TodoGridComponentAll>
                <TodoTheme>
                  <TextColor>Тема: {todo.theme}</TextColor>
                  <TextColorDone className={todo.done ? 'redTodo' : 'greenTodo'}>{todo.done ? 'Завершено' : 'Ожидает'}</TextColorDone>
                </TodoTheme>
                <TodoComponent>
                  <TodoTimeComponent>
                    <TodoTime>
                      <TextColor>Начало: </TextColor>
                      {ConvertData(todo.data_start)}
                    </TodoTime>
                    <TodoTime>
                      <TextColor>Конец: </TextColor>
                      {ConvertData(todo.data_end)}
                    </TodoTime>
                  </TodoTimeComponent>
                  <TodoText>
                    <p>{todo.text}</p>
                  </TodoText>
                  <TodoLocation>
                    <TextColor>Локация: </TextColor>
                    <p>{todo.location}</p>
                  </TodoLocation>
                </TodoComponent>
              </TodoGridComponentAll>
    })}</TodoGridComponent>
  }

  return  <TypeTodoDiv>
            <TypeTodoContainer>
              <TypeTodoButton onClick={() => setTodoType(1)}>
                <p className={todoType === 1 ? 'activeTodoButton' : ''}>Type 1</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(2)}>
                <p className={todoType === 2 ? 'activeTodoButton' : ''}>Type 2</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(3)}>
                <p className={todoType === 3 ? 'activeTodoButton' : ''}>Type 3</p>
              </TypeTodoButton>
            </TypeTodoContainer>

            {todoType === 1 && TodoTypeInfo(0)}
            {todoType === 2 && TodoTypeInfo(1)}
            {todoType === 3 && TodoTypeInfo(2)}
          </TypeTodoDiv>
}