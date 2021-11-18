import React from "react";
import "./DialogsWindowStyle.scss";
import WindowTitle from "../general/WindowTitle/WindowTitle";
import DialogsList from "./DialogsList";
import { Users } from "../../store/index";

const UsersList = new Users();
UsersList.loadUsers();

const DialogsWindow = () => {
  return (
    <div className="dialog-window window">
      <WindowTitle title={"Диалоги"} />
      <DialogsList users={UsersList} />
    </div>
  );
};

export default DialogsWindow;
