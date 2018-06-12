import './main.css';

export default class Developer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  showInfo() {
    console.log(`Name: ${this.firstName}`);
    console.log(`Surname: ${this.lastName}`);
  }
}