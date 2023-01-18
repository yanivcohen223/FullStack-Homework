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


const get_all_tests = () => {
    return connectedKnex('testdb').select('*');
}

const get_test_by_id = id => {
    return connectedKnex('testdb').select('*').where('id', id).first()
}

const insert_test = test => {
    return connectedKnex('testdb').insert(test)
}

const update_test = (id, test) => {
    return connectedKnex('testdb').where('id', id).update(test)
}

const del_test_by_id = (id) => {
    return connectedKnex('testdb').where('id', id).del()
}

module.exports = {
    get_all_tests,
    get_test_by_id,
    insert_test,
    update_test, 
    del_test_by_id
}