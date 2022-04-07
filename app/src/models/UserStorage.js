"use strict"

class UserStorage{
  static #users = {
    id : ["abc","박팀장","최대리"],
    pw : ["1234","1234","1234"],
    name : ["abab", "cccc", "dddd"],
  };
  
  static getUsers(...fields){
    const users = this.#users;
    const newusers = fields.reduce((newusers,field) => {
      if(users.hasOwnProperty(field)){
        newusers[field] = users[field];
      }
      return newusers;
    }, {});
    console.log(newusers);
    return newusers;
  }

  static getUserInfo(id){
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userInfo = Object.keys(users).reduce((newUser, info) => {  //Object.keys(users) => [id,pw,name]
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }
}

module.exports = UserStorage;