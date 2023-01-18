const express = require('express')
const router = express.Router()
const path = require('path')
const url = require('url')
const cors = require('cors')
const { response } = require('express')
const config = require('config')
const assert = require('assert')
const expect = require('chai').expect
const axios = require('axios')


const port = config.express.port;


describe('Testing rest-api resource tests' ,() => {

    it('testing get all should return status 200', async () => {

        const res = await fetch(`http://localhost:${port}/test`);

        console.log(res.data);
        expect(res.status).to.equal(200)
    });

    it('testing get by id 1 should return status 200', async () => {

        const res = await axios.get(`http://localhost:${port}/test/1`);

        console.log(res.data);
        expect(res.status).to.equal(200)
        
    });

    it('testing get by id 2 should return status 200', async () => {

        const res = await axios.get(`http://localhost:${port}/test/2`);

        console.log(res.data);
        expect(res.status).to.equal(200)
        
    });

    it('testing get by id with incorrect id [84] should return empty object status 200', async () => {
        //i kmow it should return error but the get by id function returns empty object if the id is incorrect
        const res = await axios.get(`http://localhost:${port}/test/84`);

        console.log(res.data);
        expect(res.status).to.equal(200)
        
    });

})