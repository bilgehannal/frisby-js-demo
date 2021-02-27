const properties = require('./properties.json')
const globalVariables = require('../../global-variables.json')
const LOGGER = require('../../utils/logger')
const frisby = require('frisby')
const helper = require('../../utils/helper')

module.exports = {

    properties,

    validate() {
        return frisby.get(properties.validationUrl)
            .expect("status", globalVariables.statusCodes.SUCCESS)
            .expect("header", "Content-Type", "application/json;charset=utf-8")
            .then((res) => {
                let body = JSON.parse(res.body)

                expect(Array.isArray(body)).toBe(true)
                expect(body.length).toBe(properties.expectedSizeOfArray)

                const country = body.find(country => country.name === properties.countryTest.name)
                expect(country).toBeDefined()
                LOGGER.debug(`Country: ${JSON.stringify(country)}`)

                expect(country.alpha2Code).toBe(properties.countryTest.alpha2Code)
                expect(country.alpha3Code).toBe(properties.countryTest.alpha3Code)

                // It will compare the object and the sorted version of the object to check the alphabetic order
                // Note: Of-course its time complexity is bigger, it could be better according to the time complexity
                //      but it is more understandable and the waist of time can be ignored for 250 values.
                const nameArray = body.map((country) => { 
                    return country.name; 
                })
                const sortedNameArray = helper.sortStringArray(nameArray)
                expect(helper.areTwoObjectValueEqual(nameArray, sortedNameArray)).toBe(true)
                LOGGER.debug(`NameArray: ${nameArray}`)
                LOGGER.debug(`SortedNameArray: ${sortedNameArray}`)
            })
    }
    
}