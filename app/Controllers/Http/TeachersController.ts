
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Teacher from 'App/Models/Teacher'
export default class TeachersController {
  public async index({ view }: HttpContextContract) {
    return view.render('admin/pages/teachers')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('admin/pages/teachers_new')
  }

  public async store({ view, request, session }: HttpContextContract) {
    const nip = request.input('nip')
    const nama_depan = request.input('nama_depan')
    const nama_belakang = request.input('nama_belakang')
    const tempat_lahir = request.input('tempat_lahir')
    const tanggal_lahir = request.input('tanggal_lahir')
    try {
      await Teacher.create({
        nip: nip,
        nama_depan: nama_depan,
        nama_belakang: nama_belakang,
        tempat_lahir: tempat_lahir,
        tanggal_lahir: tanggal_lahir,
      })
    } catch(e) {
      session.flash('errors', e)
      return view.render('errors/server-error')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
