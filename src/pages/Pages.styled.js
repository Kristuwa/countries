import styled from "styled-components";
import bg from "../img/bg.jpg";

export const Main = styled.main`
  padding: 30px 0;
  background-image: linear-gradient(
      0deg,
      rgb(255, 255, 255, 0.7) 0%,
      rgb(255, 255, 255, 0.7) 0%
    ),
    url(${bg});
  background-repeat: repeat;
  background-size: 100%;
  background-position: 0 0;
  min-height: 100vh;
`;

export const Container = styled.div`
  min-width: 320px;
  width: 100%;
  max-width: 1440px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const MainTitle = styled.h1`
  font-size: 30px;
  text-align: center;
  margin-bottom: 30px;
  color: rgb(25 76 133);
`;

export const Text = styled.p`
  font-size: 18px;
  text-align: center;
  margin-bottom: 15px;
`;

export const Error = styled.p`
  font-size: 30px;
  margin: 0 auto;
  padding: 30px 0;
  color: red;
  text-align: center;
`;
