import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleRemoveRepo(repo.id);
  };

  return (
    <ItemContainer>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>
      <a href={repo.html_url} rel="noreferrer" target="_blank">
        Ver Repositório
      </a>
      <br />
      <a href="#" className="remover" onClick={handleRemove}>
        Remover
      </a>
      <hr />
    </ItemContainer>
  );
}

export default ItemRepo;
