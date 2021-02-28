const properties = require('./properties.json')
const globalVariables = require('../../global-variables.json')
const LOGGER = require('../../utils/logger')
const frisby = require('frisby')

module.exports = {

    properties,

    areValuesValidFor(countryName) {
        return frisby.get(properties.urlForCountries[countryName])
            .expect("status", globalVariables.statusCodes.SUCCESS)
            .expect("header", "Content-Type", "application/json;charset=utf-8")
            .then((res) => {
                let body = JSON.parse(res.body)
                LOGGER.debug(`Body Content: ${JSON.stringify(body)}`)
                expect(Array.isArray(body)).toBe(true)

                expect(body.length).toBe(1)

                properties.validKeys.forEach(key => {
                    expect(body[0][key]).toBeDefined()
                    LOGGER.debug(`Valid key: ${key}`)
                })

                properties.keyTypes.forEach(element => {
                    expect(typeof(body[0][element.key])).toBe(element.type)
                    LOGGER.debug(`Type check element : ${JSON.stringify(element)}`)
                })
            })
    },

    checkCityCapitalOfSecondBorderOfACountry(countryName, capitalName) {
        return frisby.
            get(properties.urlForCountries[countryName])
                .expect("status", globalVariables.statusCodes.SUCCESS)
                .expect("header", "Content-Type", "application/json;charset=utf-8")
            .then((res) => {
                let body = JSON.parse(res.body)
                LOGGER.debug(`Body Content: ${JSON.stringify(body)}`)
                const borderUrl = `${properties.baseUrlForCountryWithAlpha3code}/${body[0].borders[1]}`.substring(1)
                LOGGER.debug(`Border url: ${borderUrl}`)
                return frisby.
                    get(borderUrl)
                        .expect("status", globalVariables.statusCodes.SUCCESS)
                        .expect("header", "Content-Type", "application/json;charset=utf-8")
                        .then((resBorder) => {
                            let bodyRes = JSON.parse(resBorder.body)
                            const capital = bodyRes.capital
                            expect(capital).toBe(capitalName)
                        })
            })
    }
    
}