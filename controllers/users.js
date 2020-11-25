var Model = require('../models')
const e = require('express')

const users = {
    getAllUsers: async(req, res) => {
        let users = []

        try {
            users = await Model.users.findAll() 
        } catch (err) {
            console.log(err)
        }

        res.json(users)
    },

    getUser: async(req, res) => {
        let user = []

        try {
            user = await Model.users.findOne({
                where: {
                    id: req.params.id
                }
            })
        } catch (err) {
            console.log(err);
        }

        res.json(user)
    },

    createUser: async(req, res) => {
        let user = {}

        console.log(req)
        try {
            user = await Model.users.create({
                name: req.body.name,
                email: req.body.email,
                phone: req.body.phone
            })
        } catch (err) {
            console.log(err)
        }

        res.json(user)
    },

    updateUser: async(req, res) => {
        let user = {}

        try {
            await Model.users.update(
                req.body, {
                    where: {
                        id: req.params.id
                    }
                }
            )
        } catch (err) {
            console.log(err)
        }

        res.json(user)
    },

    deleteUser: async(req, res) => {
        await Model.users.destroy({
            where: {
                id: req.params.id
            }
        })

        res.status(204).json({
            status: 'User deleted!'
        })
    }
}

module.exports = users;