const express = require('express')
const app = express()
const mysql = require('mysql')
app.get("/",(req,res) => {
  const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    database:'test'
  })
  con.query("select * from testingtb",(err,rows,fields) => {
    res.json(rows)
  })
})

app.get("/:id",(req,res) => {
  console.log("wow its working")
  res.send("thank you shivbaba")
})

app.listen(3003,() =>{
  console.log("hello world")
})
