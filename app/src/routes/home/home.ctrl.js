"use strict"

const output = {
  home : (req, res) => {
    res.render("home/index");
  },
  
  login : (req, res) => {
    res.render("home/login");
  },
};

const users = {
  id : ["abc","박팀장","최대리"],
  pw : ["1234","1234","1234"],
};

const process = {
  login : (req, res) =>{
    const id = req.body.id,
          pw = req.body.psword;

    if(users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.pw[idx] === pw){
        return res.json({
          success: true,
        });
      }
    }

    return res.json({
      success : false,
      msg : "로그인에 실패하였습니다",
    });
  }
}

module.exports = {
  output,
  process,
}; //index.js에서 사용

/*
key만 넣어주면
key : key 이렇게 자동 생성된다.
*/