import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Karyawan extends BaseModel {
  
  static get table () {
    return 'karyawan'
  }

  @column({ isPrimary: true })
  public id: number

  @column()
  public users_id: number

  @column()
  public jabatan_id: number

  @column()
  public mata_pelajaran_id: number

  @column()
  public nama_depan: string

  @column()
  public photo_path: string

  @column()
  public nama_belakang: string

  @column()
  public jenis_kelamin: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
