import { createContext } from "react";
import { AuthenticationCheck } from "../interface/interface";

export const AutherisationContextCheked = createContext<AuthenticationCheck>({login: false, message: 'need login and password'});