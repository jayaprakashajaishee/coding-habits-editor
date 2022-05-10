import "./AppBar.css"
import img from "../../images/codingHabitsLogo.png"
import { Button, Center } from "@chakra-ui/react"
import {useContext} from "react"
import { Context } from "../store";
import { CHANGE_THEME,CHANGE_AUTO_RUN, ON_RUN,ON_RESET} from "../constants";
import React from 'react'

function AppBar() {
  const [state,dispatch] = useContext(Context);

  const handleThemeChange = () => dispatch({type: CHANGE_THEME, payload: state.theme === "light" ? "vs-dark" : "light"});
  const toggleAutoRun = () => dispatch({type: CHANGE_AUTO_RUN, payload: !state.autoRun})
  const handleRun = () => dispatch({type: ON_RUN, payload: {html: state.tempHtml, css: state.tempCss, js: state.tempJs} })
  const handleReset = () => {dispatch({type: ON_RESET});}
  const handleSave = () => {
    localStorage.setItem("ch-html",state.html);
    localStorage.setItem("ch-css",state.css);
    localStorage.setItem("ch-js",state.js);
  }
  return (
    <>
    <div className="appBar">
        <img src={img} alt="codingHabits" id="logo"></img>
            <Center>
            <Button m={2} color="#323330" bgColor="#F0DB4F" variant="solid" _hover={{backgroundColor: "#FAFF7A"}} onClick={handleRun}>Run</Button>
            <Button m={2} color="#323330" bgColor="#F0DB4F" variant="solid" _hover={{backgroundColor: "#FAFF7A"}} onClick={toggleAutoRun}>Auto Run: {!state.autoRun? "ON" : "OFF"}</Button>
            <Button m={2} color="#323330" bgColor="#F0DB4F" variant="solid" _hover={{backgroundColor: "#FAFF7A"}} onClick={handleSave}>Save</Button>
            <Button m={2} color="#323330" bgColor="#F0DB4F" variant="solid" _hover={{backgroundColor: "#FAFF7A"}} onClick={handleReset}>Reset</Button>
            <Button m={2} color="#323330" bgColor="#F0DB4F" variant="solid" _hover={{backgroundColor: "#FAFF7A"}} onClick={handleThemeChange}>Theme: {state.theme==="light"?"light":"dark"}</Button>
            </Center>
    </div>
    </>
  )
}

export default AppBar