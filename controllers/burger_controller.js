// dependencies
var express = require('express')
var router = express.Router()

// import data model
var db = require('../models')

// redirect the page to go to index
router.get('/', function (req, res) {
    res.redirect('/index')
})

// renders view.handlebars and finds all info in database
router.get('/index', function (req, res) {
    db.Burger.findAll({}).then(function (data) {
        var hbsObject = {
            burgers: data
        }
        res.render('./index', hbsObject)
    })
})

router.get('/api/customers', function (req, res) {
    db.Customer.findAll({}).then(function (data) {
        var hbsObject = {
            customers: data
        }
        res.render('./index', hbsObject)
    })
})

// creates new burger in and saves to database
router.post('/api/burgers', function (req, res) {
    db.Burger.create({
        burger_name: req.body.burger_name,
        devoured: false
    }).then(function (dbBurger) {
        res.json(dbBurger)
    })
})

// updates burger from devoured = false to devoured = true at id = id
router.put('/api/burgers/:id', function (req, res) {
    var id = req.params.id

    db.Burger.update({
        devoured: true
    }, {
            where: {
                id: id
            }
        }).then(function (dbBurger) {
            res.json(dbBurger)
        })
})

// deletes burger from database at id = id
router.delete('/api/burgers/:id', function (req, res) {
    var id = req.params.id

    db.Burger.destroy({
        where: {
            id: id
        }
    }).then(function (dbBurger) {
        res.json(dbBurger)
    })
})

module.exports = router


