[{
  id: '/#adsf',
  name: 'soo',
  room: 'museusers'
}]

//addUser(id, name, room)
//removeUser(id)
//getUser(id)
//getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser(id, name, room){
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser(id){
    var user = this.getUser(id);
    if(user){
      this.users = this.users.filter((user)=>user.id!==id);
    }
    return user;
  }
  getUser(id){
    return this.user = this.users.filter((user)=>user.id===id)[0]
  }
  getUserList(room){
    var users = this.users.filter((user)=> user.room === room);
    var namesArray = users.map((user)=>user.name);

    return namesArray;
  }
}

module.exports = {Users};

//create a class with constructor function
// class Person  {
//   constructor (name, age) {
//     //make the definition specific to the instance of class Person
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription(){
//     return `${this.name} is ${this.age} old.`;
//   }
// }
//
// var me = new Person('soo', 29);
// var description = me.getUserDescription();
// console.log(description);
