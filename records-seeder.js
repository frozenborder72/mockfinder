const mongoose = require('mongoose')
require('dotenv').config()
require('colors')

const records = require('./data/record-db-pathfinder')
const Record = require('./models/recordModel')
const connectDB = require('./config/db')

connectDB()

const importData = async () => {
  try {
    await Record.deleteMany()

    await Record.insertMany(records)

    console.log('Records imported'.green.inverse)
    process.exit()
  } catch (error) {
    console.log(`${error}`.red.inverse)
    process.exit(1)
  }
}

const destroyData = async () => {
  try {
    await Record.deleteMany()

    console.log('Records destroyed'.red.inverse)
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
