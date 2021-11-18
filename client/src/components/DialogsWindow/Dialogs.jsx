import React from "react";
import DialogsList from "./DialogsList";
import { Users } from "../../store/index";

const UsersList = new Users();
UsersList.loadUsers();

const Dialogs = () => {
  return <DialogsList users={UsersList} />;
};

export default Dialogs;
