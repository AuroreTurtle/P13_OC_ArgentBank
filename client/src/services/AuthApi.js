import axios from "axios";
import { removeItem } from "./Storage";

export function login(credentials) {
    return axios
        .post("http://localhost:3001/api/v1/user/login", credentials)
        .then((response) => response.data.body.token);
}

export function logout() {
    removeItem("userToken");
}
