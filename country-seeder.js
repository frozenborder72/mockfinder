const mongoose = require('mongoose')
require('dotenv').config()
require('colors')

const countries = require('./data/list_countries-updated')
const Country = require('./models/countryModel')
const connectDB = require('./config/db')

connectDB()

const importData = async () => {
  try {
    await Country.deleteMany()

    await Country.insertMany(countries)

    console.log('Countries imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Country.deleteMany()

    console.log('Countries destroyed'.red.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

if (process.argv[2] === '-d') {
  destroyData()
} else {
  importData()
}
