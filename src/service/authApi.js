// import {saveToken} from "../utils/token";
import api from "../config/api"

export const login = async (data) => {
    try {
        console.log("masuk", data)
        const response = await api.post("/auth/login", data)
        return response?.data?.data;
    } catch (e) {
        console.error(e);
    }
}