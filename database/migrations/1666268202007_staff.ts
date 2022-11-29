import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'karyawan'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('users_id')
        .unsigned()
        .references('users.id')
        .onDelete('CASCADE') 
      table
        .integer('jabatan_id')
        .unsigned()
        .references('jabatan.id')
        .onDelete('CASCADE') 
      table
        .integer('mata_pelajaran_id')
        .unsigned()
        .references('mata_pelajarans.id')
        .onDelete('CASCADE') 
      table.string('nama_depan',100).notNullable()
      table.string('nama_belakang',100).notNullable()
      table.string('jenis_kelamin',50).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
