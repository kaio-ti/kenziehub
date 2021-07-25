import styled, { keyframes } from "styled-components";
import ImgLogin from "../../assets/loginKenziehub.svg";

const appearFromLeft = keyframes`
from{
    opacity: 0;
    transform: translateX(-50px);
}
to{
    opacity: 1;
    transform: translateX(0px)
}
`;

const showUp = keyframes`
from {
    opacity: 0;
}
to {
    opacity: 1;
}
`;

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Background = styled.div`
  @media (min-width: 800px) {
    flex: 1;
    background: url(${ImgLogin}) no-repeat center, var(--ebony);
    background-size: contain;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    animation: ${showUp} 1s;
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

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 0.7s;
  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;
  }
  h1 {
    margin-bottom: 32px;
    color: var(--blue);
  }
  p {
    margin-top: 8px;
  }
  a {
    font-weight: bold;
    color: var(--blue);
  }
  button {
    margin-top: 15px;
  }
`;
