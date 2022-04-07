"use strict"

const home = (req, res) => {
  res.render("home/index");
};

const login = (req, res) => {
  res.render("home/login");
};

module.exports = {
  home,
  login,
};

/*
key만 넣어주면
key : key 이렇게 자동 생성된다.
*/