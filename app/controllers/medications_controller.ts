import type { HttpContext } from '@adonisjs/core/http'
import MedicationService from '#services/medications_service'

export default class MedicationsController {
  private medicationService: MedicationService

  constructor() {
    this.medicationService = new MedicationService()
  }

  async index({ response }: HttpContext) {
    const medications = await this.medicationService.getAllMedications()
    return response.json(medications)
  }

  async store({ request, response }: HttpContext) {
    const data = request.only(['user_id', 'name', 'dosage', 'frequency'])
    const medication = await this.medicationService.createMedication(data)
    return response.json(medication)
  }

  async show({ params, response }: HttpContext) {
    const medication = await this.medicationService.getMedicationByUser(params.userId)
    return response.json(medication)
  }

  async update({ params, request, response }: HttpContext) {
    const data = request.only(['user_id', 'name', 'dosage', 'frequency'])
    const medication = await this.medicationService.updateMedication(params.medicationId, data)
    return response.json(medication)
  }

  async destroy({ params, response }: HttpContext) {
    await this.medicationService.deleteMedication(params.medicationId)
    return response.json({ message: 'Medication deleted with success!' })
  }
}
