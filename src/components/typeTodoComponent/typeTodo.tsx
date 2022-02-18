import { useState } from "react";
import { TodoTypeInfo } from "./todoTypeInfo";
import { TypeTodoButton, TypeTodoContainer, TypeTodoDiv } from "./typeTodoStyle";

export const TypeTodo = () => {

  const [todoType, setTodoType] = useState(1);


  return  <TypeTodoDiv>
            <TypeTodoContainer>
              <TypeTodoButton onClick={() => setTodoType(1)}>
                <p className={todoType === 1 ? 'activeTodoButton' : ''}>Задачи на день</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(2)}>
                <p className={todoType === 2 ? 'activeTodoButton' : ''}>Промежуточные</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(3)}>
                <p className={todoType === 3 ? 'activeTodoButton' : ''}>Повторяющиеся</p>
              </TypeTodoButton>
            </TypeTodoContainer>

            {todoType === 1 && <TodoTypeInfo type={0}/>}
            {todoType === 2 && <TodoTypeInfo type={1}/>}
            {todoType === 3 && <TodoTypeInfo type={2}/>}
          </TypeTodoDiv>
}