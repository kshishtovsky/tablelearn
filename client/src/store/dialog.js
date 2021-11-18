import { makeAutoObservable } from 'mobx'

export class User {
  user_name
  role

  constructor (props) {
    makeAutoObservable(this)
  }
}