/*Реалізуй клас User.Під час створення екземпляру на базі цього класу, обʼєкт повинен мати вигляд { name: ‘Petro’, role: ‘admin’ } (role може бути або admin або user). У разі невірно переданих даних такого об’єкта — попереджати за допомогою alert - у відповідне поле, яке введено некоректно.У класі User повинні бути такі компоненти:

getName
getRole
login
logout
сhangeName
changePassword
У класі Admin повинні бути такі компоненти:

addUser
removeUser
changeUserRole
getAllUsers
removeAllUsers*/

class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  getName() {
    return this.name;
  }
  getRole() {
    return this.role;
  };
  login() {}
  logout() {}

  changeName() {}
  changePassword() {}
}

class Admin extends User {
  addUser() {
    return super.getName();
  }

  removeUser() {}
  

  changeUserRole() {
    return super.getRole("admin");
  }
  getAllUsers() {}
  removeAllUsers() {}
}
