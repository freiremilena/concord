import React from "react";
import "./Cadastrar.css";
import logo from "../../assets/logo-concord-01.svg";
import { useForm } from "react-hook-form";
import axios from "axios";
import history from "../../history";

export function Cadastrar() {
  const { register, handleSubmit } = useForm();
  const cadastrar = (user) => {
    axios({
      method: "POST",
      url: "http://localhost:8033/usuarios",
      data: user,
    })
      .then((response) => {
        history.push("/login");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section class="form-section">
      <div className="logo-log">
        <img src={logo} alt="logo" />
      </div>
      <div className="text-wel">
        <h1>Bem vindo ao Concord! :)</h1>
      </div>
      <div class="form-ca">
        <form
          action=""
          className="form-cadastro"
          onSubmit={handleSubmit(cadastrar)}
        >
          <div class="input-block">
            <label for="login-name"> Seu Nome</label>
            <input type="text" id="login-email" {...register("nome")} />
          </div>
          <div class="input-block">
            <label for="login-email"> Seu melhor Email</label>
            <input type="email" id="login-email" {...register("email")} />
          </div>
          <div class="input-block">
            <label for="login-password">Criar Password</label>
            <input type="password" id="login-password" {...register("senha")} />
          </div>
          <button type="submit" class="btn-cadas">
            Confirmar
          </button>
        </form>
      </div>
    </section>
  );
}
