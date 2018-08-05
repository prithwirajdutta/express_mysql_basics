const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyparser = require('body-parser')

app.use(bodyparser.urlencoded({extended:false}))
app.use(express.static('./public'))

function getcon(){
  return  mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'test'
  })
}

app.post("/user_create",(req,res)=>{
  const id = req.body.id
  const name = req.body.name
  console.log(id+" "+name)
const  sql = "Insert into testingtb(id,name)values(?,?)"
  getcon().query(sql,[id,name],(err,result) => {
    if(err){
      console.log("failed to insert data")
      res.sendStatus(500)
      return
    }
    console.log("record inserted")
    res.end()
  })
})


app.get("/fetchdata",(req,res) => {

  getcon().query("select * from testingtb",(err,rows,fields) => {
    if (err) throw err;
    res.json(rows)
  })
})
/*
app.get("/:id",(req,res) => {
  console.log("wow its working")
})
*/
app.listen(3003,() =>{
  console.log("hello world")
})
