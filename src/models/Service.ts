import mongoose, { Document, Schema } from 'mongoose'

export interface Service {
  id: number
  name: string
}

/* export interface IService extends Document {
  name: string
} */

export type IService = Omit<Service, 'id'>

const ServiceSchema: Schema = new Schema({
  name: { type: String, required: true }
})

export default mongoose.model<IService>('Service', ServiceSchema)
