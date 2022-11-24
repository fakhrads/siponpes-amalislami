import { DateTime } from 'luxon'
import { 
  BaseModel, 
  column,
  hasMany,
  HasMany } from '@ioc:Adonis/Lucid/Orm'
import Blog from 'App/Models/Blog'

export default class BlogCategory extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Blog)
  public blogs: HasMany<typeof Blog>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
