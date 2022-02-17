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
export const TodoGridComponentAll = styled.div
`
display: flex;
padding: 10px;
margin: 20px auto;
border-radius: 8px;
flex-direction: column;
border: 1px solid #e1e8ed;
justify-content: space-around;
box-shadow: 0px 5px 5px -5px rgb(34 60 80 / 60%);
`
export const DataView = styled.div
`
display: flex;
margin: 0 auto;
width: clamp(150px,90%,800px);
justify-content: space-between;
`
export const Textarea = styled.textarea
`
width: 100%;
resize: none;
outline: none;
padding: 10px;
text-align: start;
border-radius: 12px;
border: 1px solid #e1e8ed;
`
export const InputContainer = styled.div
`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
`
export const Input = styled.input
`
padding: 5px;
outline: none;
cursor: pointer;
border-radius: 8px;
border: 1px solid #e1e8ed;
box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2) inset;
`

export const InputUniversal = styled.input
`
padding: 5px;
border: none;
outline: none;
cursor: pointer;
text-align: center;
border-top: 1px solid #e1e8ed;
border-bottom: 1px solid #e1e8ed;
`
export const TextareaContainer = styled.div
`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
width: clamp(100px,100%,400px);
`
export const Checkbox = styled.input
`
width: 120px;
height: 40px;
outline: none;
font-size: 14px;
cursor: pointer;
font-weight: bold;
position: relative;
border-radius: 12px;
border: 1px solid #e1e8ed;
-webkit-appearance: initial;

:after {
  top: 5%;
  width: 45%;
  height: 90%;
  color: black;
  display: block;
  line-height: 32px;
  text-align: center;
  position: absolute;
  border-radius: 12px;
  box-sizing: border-box;
  border: 1px solid #e1e8ef;
  background-color: #f5f5f5;
  transition: all 0.3s ease-in 0s;
  box-shadow: 0px 0px 2px 0px rgba(34, 60, 80, 0.2);
}
:after {
  left: 2%;
  content: "";
}
:checked:after {
  left: 53%;
  content: "";
}
`
export const InputTheme = styled.input
`
margin: 10px;
border: none;
outline: none;
text-align: center;
`

export const ButtonSave = styled.button
`
margin: 5px;
outline: none;
cursor: pointer;
padding: 5px 10px;
border-radius: 8px;
color: rgb(75,170,169);
background-color: #f5f5f5;
border: 1px solid #e1e8ed;
`