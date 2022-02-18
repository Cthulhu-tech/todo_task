import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../../context/todoContext";
import { TodoMessage } from "../../interface/interface"
import { ButtonDelete, ButtonSave, Checkbox, DataView, Input, InputContainer, InputTheme, InputUniversal, Textarea, TextareaContainer, TodoGridComponentAll } from "./typeTodoStyle";

export const CreateTodoResetData = (props:{todo: TodoMessage, type: number}) => {

  const {todo, type} = props;
  const [text, setText] = useState<string>(todo.text);
  const [dataEnd, setDataEnd] = useState(todo.data_end);
  const [dataStart, setDataStart] = useState(todo.data_start);
  const [location, setLocation] = useState(todo.location);
  const [theme, setTheme] = useState(todo.theme);
  const [done, setDone] = useState(todo.done);
  const [deleteTodo, setDelete] = useState(false);

  const SetText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

    todo.text = event.target.value;
    setText(todo.text);

  }

  const DataStartSet = (event: React.ChangeEvent<HTMLInputElement>) =>{

    todo.data_start = event.target.value;
    setDataStart(todo.data_start);

  }

  const DataEndSet = (event: React.ChangeEvent<HTMLInputElement>) =>{

    todo.data_end = event.target.value;
    setDataEnd(todo.data_end);
    
  }

  const LocationSet = (event: React.ChangeEvent<HTMLInputElement>) => {

    todo.location = event.target.value;
    setLocation(todo.location);

  }

  const ThemeSet = (event: React.ChangeEvent<HTMLInputElement>) => {

    todo.theme = event.target.value;
    setTheme(todo.theme);

  }

  const SetCheckbox = (event: React.ChangeEvent<HTMLInputElement>) => {

    todo.done = event.target.checked;
    setDone(todo.done)

  }

  const todoContext = useContext(TodoContext);

  const DeleteTodo = () => {

    if(todoContext?.todoSort) {
      todoContext?.todoSort[type].forEach((sortedTodo, i:number) =>{

        if(sortedTodo.id === todo.id && todoContext?.todoSort && todoContext?.setTodoSort){

          todoContext?.todoSort[type].splice(i,1)
          todoContext?.setTodoSort([...todoContext.todoSort])

        }
      })
    }
  }

  useEffect(() => {

  },[text, dataStart, dataEnd, todo, location, todoContext?.todoSort])

  return  <TodoGridComponentAll key={todo.id}>
            <DataView>
              <InputContainer>
                <InputUniversal placeholder="Местоположение" onChange={LocationSet} type="text" value={location}/>
                <Input onChange={DataStartSet} type="date" value={dataStart}/>
                {type !== 0 && <Input onChange={DataEndSet} type="date" value={dataEnd}/>}
              </InputContainer>
              <TextareaContainer>
                <InputTheme placeholder="Тема" onChange={ThemeSet} type="text" value={theme}/>
                <Textarea placeholder="Заметка" onChange={SetText} rows={12} defaultValue={text}></Textarea>
              </TextareaContainer>
              <InputContainer>
                <p>{todo.done ? "Завершено" : "Ожидает"}</p>
                <Checkbox type="checkbox" onChange={SetCheckbox} checked={done}/>
                <ButtonSave>Сохранить</ButtonSave>
                {
                !deleteTodo ? 
                <ButtonDelete onClick={() => setDelete(true)}>Удалить</ButtonDelete> 
                : <ButtonDelete onClick={DeleteTodo} >Уверены?</ButtonDelete>
                }
              </InputContainer>
            </DataView>
          </TodoGridComponentAll>
}