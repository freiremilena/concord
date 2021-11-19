import React from "react";
import "./Post.css";

export default function Post(props) {
  return (
    <div className="container-post">
      <div className="user-name-space">
        <h1>{props.post.nomeUsuario}</h1>
      </div>
      <div className="text-box">
        <h1>{props.post.texto}</h1>
        <div className="post-likes">
          <span>{props.post.qtdLikes}</span>
          <span className="like-like">
            <a href="#">Curtir</a>
          </span>
        </div>
      </div>
    </div>
  );
}
