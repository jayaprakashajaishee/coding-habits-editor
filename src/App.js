import React from "react";
import ChEditor from "./components/ChEditor";
import boilerplate from "./components/boilerplate/boilerplate";

function App() {
  return (
    <>
      <ChEditor type="html" defaultContent={boilerplate} />
    </>
  );
}

export default App;
