const express = require('express')
const connection = require('../database/connection')
const crypto = require('crypto')

module.exports = {
    //CADASTRO DE ONGS
    async create(req, res){
        console.log(req.body);
        var { name, email, whatsapp, city, uf} = req.body
        
        
        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id, 
            name,
            email, 
            whatsapp, 
            city, 
            uf
        })    
        return res.json({ id })
    },

    //listagem de ONGS
    async index(req, res){
        const ongs = await connection('ongs').select('*')
        return res.json(ongs)
    }
}