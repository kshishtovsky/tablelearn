import { makeAutoObservable } from "mobx";
const axios = require("axios");

export class Users {
  users = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadUsers() {
    axios
      .get("http://localhost:8080/dialogs")
      .then((response) => (this.users = response.data));
  }
}
