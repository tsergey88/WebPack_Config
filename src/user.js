import './user.less'

export default class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHi() {
    return `Hello, ${this.firstName} ${this.lastName}`
  }
}
