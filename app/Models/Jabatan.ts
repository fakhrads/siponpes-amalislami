import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Karyawan from './Karyawan'

export default class Jabatan extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Karyawan)
  public karyawans: HasMany<typeof Karyawan>

  @column()
  public nama_jabatan: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
