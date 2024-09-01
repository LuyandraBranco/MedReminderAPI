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
    const medication = await this.medicationService.getMedicationByUser(params.user_id)
    return response.json(medication)
  }

  async update({ params, request, response }: HttpContext) {
    const data = request.only(['user_id', 'name', 'dosage', 'frequency'])
    const medication = await this.medicationService.updateMedication(params.medication_id, data)
    return response.json(medication)
  }

  async destroy({ params, response }: HttpContext) {
    await this.medicationService.deleteMedication(params.medication_id)
    return response.json({ message: 'Medication deleted with success!' })
  }
}
