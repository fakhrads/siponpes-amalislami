import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { 
  column, 
  beforeSave, 
  BaseModel,
  hasMany,
  HasMany 
} from '@ioc:Adonis/Lucid/Orm'
import Blog from 'App/Models/Blog'
import Prestasi from 'App/Models/Prestasi'
import Gallery from 'App/Models/Gallery'
import Event from './Event'
export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @hasMany(() => Prestasi)
  public achievements: HasMany<typeof Prestasi>

  @hasMany(() => Event)
  public event: HasMany<typeof Event>

  @hasMany(() => Blog)
  public blogs: HasMany<typeof Blog>

  @hasMany(() => Gallery)
  public galleries: HasMany<typeof Gallery>

  @column()
  public nama: string

  @column()
  public email: string

  @column()
  public level: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
