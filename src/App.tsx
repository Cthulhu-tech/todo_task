import { useCallback, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthFalse } from "./components/authFalse/aythFalseComponent";
import { AuthTrue } from "./components/authTrue/authTrueComponents";
import { FooterComponent } from "./components/footer/footer";
import { HeaderComponent } from "./components/header/header";
import { AutherisationContextCheked } from "./context/autherisationContext";
import { AuthLoading, AuthLoadingContainer, GlobalStyle } from "./globalStyle/globalStyle";
import { MainComponentStyle } from "./globalStyle/mainComponentStyle";
import { AuthenticationCheck } from "./interface/interface";
import { autherisationCheck } from "./utils/autherisationCheck";

function App() {

  const [authState, authSetState] = useState<AuthenticationCheck | null>(null);
  
  const authChecker = useCallback( async () => {

    authSetState(await autherisationCheck());

  },[])

  useEffect(() => {

    authChecker();

  }, [authChecker])

  const Auth = () => {

    if(authState){

      return authState.login === true ? <AuthTrue/> : <AuthFalse/>
      
    }

    return  <AuthLoadingContainer>
              <AuthLoading>Loading...</AuthLoading>
            </AuthLoadingContainer>
  }

  return  <AutherisationContextCheked.Provider value={authState}>
            <GlobalStyle/>
            <HeaderComponent/>
                <BrowserRouter>
                  <MainComponentStyle>
                    <Auth/>
                  </MainComponentStyle>
                </BrowserRouter>
            <FooterComponent/>
          </AutherisationContextCheked.Provider>
}

export default App;
