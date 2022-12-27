import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Prestasi extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public users_id: number

  @column()
  public title: string

  @column()
  public description: string

  @column()
  public photo_path: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
