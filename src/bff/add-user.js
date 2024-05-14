import { getRegisterDate } from "./get-register-date";

export const addUser = (login, password) =>
    fetch('http://localhost:3005/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({
            login,
            password,
            registred_at: getRegisterDate(),
            role_id: 2
        }),
    });