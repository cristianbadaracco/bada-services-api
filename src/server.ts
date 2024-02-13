import express, { Application, Request, Response, NextFunction } from 'express'
import mongoose from 'mongoose'

import { MONGODB_URI } from './config'

import serviceRoutes from './routes/serviceRoutes'

const app: Application = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello, world!')
})

app.use('/api', serviceRoutes)

const PORT = process.env.PORT || 3001

mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error)
  })
