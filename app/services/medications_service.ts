import Medication from '#models/medication'
import { MedicationType } from '../types/medication.js'

export default class MedicationService {
  async createMedication(medication_data: MedicationType) {
    return Medication.create(medication_data)
  }

  async getAllMedications() {
    return Medication.all()
  }

  async getMedicationByUser(user_id: number) {
    return Medication.findOrFail(user_id)
  }

  async updateMedication(medication_id: number, medication_data: MedicationType) {
    const medication = await Medication.findOrFail(medication_id)
    medication.merge(medication_data)
    await medication.save()
    return medication
  }

  async deleteMedication(matriculation_id: number) {
    const medication = await Medication.findOrFail(matriculation_id)
    await medication.delete()
  }
}
