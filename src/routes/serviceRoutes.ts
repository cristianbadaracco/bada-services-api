import { Router } from 'express'
import * as ServiceController from '../controllers/serviceController'

const router = Router()

router.get('/services', ServiceController.getAllServices)
router.post('/services', ServiceController.createService)
router.put('/services/:id', ServiceController.updateService)
router.delete('/services/:id', ServiceController.deleteService)

export default router
