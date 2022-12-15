import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Website from 'App/Models/Website'

export default class extends BaseSeeder {
  public async run () {
    await Website.create(
      {
        judul_website: "Yayasan Amal Islami",
        sejarah: "Lorem Ipsum",
        visi: "Lorem Ipsum",
        misi: "Lorem Ipsum",
        photo_slide_satu: "",
        photo_slide_dua: "",
        photo_slide_tiga: "",
      },
    )
  }
}
