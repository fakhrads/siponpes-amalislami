import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Website extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public judul_website: string

  @column()
  public sejarah: string

  @column()
  public visi: string

  @column()
  public misi: string

  @column()
  public sambutan_ketua_yayasan: string

  @column()
  public photo_slide_satu: string

  @column()
  public photo_slide_dua: string

  @column()
  public photo_slide_tiga: string

  @column()
  public photo_ketua_yayasan: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}