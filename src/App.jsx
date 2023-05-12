import styled from "styled-components";

import "./App.css";

const Box = styled.div`
  width: 400px;
  height: 400px;

  background: aliceblue;

  border: 2px solid red;
  border-radius: 10px;

  p {
    font-size: 20px;
    font-weight: bold;

    color: blueviolet;
  }
`;

const PStyle = styled.p`
  font-size: 20px;

  color: purple;
`;

export function App() {
  const txt = "Hello World!";

  return (
    <Box>
      <PStyle>Hello World!!!</PStyle>
      <p>{txt}</p>
    </Box>
  );
}
