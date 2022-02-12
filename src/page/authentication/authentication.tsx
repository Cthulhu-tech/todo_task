import { useState } from "react"
import { LoginComponent } from "../../components/login/login";
import { RegistrationComponent } from "../../components/registration/registration";
import { ArticleStyle, AuthenticationStyle, Button, ButtonContainer } from "./authenticationStyle"


export const Authentication = () => {
    
    const [auth, setAuth] = useState<boolean>(false)

    return  <AuthenticationStyle>
                <ArticleStyle>
                    <ButtonContainer>
                        <Button className={auth ? 'btn-active' : ''} onClick={() => setAuth(true)}>Login</Button>
                        <Button className={!auth ? 'btn-active' : ''} onClick={() => setAuth(false)}>Registration</Button>
                    </ButtonContainer>
                    {auth ? <LoginComponent/> : <RegistrationComponent/>}
                </ArticleStyle>
            </AuthenticationStyle>
}