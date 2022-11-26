import axios from "axios";

/**
 * It takes a credentials object, sends it to the server, and returns the token from the response.
 * @param credentials
 * @returns The token.
 */
export function login(credentials) {
    return axios
        .post("http://localhost:3001/api/v1/user/login", credentials)
        .then((response) => response.data.body.token);
}
