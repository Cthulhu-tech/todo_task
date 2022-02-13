import { useCallback, useEffect, useState } from "react"
import { Todo } from "../../interface/interface";
import { LoadContent } from "../../utils/loadContent";
import { FilterButton, HomeFilterTodo, HomeStyle } from "./homeStyle"

export const HomeComponent = () => {
    
    const [todo, setTodo] = useState<Todo>({"message":[{data_start: 0,theme: "",text: "",location: "",done: true, type: 0}],"load":true});

    const todoSetFetch = useCallback(async() => {

        setTodo(await LoadContent());

    },[])

    useEffect(() => {

        todoSetFetch();

    },[todoSetFetch])

    const TodoLoadToPage = () => {
        return <div>{todo.message.map((value) => {
            return <p>{value.text}{value.data_start}</p>
        })}</div>
    }

    const HomeTodoFiltet = () => {

        return  <HomeFilterTodo>
                    <FilterButton>Поиск</FilterButton>
                    <FilterButton>Тип</FilterButton>
                    <FilterButton>Дата</FilterButton>
                </HomeFilterTodo>

    }


    return  <HomeStyle>
                <HomeTodoFiltet/>
                <TodoLoadToPage/>
            </HomeStyle>
}