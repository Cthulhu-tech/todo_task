import styled from "styled-components";

export const AuthenticationStyle = styled.section
`
display: flex;
margin: 0 auto;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 254px);
max-width: clamp(300px, 80% , 1600px);
`
export const MessageStyle = styled.p
`
width: 100%;
margin: 20px 0;
text-align: center;
text-transform: uppercase;
font-size: clamp(18px, 5vw, 30px);
`
export const ArticleStyle = styled.article
`
width: 100%;
display: flex;
flex-direction: column;
`
export const FormStyle = styled.div
`
width: 100%;
display: flex;
align-items: center;
flex-direction: column;
`
export const InputStyle = styled.input
`
outline: none;
margin: 20px 0;
padding: 5px 10px;
border-radius: 2px;
border: 1px solid gray;
width: clamp(100px, 80%, 400px);
`
export const ButtonContainer = styled.div
`
width: calc(100% - 40px);
margin: 20px;
display: flex;
justify-content: space-around;
>.btn-active{
  color: red;
}
`
export const Button = styled.button
`
margin: 5px;
border: none;
outline: none;
cursor: pointer;
padding: 5px 10px;
border-radius: 3px;
background-color: transparent;
:hover{
  color: gray;
}
`