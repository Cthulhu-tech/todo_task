import styled from "styled-components";

export const TypeTodoDiv = styled.div
`
width: 100%;
.activeTodoButton{
  color: rgb(75,170,169);
}
`

export const TypeTodoContainer = styled.div
`
width: 100%;
display: flex;
justify-content: space-around;
@media screen and (max-width: 320px){
  align-items: center;
  flex-direction: column;
}
`

export const TypeTodoButton = styled.div
`
margin: 5px;
padding: 5px;
cursor: pointer;
border-radius: 8px;
background-color: #f5f5f5;
`

export const TodoGridComponent = styled.div
`
padding: 15px;
`

export const TodoTime = styled.div
`
margin: 5px;
display: flex;
flex-direction: column;
>p{
  text-align: center;
}
`
export const TodoTimeComponent = styled.div
`
margin: 10px;
display: flex;
align-items: center;
flex-direction: column;
`
export const TodoText = styled.div
`
margin: 10px;
max-height: 200px;
overflow-x: hidden;
width: clamp(100px, 60%, 600px);
>p{
  text-align: center;
}
`
export const TodoLocation = styled.div
`
margin: 10px;
display: flex;
flex-direction: column;
width: clamp(100px, 60%, 100px);
>p{
  padding: 5px;
  text-align: center;
}
`
export const TodoTheme = styled.div
`
margin: 10px;
>p{
  text-align: center;
}
>.redTodo{
  color: red !important;
}
>.greenTodo{
  color: green !important;
}
`
export const TodoGridComponentAll = styled.div
`
display: flex;
padding: 10px;
margin: 10px auto;
border-radius: 8px;
flex-direction: column;
border: 1px solid #e1e8ed;
justify-content: space-around;
box-shadow: 0px 5px 5px -5px rgb(34 60 80 / 60%);
`
export const TodoComponent = styled.div
`
display: flex;
justify-content: space-around;
@media screen and (max-width: 576px){
  align-items: center;
  flex-direction: column;
}
`
export const TextColor = styled.p
`
color: blue;
padding: 5px;
`

export const TextColorDone = styled.p
`
padding: 5px;
`