import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Karyawan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama_depan: string

  @column()
  public nama_belakang: string

  @column()
  public jenis_kelamin: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
