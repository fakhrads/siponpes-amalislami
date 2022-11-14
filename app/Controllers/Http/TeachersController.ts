
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

  public async edit({ view, request, session, response }: HttpContextContract) {
    const nip = request.param('nip')

    try {
      const teachers = await Teacher.query().where('nip',nip).firstOrFail()
      return view.render('admin/pages/teachers_edit', { data: teachers })
    } catch(e) {
      return response.json(e)
      //session.flash('errors', e)
      //return response.redirect().back()
    }
  }

  public async update({ request, response, session }: HttpContextContract) {

    const nip = request.input('nip')
    const nama_depan = request.input('nama_depan')
    const nama_belakang = request.input('nama_belakang')
    const tempat_lahir = request.input('tempat_lahir')
    const tanggal_lahir = request.input('tanggal_lahir')

    try {
      const teachers = await Teacher.findOrFail(nip)

      teachers.nip = nip
      teachers.nama_depan = nama_depan
      teachers.nama_belakang = nama_belakang
      teachers.tempat_lahir = tempat_lahir
      teachers.tanggal_lahir = tanggal_lahir

      await teachers.save()

      session.flash('success', "Data berhasil diubah")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', "Data tidak berhasil diubah")
      return response.redirect().back()
    }
  }

  public async destroy({ request, response, session }: HttpContextContract) {

    const nip = request.input('nip')
    try {
      const teachers = await Teacher.findOrFail(nip)
      await teachers.delete()
      
      session.flash('success', "Data berhasil di hapus")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e)
      return response.redirect().back()
    }
  }
}
