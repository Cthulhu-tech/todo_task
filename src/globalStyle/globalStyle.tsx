import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle
`
*{
    margin: 0;
    padding: 0;
}
a{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
p{
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
`
export const AuthLoadingContainer = styled.div
`
display: flex;
max-width: 100%;
flex-direction: column;
justify-content: center;
min-height: calc(100vh - 254px);
`
export const AuthLoading = styled.p
`
width: 100%;
text-align: center;
`