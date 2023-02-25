import { input } from "../components/input.js";
import { login } from "../services/session-services.js";
import DOMHandler from "../dom-handler.js";
import HomePage from "./home-page.js";
import STORE from "../store.js";

function render() {
  const { loginError } = LoginPage.state;
  return `
  <main class="section">
    <section class="container">
      <h1 class="heading--lg text-center mb-4">Login</h1>
      <form class="flex flex-column gap-4 mb-4 js-login-form">
        ${input({
          label: "email",
          id: "email",
          placeholder: "oscar@mail.com",
          type: "email",
          required: true,
          value: "oscar@mail.com",
        })}
        ${input({
          label: "password",
          id: "password",
          placeholder: "******",
          type: "password",
          required: true,
          value: "123456",
        })}
        ${
          loginError ? `<p class="text-center error-300">${loginError}</p>` : ""
        }
        <button class="button button--primary">Login</button>
      </form>
     <a href="#" class="block text-center js-signup-link">Create account</a>
    </section>
  </main>
  `;
}
function listenSubmitForm() {
  const form = document.querySelector(".js-login-form");
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    try {
      const { email, password } = event.target;
      const credentials = {
        email: email.value,
        password: password.value,
      };
      const user = await login(credentials);
      STORE.user = user;
      await STORE.fetchTasks();
      console.log(STORE);
      DOMHandler.load(HomePage);
    } catch (error) {
      LoginPage.state.loginError = error.message;
      DOMHandler.reload();
    }
  });
}

const LoginPage = {
  toString() {
    return render();
  },
  addListeners() {
    listenSubmitForm();
  },
  state: {
    loginError: null,
  },
};
export default LoginPage;
