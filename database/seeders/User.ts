import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        name: 'Fakhri Adi Saputra',
        email: 'fakhrads.id@gmail.com',
        password: 'secret',
      },
      {
        name: 'Fauzi Fikrinullah',
        email: 'fauzifikrinullah@gmail.com',
        password: 'secret',
      },
      {
        name: 'Ji Kun',
        email: 'jikun@gmail.com',
        password: 'secret',
      },
    ])
  }
}
