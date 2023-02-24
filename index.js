import { login, logout } from "./scripts/services/session-services.js";

const credentials = {
    email: "oscar@mail.com",
    password: "123456",
}
async function test () {
    try {
        const user = await login(credentials);
        console.log(user);
        const message = await logout();
        console.log(message);
    } catch(error) {
        console.log(error);
    }
}

test()