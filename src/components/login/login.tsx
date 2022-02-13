import { useEffect, useState } from "react"
import { FormCheck } from "../../interface/interface"
import { Button, FormStyle, InputStyle, MessageStyle } from "../../page/authentication/authenticationStyle"
import { LoginUser } from "../../utils/login";

export const LoginComponent = () => {

  const [authInfo, setAuthInfo] = useState<FormCheck>({username: '', password: ''});
  const [info, loginInfo] = useState<any>({registration: '', message: ''});

  const authInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthInfo({...authInfo, [event.currentTarget.name] : event.target.value});
  }

  const login = async() => {

    loginInfo(await LoginUser(authInfo))
  }

  useEffect(() => {

  },[info])

  return    <FormStyle>
              <MessageStyle>Login</MessageStyle>
              <InputStyle placeholder="Login" name="username" onChange={authInfoChange}/>
              <InputStyle placeholder="Password" name="password" type="password" onChange={authInfoChange}/>
              <Button onClick={login}>LOGIN SERVER</Button>
              
            </FormStyle>
}