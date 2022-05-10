import React from 'react'
import Editor from "@monaco-editor/react";
import { useContext } from 'react';
import {Context} from "../store";
import { CHANGE_EDITOR_VALUE,CHANGE_EDITOR_VALUE_TEMP} from '../constants';


function HtmlEditor({theme,defaultContent,value}) {
  const [state,dispatch] = useContext(Context);
  function handleEditorChange(value,event) {
    if(!state.autoRun) {
      dispatch({type: CHANGE_EDITOR_VALUE, payload: {html: value}})
      dispatch({type: CHANGE_EDITOR_VALUE_TEMP, payload: {tempHtml: value}})

    }else {
      dispatch({type: CHANGE_EDITOR_VALUE_TEMP, payload: {tempHtml: value}})
    }
    
  }
  function handleMount() {
    localStorage.setItem("ch-boilerplate",JSON.stringify(defaultContent))
  }
  return (
    <>
     <Editor
      height="100%"
      defaultLanguage="html"
      defaultValue={defaultContent.html}
      theme={theme}
      value={value}
      onChange={handleEditorChange}
      onMount={handleMount}
    />
    </>
  )
}

export default HtmlEditor