const testName = require('path').basename(__filename).split('.')[0]
const functions = require(`../api-data/${testName}/functions.js`)

describe('Country Control', () => {

    /*
    * Goal: Check the values of a country valid.
    */
    it('Check the country values are valid.', () => {
        return functions.areValuesValidFor('turkey')
    })

    /*
    * Goal: It will check the Turkey's borders and Baku is the capital of the Turkey's second border
    */
   it('is Baku capital of the country which is second border of Turkey', () => {
        return functions.checkCityCapitalOfSecondBorderOfACountry('turkey', "Baku")
    })
    
})