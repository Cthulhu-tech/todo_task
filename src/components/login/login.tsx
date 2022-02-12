import { useState } from "react"
import { FormCheck } from "../../interface/interface"
import { Button, FormStyle, InputStyle, MessageStyle } from "../../page/authentication/authenticationStyle"

export const LoginComponent = () => {

  const [authInfo, setAuthInfo] = useState<FormCheck>({username: '', password: ''})

  const authInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthInfo({...authInfo, [event.currentTarget.name] : event.target.value})
  }
  
  return    <FormStyle>
              <MessageStyle>Login</MessageStyle>
              <InputStyle placeholder="Login" name="username" onChange={authInfoChange}/>
              <InputStyle placeholder="Password" name="password" type="password" onChange={authInfoChange}/>
              <Button>LOGIN SERVER</Button>
            </FormStyle>
}