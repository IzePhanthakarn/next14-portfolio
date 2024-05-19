import { appAPI } from "./app"
import { authAPI } from "./auth"
import { guestAPI } from "./guest"

const API_PATH = {
    GUEST: guestAPI,
    AUTH: authAPI,
    APP: appAPI
}
export default API_PATH