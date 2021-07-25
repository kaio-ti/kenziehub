import styled, { keyframes } from "styled-components";
import ImgDev from "../../assets/devfocus.svg";

const showDown = keyframes`
from{
  opacity:0;
  transform: translatey(-50px)
}
to{
  opacity: 1;
  transform: translatey(0px)
}
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 38px;

  h1 {
    align-self: center;
    margin: 15px;
    color: var(--blue);
  }
`;

export const InputContainer = styled.div`
  flex: 1;
  margin-top: 32px;
  padding: 0 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    display: flex;
    justify-content: center;
    align-items: center;

    button {
      max-width: 260px;
      height: 45px;
      margin: 0;
    }
  }
`;

export const TechContainer = styled.div`
  padding: 0 38px;
  margin-top: 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  animation: ${showDown} 1s;
  width: 100%;
`;

export const Background = styled.div`
  @media (min-width: 1100px) {
    flex: 1;
    background: url(${ImgDev}) no-repeat center, var(--ebony);
    background-size: contain;
  }
`;
