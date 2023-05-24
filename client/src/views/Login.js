import React from "react";
import fetchJson from "../service/fetchData";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const fetchUserData = async (event) => {
    event.preventDefault();

    const userInput = new FormData(event.target);

    const formValue = Object.fromEntries(userInput);

    const response = await fetchJson(
      "http://127.0.0.1:3003/auth/login",
      "POST",
      formValue
    );

    if (response.status !== 400) {
      const data = await response.json();
      console.log(data);
      sessionStorage.setItem("jwtToken", data.token);
      sessionStorage.setItem("username", data.username);
      navigate("/");
    } else {
      const data = await response.text();
      //   console.log(data);
    }
  };

  return (
    <div>
      <form onSubmit={fetchUserData}>
        <input placeholder="Username..." name="username" />
        <input placeholder="Password..." name="password" />
        <button type="submit">Logga in</button>
      </form>
    </div>
  );
}

export default Login;
