import { useState } from "react";
import { TodoAdd } from "./todoAdd";
import { TodoTypeInfo } from "./todoTypeInfo";
import { TypeTodoButton, TypeTodoContainer, TypeTodoDiv } from "./typeTodoStyle";

export const TypeTodo = () => {

  const [todoType, setTodoType] = useState(1);

  return  <TypeTodoDiv>
            <TypeTodoContainer>
              <TypeTodoButton onClick={() => setTodoType(1)}>
                <p className={todoType === 1 ? 'activeTodoButton' : ''}>Встреча</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(2)}>
                <p className={todoType === 2 ? 'activeTodoButton' : ''}>Дело</p>
              </TypeTodoButton>
              <TypeTodoButton onClick={() => setTodoType(3)}>
                <p className={todoType === 3 ? 'activeTodoButton' : ''}>Памятка</p>
              </TypeTodoButton>
            </TypeTodoContainer>
            
            <TodoAdd type={todoType - 1}/>
            <TodoTypeInfo type={todoType - 1}/>
          </TypeTodoDiv>
}