import React from "react";
import Split from "react-split";
import "./Splitter.css";
import HtmlEditor from "../Editor/HtmlEditor";
import { useContext } from "react";
import { Context } from "../store";

function Splitter({ type, defaultContent }) {
  const [state, dispatch] = useContext(Context);

  const srcDoc = `
  <html>
  <body>${state.html}</body>
  <style>${state.css}</style>
  <script>${state.js}</script>
  </html>`

  return (
    <>
      <div>
        <Split className="split" style={{ height: "calc(100vh - 5rem)" }}>
          {type === "html" ? (
            <div>
              <HtmlEditor theme={state.theme} defaultContent={defaultContent} value={state.html}/>
            </div>
          ) : (
            <div>Hello</div>
          )}
          <div>
            <iframe title="output" 
            sandbox="allow-scripts"
            frameBorder="0"
            width="100%"
            height="100%"
            srcDoc={srcDoc}/>
          </div>
        </Split>
      </div>
    </>
  );
}

export default Splitter;
