import styled from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 400px;

  background: aliceblue;

  border: 2px solid red;
  border-radius: 10px;

  p {
    font-size: 50px;
    font-weight: bold;

    color: blueviolet;
  }

  button {
    padding: 15px;
    border: o;
    border-radius: 8px;
    background: #2385e0;

    cursor: pointer;

    color: white;

    &:hover {
      border: 3px solid red;
    }
  }
`;
