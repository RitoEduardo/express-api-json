module.exports = class User{
  constructor() {
      this.firstName = null;
      this.lastName = null;
      this.age = null;
      this.email = null;
  }
  initModel({firstName, lastName, age, email}){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  getName(){
    return `${ this.firstName } ${ this.lastName }`;
  }
}
