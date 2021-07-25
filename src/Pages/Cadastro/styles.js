import styled, { keyframes } from "styled-components";
import ImgCadastro from "../../assets/signupKenzieHub.svg";
export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

const showUp = keyframes`
from{
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    flex: 1;
    background: url(${ImgCadastro}) no-repeat center, var(--ebony);
    background-size: contain;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    animation: ${showUp} 2s;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

const appearFromRight = keyframes`
from{
    opacity: 0;
    transform: translateX(50px);
}
to{
    opacity: 1;
    transform: translateX(0px)
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromRight} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
  h1 {
    margin-bottom: 32px;
    color: var(--blue);
  }
  a {
    font-weight: bold;
    color: var(--blue);
  }
  p {
    margin-top: 8px;
  }
  button {
    margin-top: 15px;
  }
`;
