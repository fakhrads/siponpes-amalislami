import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AdminsController {
  public async index({ view }: HttpContextContract) {
    return view.render('pages/admin/home')
  }

  public async create({}: HttpContextContract) {}

  public async store({}: HttpContextContract) {}

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}
