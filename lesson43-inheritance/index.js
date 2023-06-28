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
  }

  login() {
   console.log('User logged in.');
  }

  logout() {
    console.log('User logged out.');
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    console.log('Password changed.');
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
    this.users = [];
  }

  addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
      console.log('User added:', user.getName());
    } else {
      alert('Invalid user object.');
    }
  }

  removeUser(user) {
    const index = this.users.indexOf(user);
    if (index !== -1) {
      const removedUser = this.users.splice(index, 1)[0];
      console.log('User removed:', removedUser.getName());
    } else {
      console.log('User not found.');
    }
  }

  changeUserRole(user, newRole) {
    if (user instanceof User) {
      user.role = newRole;
      console.log('User role changed:', user.getName());
    } else {
      alert('Invalid user object.');
    }
  }

  getAllUsers() {
    return this.users;
  }

  removeAllUsers() {
    this.users = [];
    console.log('All users removed.');
  }
}


const user1 = new User('Petro', 'admin');
//console.log(user1.getName());  
//console.log(user1.getRole()); 
user1.login();                 

const admin1 = new Admin('Admin');
const user2 = new User('John', 'user');
admin1.addUser(user1);         
admin1.addUser(user2);         
//console.log(admin1.getAllUsers());  
admin1.removeUser(user1);      
//console.log(admin1.getAllUsers()); 
admin1.changeUserRole(user2, 'admin');
//console.log(user2.getRole()); 
admin1.removeAllUsers();      
//console.log(admin1.getAllUsers());  
