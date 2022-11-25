import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'

export default class BlogsController {
  public async index({ view }: HttpContextContract) {
    return view.render('admin/pages/blog')
  }

  public async create({ view }: HttpContextContract) {
    return view.render('admin/page/blog_new')
  }

  public async store({ request, session, view }: HttpContextContract) {
    const title = request.input('title')
    const content = request.input('content')
    try {
      await Blog.create({
        judul: title,
        content: content,
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
