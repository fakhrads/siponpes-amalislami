import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'websites'

  public async up () {
    this.schema.alterTable(this.tableName, (table) => {
      table.string('photo_ketua_yayasan')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
