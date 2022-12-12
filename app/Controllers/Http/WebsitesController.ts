import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
export default class WebsitesController {
  public async index({ view }: HttpContextContract) {
    return view.render('home/welcome')
  }

  public async gallery({ view }: HttpContextContract) {
    return view.render('home/gallery')
  }

  public async blog({ view }: HttpContextContract) {
    const data_blog = await Database
                      .from('blogs')
                      .select('blogs.photo_path','blogs.judul','blogs.content','blogs.created_at','blog_categories.category_name')
                      .innerJoin('blog_categories','blogs.category_id','blog_categories.id')

    return view.render('home/blog', {data_blog: data_blog})
  }

  public async blogPreview({ view }: HttpContextContract) {
    return view.render('home/blog_p')
  }

  public async visi({ view }: HttpContextContract) {
    return view.render('home/visi')
  }

  public async sejarah({ view }: HttpContextContract) {
    return view.render('home/sejarah')
  }

  public async kalender({ view }: HttpContextContract) {
    return view.render('home/kalender')
  }

  public async staff({ view }: HttpContextContract) {
    const data = await Database
          .from('karyawan')
          .select('karyawan.photo_path','karyawan.id','karyawan.nama_depan','karyawan.nama_belakang','karyawan.jenis_kelamin','jabatan.nama_jabatan','mata_pelajarans.nama_pelajaran')
          .innerJoin('jabatan','karyawan.jabatan_id','jabatan.id')
          .innerJoin('mata_pelajarans','karyawan.mata_pelajaran_id','mata_pelajarans.id')

    return view.render('home/staff', {data: data})
  }
}
