import gitLogo from "../assets/github.png";
import { Container } from "./styles";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";
import Button from "../components/Button";
import { useState } from "react";
import { api } from "../services/api";

function App() {
  const [curentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${curentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo.id == data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositorio nao encontrado");
  };

  const handleRemoveRepo = (id) => {
    console.log("Removendo Registro", id);

    const updatedRepos = repos.filter((repo) => repo.id !== id);
    setRepos(updatedRepos);
  };

  return (
    <Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub" />
      <Input
        value={curentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo, index) => (
        <ItemRepo key={index} handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>
  );
}

export default App;

/*

<Container>
      <img src={gitLogo} width={72} height={72} alt="Logo GitHub" />
      <Input
        value={curentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo handleRemoveRepo={handleRemoveRepo} repo={repo} />
      ))}
    </Container>

*/
