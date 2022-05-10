import React from "react";
import AppBar from "./AppBar/AppBar";
import Splitter from "./Splitter/Splitter";
import Store from "./store";


function ChEditor({ type, defaultContent }) {
  return (
    <div>
      <Store>
        <AppBar />
        <Splitter type={type} defaultContent={defaultContent} />
      </Store>
    </div>
  );
}

export default ChEditor;
