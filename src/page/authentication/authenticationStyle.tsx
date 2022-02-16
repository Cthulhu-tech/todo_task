import styled from "styled-components";

export const AuthenticationStyle = styled.section
`
display: flex;
margin: 0 auto;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 254px);
max-width: clamp(140px, 70% , 1600px);
`
export const MessageStyle = styled.p
`
width: 100%;
margin: 20px 0;
text-align: center;
font-size: clamp(12px, 5vw, 30px);
`
export const ArticleStyle = styled.article
`
display: flex;
padding: 10px;
margin: 20px auto;
border-radius: 8px;
flex-direction: column;
color: rgb(75,170,169);
border: 1px solid #e1e8ed;
width: clamp(120px, 90% , 1600px);
box-shadow: 0px 2px 5px 0px rgba(34, 60, 80, 0.2);
`
export const FormStyle = styled.div
`
display: flex;
margin: 0 auto;
align-items: center;
flex-direction: column;
width: clamp(120px, 90%, 400px);
>.btn-auth{
  border-radius: 8px;
  border: 1px solid #e1e8ed;
  background-color: #e1e8ed;

}
`
export const InputStyle = styled.input
`
outline: none;
margin: 20px 0;
padding: 5px 10px;
border-radius: 8px;
border: 1px solid #e1e8ed;
width: clamp(100px, 80%, 400px);
`
export const ButtonContainer = styled.div
`
padding: 5px;
margin: 20px;
display: flex;
border-radius: 8px;
width: calc(100% - 40px);
border: 1px solid #ebebeb;
justify-content: space-around;
>.btn-active{
  color: rgb(75,170,169);
  background-color: #f5f5f5;
}
@media screen and (max-width: 320px){
  padding: 10px;
  margin: 5px auto;
  align-items: center;
  flex-direction: column;
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
`