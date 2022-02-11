import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AutherisationContextCheked } from "./context/autherisationContext";
import { autherisationCheck } from "./utils/autherisationCheck";

function App() {

  const [authState, authSetState] = useState(false);

  useEffect(() => {
    authSetState(autherisationCheck());
  }, [])

  return  <AutherisationContextCheked.Provider value={authState}>
          <BrowserRouter>
            <Routes>

            </Routes>
          </BrowserRouter>
          </AutherisationContextCheked.Provider>
}

export default App;
