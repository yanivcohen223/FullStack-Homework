// index.js
const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')
const knex = require('knex')

const connectedKnex = knex({
    client: 'sqlite3',
    connection: {
        filename: "database/db_company.db"
    }
})


const port = 9000;

const app = express()

// to use body parameters
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join('.', '/static/'))) // /static/index.html
// page1.html

// parameters -
// 1. query params  <url> ? x = 1 & y = 2
// 2. path params   <url> / 1 
// 3. body 
// 4. headers
// ========================================== REST
// REST BASIC:
// 1.GET 2. GET by ID 3.POST (one-item) 4.PUT (update/replace/insert) 5.DELETE 6.PATCH (update only)
// EXTRA ==>
//  7.POST-MANY (json array)
//  8 SMART GET query params
// GRAPH-QL
// get all
app.get('/employee', async (req, resp) => {
    try {
        const employees = await connectedKnex('COMPANY').select('*');
        resp.status(200).json({ employees })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

// ADD
app.post('/company', async (req, resp) => {
    console.log(req.body);
    const employee = req.body
    try {
        if (! is_valid_employee (employee)) {
            resp.status(400).json({ error: 'values of employee are not llegal'})
            return
        }
        const result = await connectedKnex('COMPANY').insert(employee)
        resp.status(201).json({
             new_employee : { ...employee, ID: result[0] },
             url: `http://localhost:9000/company/${result}` 
            })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

// PUT -- UPDATE/replace (or insert)
app.put('/employee/:id', async (req, resp) => {
    console.log(req.body);
    const employee = req.body
    try {
        if (! is_valid_employee (employee)) {
            resp.status(400).json({ error: 'values of employee are not llegal'})
            return
        }
        const result = await connectedKnex('COMPANY').where('id', req.params.id).update(employee)
        resp.status(200).json({
             status: 'updated',
             'how many rows updated': result
            })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})
// DELETE 
app.delete('/employee/:id', async (req, resp) => {
    try {
        const result = await connectedKnex('COMPANY').where('id', req.params.id).del()
        resp.status(200).json({
            status: 'success',
            "how many deleted": result
        })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }

})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})
