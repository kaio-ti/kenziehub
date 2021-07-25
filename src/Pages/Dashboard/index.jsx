import {
  Background,
  Container,
  Content,
  InputContainer,
  TechContainer,
} from "./styles";

import { Button, TextField } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CardTech from "../../Components/Card";
import api from "../../services/api";
import { Redirect } from "react-router-dom";

function Dashboard(authenticated) {
  const [techs, setTechs] = useState([]);
  const [token] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:token")) || ""
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem("@Kenziehub:user")) || ""
  );

  const { register, handleSubmit } = useForm();

  function loadTechs() {
    api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        // params: { title: techs.title, status: techs.status, id: techs.id },
      })
      .then((response) => {
        const userTechs = response.data.techs.map((tech) => ({
          ...tech,
          id: tech.id,
          title: tech.title,
          status: tech.status,
        }));
        setTechs(userTechs);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    loadTechs();
  }, []);

  const onSubmitTech = ({ title, status }) => {
    api
      .post(
        "/users/techs/",
        {
          title: title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => loadTechs());
  };

  const handleExcludes = (id) => {
    const newTechs = techs.filter((tech) => tech.id !== id);
    api
      .delete(`users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setTechs(newTechs));
  };

  if (!authenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <Container>
      <h1>Kenzie Hub</h1>
      <InputContainer>
        <section>
          <form onSubmit={handleSubmit(onSubmitTech)}>
            <TextField
              {...register("title")}
              color="primary"
              label="Add Techs"
              variant="outlined"
              size="small"
            />
            <TextField
              {...register("status")}
              color="primary"
              label="Level"
              variant="outlined"
              size="small"
            />
            <Button type="submit" variant="outlined">
              Add
            </Button>
          </form>
        </section>
      </InputContainer>
      <TechContainer>
        {techs.map((tech) => (
          <CardTech
            key={tech.id}
            title={tech.title}
            status={tech.status}
            onClick={() => handleExcludes(tech.id)}
          />
        ))}
      </TechContainer>
      <Background />
    </Container>
  );
}

export default Dashboard;
