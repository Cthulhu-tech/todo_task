import styled from "styled-components"

export const HomeFilterTodo = styled.div
`
padding: 10px;
display: flex;
margin: 0 auto;
min-height: 40px;
align-items: center;
flex-direction: row;
margin-bottom: 20px;
background-color: white;
width: calc(100% - 30px);
border: 1px solid #e1e8ed;
justify-content: space-around;
box-shadow: 0px 5px 5px -5px rgba(34, 60, 80, 0.6);
@media screen and (max-width: 576px){
  align-items: center;
  flex-direction: column;
}
.btn-active{
  color: black !important;
}
`

export const FilterButton = styled.div
`
margin: 5px;
cursor: pointer;
padding: 5px 10px;
border-radius: 8px;
color: rgb(75,170,169);
background-color: #f5f5f5;
`

export const FilterInputContainer = styled.div
`
display: flex;
max-width: 100%;
align-items: center;
@media screen and (max-width: 320px){
  align-items: center;
  flex-direction: column;
}
`

export const FilterInput = styled.input
`
outline: none;
max-width: 100%;
padding: 3px 4px;
border-radius: 8px;
border: solid 1px gray;
`

export const HomeArticle = styled.article
`
margin: 5px auto;
`