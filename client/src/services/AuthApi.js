import axios from "axios";
import { addItem, removeItem } from "./LocalStorage";

export function login(credentials) {
    return axios
        .post("http://localhost:3001/api/v1/user/login", credentials)
        .then((response) => response.data.body.token)
        .then((token) => {
            addItem("userToken", token);
            return token;
        });
}

export function logout() {
    removeItem("userToken");
}
