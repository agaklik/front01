import "./App.css";

import axios from "axios";

import { useState, useEffect } from "react";

import { Box } from "./App.style";

export function App() {
  const [person, setPerson] = useState({
    name: {
      first: "???",
    },
  });

  useEffect(() => {
    handleGet();
  });

  async function handleGet() {
    const data = await axios.get("https://randomuser.me/api/?nat=BR&female");
    setPerson(data.data.results[0]);

    //console.log(data);

    //console.log(data.data.results[0].name.firts);
    console.log(person);
  }

  return (
    <Box>
      <button onClick={handleGet}>Request</button>
      <p>Nome: </p>
      <p> {person.name.first}</p>
    </Box>
  );
}
