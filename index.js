import { tokenKey } from "./scripts/config.js";
import DOMHandler from "./scripts/dom-handler.js";
import HomePage from "./scripts/pages/home-page.js";
import LoginPage from "./scripts/pages/login-page.js";

async function init () {
    try {
        const token = sessionStorage.getItem(tokenKey);
        if(!token) return DOMHandler.load(LoginPage);

        DOMHandler.load(HomePage)
    } catch(error) {
        console.error(error);
        sessionStorage.removeItem(tokenKey);
        DOMHandler.load(LoginPage)
    }
}
init();
