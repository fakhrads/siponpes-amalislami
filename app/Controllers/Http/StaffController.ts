import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Karyawan from 'App/Models/Karyawan'

export default class StaffController {
  public async index({ view }: HttpContextContract) {
    return view.render('admin/pages/karyawan')
  }

  public async create({ view}: HttpContextContract) {
    return view.render('admin/pages/karyawan_new')
  }

  public async store({ request, response, session }: HttpContextContract) {
    const id_matapelajaran = request.input('id_matapelajaran')
    const nama_depan = request.input('nama_depan')
    const nama_belakang = request.input('nama_belakang')
    const jenis_kelamin = request.input('jenis_kelamin')

    try {
      await Karyawan.create({
        mata_pelajaran_id: id_matapelajaran,
        nama_depan: nama_depan,
        nama_belakang: nama_belakang,
        jenis_kelamin: jenis_kelamin
      })
      session.flash('success','Data Karyawan Berhasil Ditambah!')
      response.redirect().back()
    } catch (e) {
      session.flash('error',e)
      response.redirect().back()
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({ view, request, session, response }: HttpContextContract) {
    const id = request.param('id')
    
    try {
      const position = await Karyawan.query().where('id',id).firstOrFail()
      return view.render('admin/pages/karyawan_edit', {data: position})
    } catch(e) {
      session.flash('errors', e)
      //return response.json(e)
      return response.redirect().back()
    }

  }

  public async update({ request, response, session}: HttpContextContract) {
    const id = request.input('id')
    const id_jabatan = request.input('id_jabatan')
    const id_matapelajaran = request.input('id_matapelajaran')
    const nama_depan = request.input('nama_depan')
    const nama_belakang = request.input('nama_belakang')
    const jenis_kelamin = request.input('jenis_kelamin')

    try {
      const karyawan = await Karyawan.findOrFail(id)

      karyawan.jabatan_id = id_jabatan
      karyawan.mata_pelajaran_id = id_matapelajaran
      karyawan.nama_depan = nama_depan
      karyawan.nama_belakang = nama_belakang
      karyawan.jenis_kelamin = jenis_kelamin

      await karyawan.save()

      session.flash('success', "Data berhasil diubah")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', "Data tidak berhasil diubah")
      return response.redirect().back()
    }
  }


  public async destroy({ request, session, response}: HttpContextContract) {    
    const id = request.input('id')
    try {
      const subjects = await Karyawan.findOrFail(id)
      await subjects.delete()

      session.flash('success', "Data berhasil di hapus")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e)
      return response.redirect().back()
    }
  }
}
