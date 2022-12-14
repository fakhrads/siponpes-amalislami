import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Gallery extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nama_kegiatan: string

  @column()
  public deskripsi: string

  @column()
  public photo_path: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
