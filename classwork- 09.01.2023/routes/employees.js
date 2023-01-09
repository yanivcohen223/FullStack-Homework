const express = require('express')
const router = express.Router()
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

/**
*  @swagger
*  components:
*     schemas:
*       Employee:
*         type: object
*         required:
*           - id
*           - name
*           - age
*           - address
*           - salary
*         properties:
*           id:
*             type: integer
*             description: The auto-generated id of the employee.
*           name:
*             type: string
*             description: The name of the employee.
*           age:
*             type: int
*             description: age of the employee
*           address:
*             type: string
*             description: The address of the employee.
*           salary:
*             type: int
*             description: salary of the employee
*         example:
*           name: Kim
*           age: 22
*           address: South-Hall
*           salary: 45000
*/

/**
*  @swagger
*  tags:
*    name: Employees
*    description: API to manage your company.
*/

// ========================================== REST
// REST BASIC:
// 1.GET 2. GET by ID 3.POST (one-item) 4.PUT (update/replace/insert) 5.DELETE 6.PATCH (update only)
// EXTRA ==>
//  7.POST-MANY (json array)
//  8 SMART GET query params
// GRAPH-QL
// get all

/**
*  @swagger
*   /employee/:
*     get:
*       summary: List all of the employees
*       tags: [Employees]
*       responses:
*         "200":
*           description: The list of employees.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Employee'
*/
router.get('/', async (req, resp) => {
    try {
        const employees = await connectedKnex('employee').select('*');
        console.log(employees);
        resp.status(200).json({ employees })
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

/**
*  @swagger
*   /employee/{id}:
*     get:
*       summary: Gets a employee by id
*       tags: [Employees]
*       parameters:
*         - in: path
*           name: id
*           schema:
*             type: integer
*           required: true
*           description: The employee id
*       responses:
*         "200":
*           description: The list of employees.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Employee'
*         "404":
*           description: employee does not found.
*/
//get end point by id
router.get('/:id', async (req, resp) => {
    try {
        const employees = await connectedKnex('employee').select('*').where('id', req.params.id).first()
        resp.status(200).json(employees)
    }
    catch (err) {
        resp.status(500).json({ "error": err.message })
    }
})

function is_valid_employee(obj) {
    return obj.hasOwnProperty('name') && obj.hasOwnProperty('age') && 
        obj.hasOwnProperty('address') && obj.hasOwnProperty('salary') 
}

/**
* 
* @swagger
* /employee/:
*     post:
*       summary: Creates a new employee
*       tags: [Employees]
*       requestBody:
*         required: true
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Employee'
*       responses:
*         "200":
*           description: The created employee.
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Employee'
*/
// ADD
router.post('/', async (req, resp) => {
    console.log(req.body);
    const employee = req.body
    try {
        if (! is_valid_employee (employee)) {
            resp.status(400).json({ error: 'values of employee are not llegal'})
            return
        }
        const result = await connectedKnex('employee').insert(employee)
        resp.status(201).json({
             new_employee : { ...employee, ID: result[0] },
             url: `http://localhost:8080/employee/${result}` 
            })
    }
    catch (err) {
        console.log(err);
        resp.status(500).json({ "error": err.message })
    }
})

// PUT -- UPDATE/replace (or insert)
router.put('/:id', async (req, resp) => {
    console.log(req.body);
    const employee = req.body
    try {
        if (! is_valid_employee (employee)) {
            resp.status(400).json({ error: 'values of employee are not llegal'})
            return
        }
        const result = await connectedKnex('employee').where('id', req.params.id).update(employee)
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
router.delete('/:id', async (req, resp) => {
    try {
        const result = await connectedKnex('employee').where('id', req.params.id).del()
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
router.patch('/:id', (req, resp) => {
    console.log(req.params.id);
    // actually delete ... later
    // response
    resp.writeHead(200)
    resp.end('Successfully updated patched')
})


module.exports = router;