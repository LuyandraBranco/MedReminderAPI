import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Medication extends BaseModel {
  @column({ isPrimary: true })
  declare medicationId: number

  @column()
  declare userId: number

  @column()
  declare name: string

  @column()
  declare dosage: string

  @column()
  declare frequency: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
