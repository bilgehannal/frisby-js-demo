const testName = require('path').basename(__filename).split('.')[0]
const functions = require(`../api-data/${testName}/functions.js`)

describe('Restcountries API Validation', () => {

    /*
    * Goal: Validate the api is reachable and all the countries are active
    */
    it('Validation API v2', () => {
        return functions.validate()
    })
})