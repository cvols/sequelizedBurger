// dependencies
var express = require('express')
var routed = express.Router()

// import data model
var db = require('../models')

// routed.get('/api/customers', function (req, res) {
//     db.Customer.findAll({}).then(function (data) {
//         var hbsObject = {
//             customers: data
//         }
//         res.render('./index', hbsObject)
//     })
// })

// creates new customer in customers table and saves to database
routed.post('/api/customers', function (req, res) {
    db.Customer.create({
        customer_name: req.body.customer_name
    }).then(function(dbCustomer) {
        res.json(dbCustomer)
    })
})

module.exports = routed