// import { Container } from './styles';

import { Button, TextField } from "@material-ui/core";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Container, Background, Content, AnimationContainer } from "./styles";

function Cadastro({ authenticated }) {
  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .matches(
        /^((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Senha fraca"
      )
      .required("Senha obrigatória"),
    bio: yup.string().required("Um pouco sobre vocẽ"),
    contact: yup.string().required("Número ou rede social"),
    course_module: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitForm = ({
    email,
    password,
    name,
    bio,
    contact,
    course_module,
  }) => {
    const user = { email, password, name, bio, contact, course_module };
    console.log(user);
    api
      .post("/users", user)
      .then((_) => {
        return history.push("/login");
      })
      .catch((err) => console.log(err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <h1>Cadastro</h1>
            <TextField
              variant="outlined"
              margin="normal"
              label="Nome"
              {...register("name")}
              helperText={errors.name?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Email"
              {...register("email")}
              helperText={errors.email?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Senha"
              type="password"
              {...register("password")}
              helperText={errors.password?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Bio"
              {...register("bio")}
              helperText={errors.bio?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Contato"
              {...register("contact")}
              helperText={errors.contact?.message}
            />
            <TextField
              variant="outlined"
              margin="normal"
              label="Módulo do curso"
              {...register("course_module")}
              helperText={errors.course_module?.message}
            />
            <Button type="submit" variant="outlined" size="large">
              Cadastrar
            </Button>
            <p>
              Já é cadastrado? Faça seu <Link to="/login">login</Link>{" "}
            </p>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
}

export default Cadastro;
