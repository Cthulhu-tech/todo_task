import { useCallback, useEffect, useMemo, useState } from "react"
import { HomeTodoFilter } from "../../components/homeTodoFilter/homeTodoFilter";
import { TodoContext } from "../../context/todoContext";
import { Todo, TodoMessage } from "../../interface/interface";
import { LoadContent } from "../../utils/loadContent";
import { sortTodo } from "../../utils/sortTodo";
import { HomeStyle } from "./homeStyle"

export const HomeComponent = () => {
    
    const [todo, setTodo] = useState<Todo>();
    const [todoSort, setTodoSort] = useState<TodoMessage[][]>();

    const ContentSortTodo = useMemo(() => (todo:Todo) => {

        return sortTodo(todo);

    }, [])

    const todoSetFetch = useCallback(async() => {

        if(!todo){

            setTodo(await LoadContent());

        }

        if(todo){

            await setTodoSort(await ContentSortTodo(todo));
            
        }

    },[todo, ContentSortTodo])

    useEffect(() => {

        todoSetFetch();

    },[todoSetFetch])

    return  <TodoContext.Provider value={todoSort ? todoSort : null}>
                <HomeStyle>
                    <HomeTodoFilter/>
                </HomeStyle>
            </TodoContext.Provider>
}