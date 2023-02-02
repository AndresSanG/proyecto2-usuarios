const express = require('express')
const app = express()
app.use(express.json())
const users = [{
	"id" :1,
	"firstName": "Sahid",
    "lastName": "Kick",
    "email": "sahid.kick@academlo.com",
    "password": "root",
    "age": 22
},
{
	"id" :2,
	"firstName": "Andres",
    "lastName": "Santiago",
    "email": "andres@mail.com",
    "password": "root",
    "age": 35
}]
let baseId = 3
app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.get('/users/:id',(req, res) => {
    const id = Number(req.params.id)
    const data = users.find((item) => id===item.id)
    if(data){
        res.status(200).json(
            data
        )
    }else{
        res.status(404).json({
            message:'invalid ID'
        })
    }

})

app.post('/users',(req,res) =>{
    const data = req.body
    const newUser = {
        id: baseId++,
        firstName:data.firstName,
        lastName:data.lastName,
        email:data.email,
        password:data.password,
        age:data.age
    }
    users.push(newUser)
    res.status(201).json(newUser)
})
app.listen(9000,() => {
    console.log("working on port 9000")
})



module.exports = app
