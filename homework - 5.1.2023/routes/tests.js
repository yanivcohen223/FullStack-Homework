const express = require('express')
const router = express.Router()
const knex = require('knex')
const config = require('config')
const logger = require('../logger/logger')
const { log } = require('winston')

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
//================================

/** 
*  @swagger
*  components:
*     schemas:
*       Tests:
*         type: object
*         required:
*           - id
*           - updateat
*           - name
*           - date
*           - Course-id
*         properties:
*           id:
*             type: integer
*             description: The auto-generated id of the tester.
*           updateat:
*             type: string
*             description: The time of the last update.
*           name:
*             type: string
*             description: Who took the test.
*           date:
*             type: string
*             description: the time that the teacher upload the grade.
*           Course-id:
*             type: integer
*             description: the result of the test.
*         example:
*              id: 1
*              updateat: "2023-01-11,20:16:18"
*              name: lior
*              date: 2023-01-11, 16:16:18
*              Course-id: 97
 */

/**
*  @swagger
*  tags:
*    name: Tests
*    description: API to manage your tests.
*/


// get all
/**
*  @swagger
*	/test/:
*     get:
*       summary: Lists of all the tests
*       tags: [tests]
*       responses:
*         "200":
*           description: The list ofthe tests.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/test'
*/
router.get('/', async (req, resp) => {
    try {
        const tests = await connectedKnex('test').select('*');
        console.log(tests);
        resp.status(200).json({ tests })
    }
    catch (err) {
        logger.error(`error list of tests isnt found. ${JSON.stringify(test)} ${err.message}`)
        resp.status(500).json({ "error": err.message })
    }
})

// get end point by id
/**
*  @swagger
*   /test/{id}:
*     get:
*       summary: Gets a tests by id
*       tags: [tests]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The test id
*       responses:
*         "200":
*           description: The list of tests.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/test'
*         "404":
*           description: test not found.
*/
router.get('/:id', async (req, resp) => {
    try {
        const tests = await connectedKnex('test').select('*').where('id', req.params.id).first()
        console.log(tests);
        resp.status(200).json(tests? tests:{})
    }
    catch (err) {
        console.log(err);
        logger.error(`test with that id wasnt found. ${JSON.stringify(tests)} ${err.message}`)
        resp.status(500).json({ "error": err.message })
    }
})

function is_valid_test(obj) {
    const result = obj.hasOwnProperty('updateat') && obj.hasOwnProperty('name')
                   && obj.hasOwnProperty('courseid');               
    if (!result) {
        logger.error(`bad object was recieved. ${JSON.stringify(obj)}`)
    }
    return result;
 
}

// ADD
/**
*     @swagger
*     /test/:
*         post:
*           summary: Creates a new test
*           tags: [tests]
*           requestBody:
*             required: true
*             content:
*               application/json:
*                 schema:
*                   $ref: '#/components/schemas/tests'
*           responses:
*             "200":
*               description: The created tests.
*               content:
*                 application/json:
*                   schema:
*                     $ref: '#/components/schemas/test'
*/
router.post('/', async (req, resp) => {
    console.log(req.body);
    const test = req.body
    try {
        if (! is_valid_test (test)) {
            logger.error(`bad object was recieved. ${JSON.stringify(test)}`)
            resp.status(400).json({ error: 'values of test are not llegal'})
            return
        }
        const result = await connectedKnex('test').returning('id').insert(test)
        console.log(result);
        resp.status(201).json({
             new_test : { ...test, ID: result[0].id },
             url: `http://localhost:8080/test/${result[0].id}` 
            })
    }
    catch (err) {
        console.log(err);
        logger.error(`error during POST in tests router. test = ${JSON.stringify(test)} ${err.message}`)
        resp.status(500).json({ "error": err.message })
    }
})

// PUT -- UPDATE/replace (or insert)
/**
*  @swagger
*	/test/{id}:
*     put:
*       summary: Updates a test
*       tags: [tests]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The test id
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/test'
*       responses:
*         "204":
*           description: Update was successful.
*         "404":
*           description: test was not found.
*/
router.put('/:id', async (req, resp) => {
    console.log(req.body);
    const test = req.body
    try {
        if (! is_valid_test (test)) {
            logger.error(`bad object was recieved. ${JSON.stringify(test)}`)
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
        logger.error(`error during PUT in tests router. test = ${JSON.stringify(test)} ${err.message}`)
        resp.status(500).json({ "error": err.message })
    }
})

// DELETE 
/**
*  @swagger
*	/test/{id}:
*     delete:
*       summary: Deletes a test by id
*       tags: [tests]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The tests id
*       responses:
*         "204":
*           description: Delete was successful.
*         "404":
*           description: test was not found.
*/
router.delete('/:id', async (req, resp) => {
    try {
        const result = await connectedKnex('test').where('id', req.params.id).del()
        resp.status(200).json({
            status: 'success',
            "how many deleted": result
        })
    }
    catch (err) {
        logger.error(`error during DELETE in tests router. test = ${JSON.stringify(test)} ${err.message}`)
        resp.status(500).json({ "error": err.message })
    }

})

module.exports = router;