import { SessionPayLoad, UserContextType } from "@/context"
import {jwtDecode} from "jwt-decode"

export function decodeJwt(token: string) : SessionPayLoad {
    return jwtDecode(token)
}