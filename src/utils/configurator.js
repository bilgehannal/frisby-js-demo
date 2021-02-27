const fs = require('fs')
const LOGGER = require('./logger')

const configSetter = require(`../../config/${process.env.CONFIG}.json`)

const fileData = Object.keys(configSetter).reduce((total, item) => {
  return `${total} ${item}=${configSetter[item]}\n`
}, '')

fs.writeFile('.env', fileData, () => {
  LOGGER.info('Env Set Succesfully!')
})
