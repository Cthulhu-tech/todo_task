import { createContext } from "react";
import { AuthenticationCheck } from "../interface/interface";

export const AutherisationContextCheked = createContext<AuthenticationCheck | null>(null);