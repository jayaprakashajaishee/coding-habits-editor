import AppBar from "./components/AppBar/AppBar";
import Splitter from "./components/Splitter/Splitter";
import Store from "./components/store";
import { ChakraProvider } from "@chakra-ui/react";


function ChEditor({ type,defaultContent }) {
  return (
    <div>
      <ChakraProvider>
        <Store>
          <AppBar />
          <Splitter type={type} defaultContent={defaultContent} />
        </Store>
      </ChakraProvider>
    </div>
  );
}

export default ChEditor;
