const fs = require('fs');

const home = (req, res) => {
  res.render("home");
};

const read = (req,res)=> {
  const {body, file: {path}} = req;
  //console.log(file);
  fs.readFile(path,'utf8',(err,data)=>{if(err) throw err; res.render("read",{data:data})});
}
  

module.exports = {
  home,
  read
};

/*
export const home = (req, res) => {
  res.render("home");
};
*/