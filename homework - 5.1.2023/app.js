const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')
const knex = require('knex')
const config = require('config')

const connectedKnex = knex({
    client: 'pg',
    version: config.db.version,
    connection: {
        host: config.db.host,
        user: config.db.user,
        password: config.db.password,
        database: config.db.database
    }
})

const port = 9000;

const app = express()

// to use body parameters
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join('.', '/static/')));

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
app.get('/test', async (req, resp) => {
    try {
        const tests = await connectedKnex('test').select('*');
        console.log(tests);
        resp.status(200).json({ tests })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

// get end point by id
app.get('/test/:id', async (req, resp) => {
    try {
        const tests = await connectedKnex('test').select('*').where('id', req.params.id).first()
        resp.status(200).json(tests)
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

function is_valid_test(obj) {
    return obj.hasOwnProperty('updateat') && obj.hasOwnProperty('name') && 
        obj.hasOwnProperty('date') && obj.hasOwnProperty('courseid') 
}

// ADD
app.post('/test', async (req, resp) => {
    console.log(req.body);
    const test = req.body
    try {
        if (! is_valid_test (test)) {
            resp.status(400).json({ error: 'values of test are not llegal'})
            return
        }
        const result = await connectedKnex('test').insert(test)
        resp.status(201).json({
             new_test : { ...test, ID: result[0] },
             url: `http://localhost:8080/test/${result}` 
            })
    }
    catch (err) {
        console.log(err);
        resp.status(500).json({ "error": err.message })
    }
})

// PUT -- UPDATE/replace (or insert)
app.put('/test/:id', async (req, resp) => {
    console.log(req.body);
    const test = req.body
    try {
        if (! is_valid_test (test)) {
            resp.status(400).json({ error: 'values of test are not llegal'})
            return
        }
        const result = await connectedKnex('test').where('id', req.params.id).update(test)
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
app.delete('/test/:id', async (req, resp) => {
    try {
        const result = await connectedKnex('test').where('id', req.params.id).del()
        resp.status(200).json({
            status: 'success',
            "how many deleted": result
        })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }

})
// PATCH -- UPDATE 
app.patch('/test/:id', (req, resp) => {
    console.log(req.params.id);
    // actually delete ... later
    // response
    resp.writeHead(200)
    resp.end('Successfully updated patched')
})

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})