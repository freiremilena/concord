import React from "react";
import Post from "../../../components/Post/Post";
import "./LinhaDoTempo.css";

export default function LinhaDoTempo() {
  let infoPosts = [
    {
      id: 1,
      nomeUsuario: "Joao",
      texto: "Menino, tá quente demais hoje",
      qtdLikes: 1,
    },
    {
      id: 2,
      nomeUsuario: "Tiago",
      texto: "Num aguento mais essa quintura",
      qtdLikes: 3,
    },
  ];
  let concord = infoPosts.map((item) => {
    return <Post key={item.id} post={item}></Post>;
  });
  return <div className="container">{concord}</div>;
}
