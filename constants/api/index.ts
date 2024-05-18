import { authAPI } from "./auth"
import { guestAPI } from "./guest"

const API_PATH = {
    GUEST: guestAPI,
    AUTH: authAPI,
}
export default API_PATH