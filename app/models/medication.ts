import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Medication extends BaseModel {
  @column({ isPrimary: true })
  declare medication_id: number

  @column()
  declare user_id: number

  @column()
  declare name: string

  @column()
  declare dosage: string

  @column()
  declare frequency: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
