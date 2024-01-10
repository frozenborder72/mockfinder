const mongoose = require('mongoose')
require('dotenv').config()
require('colors')

const currencies = require('./data/list_currencies')
const Currency = require('./models/currencyModel')
const connectDB = require('./config/db')

connectDB()

const importData = async () => {
  try {
    await Currency.deleteMany()

    await Currency.insertMany(currencies)

    console.log('Currencies imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Currency.deleteMany()

    console.log('Currencies destroyed'.red.inverse)
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
