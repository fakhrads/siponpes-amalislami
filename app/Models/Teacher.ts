import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Teacher extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama_depan: string

  @column()
  public nama_belakang: string

  @column()
  public tempat_lahir: string

  @column()
  public tanggal_lahir: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
