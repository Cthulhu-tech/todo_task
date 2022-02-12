import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { AutherisationContextCheked } from "./context/autherisationContext";
import { GlobalStyle } from "./globalStyle/globalStyle";
import { MainComponentStyle } from "./globalStyle/mainComponentStyle";
import { AuthenticationCheck } from "./interface/interface";
import { Authentication } from "./page/authentication/authentication";
import { ErrorPage } from "./page/error/error";
import { HomeComponent } from "./page/home/home";
import { autherisationCheck } from "./utils/autherisationCheck";

function App() {

  const [authState, authSetState] = useState<AuthenticationCheck>({login: false, message: 'need login and password'});
  
  const authChecker = useCallback(async () => {

    authSetState(await autherisationCheck());

  },[])

  useEffect(() => {

    authChecker();

  }, [authChecker])


  const AuthTrue = () => {
    return  <Routes>
              <Route path="/" element={<HomeComponent />}/>
              <Route path="*" element={<ErrorPage />}/>
            </Routes>
  }

  const AuthFalse = () => {
    return  <Routes>
              <Route path="/" element={<Authentication />}/>
              <Route path="*" element={<ErrorPage />}/>
            </Routes>
  }

  return  <AutherisationContextCheked.Provider value={authState}>
            <GlobalStyle/>
            <HeaderComponent/>
                <BrowserRouter>
                  <MainComponentStyle>
                    {authState.login === true ? <AuthTrue/> : <AuthFalse/>}
                  </MainComponentStyle>
                </BrowserRouter>
            <FooterComponent/>
          </AutherisationContextCheked.Provider>
}

export default App;
