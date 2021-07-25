import { AnimationContainer, Background, Container, Content } from "./styles";
import { Button, TextField } from "@material-ui/core";
import { Link, Redirect, useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import api from "../../services/api";

function Login({ authenticated, setAuthenticated }) {
  const schema = yup.object().shape({
    email: yup.string().email("Email inválido").required("Email obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo de 8 caracteres")
      .required("Senha inválida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitLogin = (data) => {
    api
      .post("/sessions", data)
      .then((response) => {
        localStorage.clear();
        const { token, user } = response.data;
        localStorage.setItem("@Kenziehub:token", JSON.stringify(token));
        localStorage.setItem("@Kenziehub:user", JSON.stringify(user));
        setAuthenticated(true);
        return history.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  if (authenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitLogin)}>
            <h1>Login</h1>

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

            <Button type="submit" variant="outlined" size="large">
              Entrar
            </Button>
            <p>
              Não tem uma conta? Faça seu <Link to="/">cadastro</Link>
            </p>
          </form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
}

export default Login;
