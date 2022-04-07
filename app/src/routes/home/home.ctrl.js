"use strict"

const User = require('../../models/User');

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
};

const process = {
  login : (req, res) =>{
    const user = new User(req.body);
    const respones = user.login();
    return res.json(respones);
  },
}

module.exports = {
  output,
  process,
}; //index.js에서 사용

/*
key만 넣어주면
key : key 이렇게 자동 생성된다.
*/