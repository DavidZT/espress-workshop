const express = require('express');
const user =  express.Router();
const db = require('../config/database');

user.post("/", async (req, res, next) => {
    const { user_name, user_mail, user_password } = req.body;

    if(user_name && user_mail && user_password){
        let query = "INSERT INTO user(user_name, user_mail, user_password) ";
        query += `VALUES ('${user_name}','${user_mail}','${user_password}')`;
    
        const rows = await db.query(query);
    
        if(rows.affectedRows){
            return res.status(201).json({ code: 201, Message: "Usuario registrado correctamente"});
        }
        return res.status(500).json({ code: 500, Message: "Ocurrio un error"});
    }
    return res.status(500).json({ code: 500, Message: "Campos Incompletos"});

})

user.get("/", async (req, res, next) => {
    const query = "SELECT * FROM user";
    const rows = await db.query(query);

    return res.status(200).json({ code: 200, Message: rows});
});

module.exports = user;