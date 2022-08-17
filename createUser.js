import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import User from './models/userModel.js'

dotenv.config({ path: './config.env' })

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)
mongoose.connect(DB).then((con) => {
  console.log('Database Connected')
})

const importUser = async () => {
  try {
    const user = {
      username: 'username',
      password: bcrypt.hashSync('password', 10),
    }

    await User.create(user)

    console.log('User created!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}`.red.inverse)
    process.exit(1)
  }
}

importUser()
