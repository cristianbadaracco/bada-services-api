import { Request, Response } from 'express'
import { Service } from '../models/Service'
import db from '../db.json'

import ServiceModel, { IService } from '../models/Service'

type ServiceWithoutId = Omit<Service, 'id'>

let services: Service[] = db.services

export const getAllServices = async (req: Request, res: Response) => {
  try {
    const services = await ServiceModel.find()
    res.json(services)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const createService = async (req: Request, res: Response) => {
  try {
    const newService = await ServiceModel.create(req.body)
    res.status(201).json(newService)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const updateService = async (req: Request, res: Response) => {
  const { id } = req.params
  const { name } = req.body

  try {
    const service = await ServiceModel.findByIdAndUpdate(
      id,
      { name },
      { new: true }
    )

    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }

    res.json(service)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}

export const deleteService = async (req: Request, res: Response) => {
  const { id } = req.params

  try {
    const service = await ServiceModel.findByIdAndDelete(id)

    if (!service) {
      return res.status(404).json({ error: 'Service not found' })
    }

    res.sendStatus(204)
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' })
  }
}
