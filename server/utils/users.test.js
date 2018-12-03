const expect = require('expect');

const {Users} = require('./users');

describe('Users',()=>{

  beforeEach(()=>{
    users = new Users();
    users.users=[{
      id: '1',
      name: 'mike',
      room: 'fun room'
    },{
      id: '2',
      name: 'jen',
      room: 'meh room'
    },{
      id: '3',
      name: 'julie',
      room: 'fun room'
    }]
  });

  it('should add new user',()=>{
    var users = new Users();
    var user={
      id: '123',
      name: 'soo',
      room: 'my room'
    };
    var resUser=users.addUser(user.id,user.name,user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user',()=>{
    var userID = '1';
    var userList = users.removeUser(userID);
    expect(userList.id).toBe(userID);
    expect(users.users.length).toBe(2);
  });

  it('should not remove a user',()=>{
    var userList = users.removeUser('12');
    expect(userList).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find a user',()=>{
    var userList = users.getUser('2');
    expect(userList).toEqual({
      id: '2',
      name: 'jen',
      room: 'meh room'
    });
  });

  it('should not find a user',()=>{
    var userList = users.getUser('123');
    expect(userList).toNotExist();
  });

  it('should return names for fun room',()=>{
    var userList = users.getUserList('fun room');
    expect (userList).toEqual(['mike','julie']);
  });

  it('should return names for meh room',()=>{
    var userList = users.getUserList('meh room');
    expect (userList).toEqual(['jen']);
  });
});
