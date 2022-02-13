import { Route, Routes } from "react-router"
import { Authentication } from "../../page/authentication/authentication"
import { ErrorPage } from "../../page/error/error"

export const AuthFalse = () => {
  return  <Routes>
            <Route path="/" element={<Authentication />}/>
            <Route path="*" element={<ErrorPage />}/>
          </Routes>
}