import { useEffect, useState } from "react"
import { TypeTodo } from "../typeTodoComponent/typeTodo";
import { FilterButton, FilterInput, FilterInputContainer, HomeArticle, HomeFilterTodo } from "./homeTodoFilterStyle"

export const HomeTodoFilter = () => {

  const [filterState, setFilterState] = useState<number>();

  useEffect(() => {

  },[filterState])

  const FilterConteiner = () => {
    return  <HomeFilterTodo>
              <FilterInputContainer>
              <FilterInput/>
              <FilterButton onClick={() => 
                setFilterState(1)} 
                className={filterState === 1 ? 'btn-active' : ''}
              ><p>Поиск</p></FilterButton>
              </FilterInputContainer>

              <FilterButton onClick={() => setFilterState(2)} 
                className={filterState === 2 ? 'btn-active' : ''}
              ><p>Тип</p></FilterButton>
              <FilterButton onClick={() => setFilterState(3)} 
                className={filterState === 3 ? 'btn-active' : ''}
              ><p>Дата</p></FilterButton>
            </HomeFilterTodo>
  }

  return  <HomeArticle>
            <FilterConteiner/>
            {filterState === 2 && <TypeTodo/>}
          </HomeArticle>

}