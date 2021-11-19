import React, { useContext } from "react";
import "./Login.css";
import logo from "../../assets/logo-concord-01.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import history from "../../history";
import { AuthContext } from "../../App";

// import { Container } from './styles';


export function Login() {
  const auth = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const login = (user) => {
    axios({
      method: "POST",
      url: "http://localhost:8033/usuarios/login",
      data: user,
    })
      .then((response) => {
        auth.setAuth({token: response.data.token, nome: response.data.nome});
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="form-section">
      <div className="logo-log">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-wel">
        <h1>Bem vindo de volta! :)</h1>
      </div>
      <div className="form-wrapper">
        <form action="" className="form-login" onSubmit={handleSubmit(login)}>
          <div className="input-block">
            <label htmlFor="login-text">E-mail</label>
            <input type="email" id="login-text" {...register("email")} />
          </div>
          <div className="input-block">
            <label htmlFor="login-password">Password</label>
            <input type="password" id="login-password" {...register("senha")} />
          </div>
          <div className="btns-log">
            <button type="submit" className="btn-login">
              Login
            </button>
            <button type="submit" className="btn-login" onClick={() => {
              history.push("/cadastrar")
            }}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
