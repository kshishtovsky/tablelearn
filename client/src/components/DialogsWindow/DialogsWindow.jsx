import React from "react";
import './DialogsWindowStyle.scss'
import WindowTitle from "../general/WindowTitle/WindowTitle";
import Dialogs from "./Dialogs";

const DialogsWindow = () => {
  return (
    <div className="dialog-window window">
      <WindowTitle title={"Диалоги"}/>
      <Dialogs />
    </div>
  )
}

export default DialogsWindow;