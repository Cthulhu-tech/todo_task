import { useCallback, useEffect, useState } from "react"
import { HomeTodoFilter } from "../../components/homeTodoFilter/homeTodoFilter";
import { TodoContext } from "../../context/todoContext";
import { Todo, TodoMessage } from "../../interface/interface";
import { LoadContent } from "../../utils/loadContent";
import { sortTodo } from "../../utils/sortTodo";
import { HomeStyle } from "./homeStyle"

export const HomeComponent = () => {
    
    const [todo, setTodo] = useState<Todo>();
    const [todoSort, setTodoSort] = useState<TodoMessage[][]>();
    const [submitting, setSubmitting] = useState(true)
    
    const ContentSortTodo = useCallback((todo:Todo) => {

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

        if(submitting){

            todoSetFetch().then(() => setSubmitting(false));

        }

    },[submitting, todoSetFetch, todoSort, todo])

    return  <TodoContext.Provider value={{todoSort, setTodoSort}}>
                <HomeStyle>
                    <HomeTodoFilter/>
                </HomeStyle>
            </TodoContext.Provider>
}