import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (
            e.target.elements.username.value.toLowerCase() === "username" ||
            e.target.elements.password.value.toLowerCase() === "password"
          ) {
            const ele = document.getElementById("message");
            ele.innerText = "Invalid username or password";
          } else {
            const ele = document.getElementById("message");
            ele.innerText = "Welcome, user";
            setLoggedIn(true);
          }
        }}
      >
        <h1>Login Page</h1>
        <p id="message"></p>
        {!loggedIn && (
          <>
            <label htmlFor="">Username :</label>
            <input name="username" required type="text" />
            <br />
            <label htmlFor="">Password :</label>
            <input name="password" required type="password" />
            <br />
            <button>Submit</button>
          </>
        )}
      </form>
    </>
  );
}

export default App;
