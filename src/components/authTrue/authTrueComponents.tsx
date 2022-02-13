import { Route, Routes } from "react-router"
import { ErrorPage } from "../../page/error/error"
import { HomeComponent } from "../../page/home/home"

export const AuthTrue = () => {
  return  <Routes>
            <Route path="/" element={<HomeComponent />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
}