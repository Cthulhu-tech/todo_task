import { useEffect, useState } from "react"
import { FormCheck } from "../../interface/interface"
import { Button, FormStyle, InputStyle, MessageStyle } from "../../page/authentication/authenticationStyle"
import { RegistrationUser } from "../../utils/registration"

export const RegistrationComponent = () => {

  const [authInfo, setAuthInfo] = useState<FormCheck>({username: '', password: ''})
  const [info, registrationInfo] = useState<any>({registration: '', message: ''});

  const authInfoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuthInfo({...authInfo, [event.currentTarget.name] : event.target.value})
  }

  const registration = async() => {
    registrationInfo(await RegistrationUser(authInfo))
  }

  useEffect(() => {

  },[info])
  console.log(info)
  return    <FormStyle>
                <MessageStyle>Registration</MessageStyle>
                <InputStyle placeholder="Login" name="username" onChange={authInfoChange}/>
                <InputStyle placeholder="Password" name="password" type="password" onChange={authInfoChange}/>
                <Button onClick={registration}>GET REGISTRED</Button>
                <MessageStyle>{info.message}</MessageStyle>
            </FormStyle>
}