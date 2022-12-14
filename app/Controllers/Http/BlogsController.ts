import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Blog from 'App/Models/Blog'
import BlogCategory from 'App/Models/BlogCategory'

export default class BlogsController {
  public async index({ view }: HttpContextContract) {
    const data = await Blog.all()
    return view.render('admin/pages/blog', { data: data})
  }

  public async create({ view }: HttpContextContract) {
    const data = await BlogCategory.all()
    return view.render('admin/pages/blog_new',{data: data})
  }

  public async store({ request, session, response }: HttpContextContract) {
    const title = request.input('title')
    const content = request.input('content')
    const category_id = request.input('category_id')
    const photo_path = request.file('photo', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })!

    if (photo_path) {
      await photo_path.moveToDisk('photo_blog')
    }
    try {
      await Blog.create({
        category_id: category_id,
        judul: title,
        content: content,
        photo_path: photo_path.fileName,
      })
      session.flash('success','Data berhasil ditambah!')
      response.redirect().back()
    } catch (e) {
      session.flash('error',e.message)
      response.redirect().back()
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({ request, session, response}: HttpContextContract) {
    const id = request.input('id')
    const title = request.input('title')
    const content = request.input('content')
    const category_id = request.input('category_id')
    const photo_path = request.file('photo', {
      size: '2mb',
      extnames: ['jpg', 'png', 'gif'],
    })

    try {
      const blog = await Blog.findOrFail(id)
      if (photo_path) {
        await photo_path.moveToDisk('photo_blog')
        blog.judul = title
        blog.category_id = category_id
        blog.content = content
        blog.photo_path = photo_path.fieldName
      } else {
        blog.judul = title
        blog.category_id = category_id
        blog.content = content
      }

      await blog.save()

      session.flash('success', "Data berhasil diubah")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', "Data tidak berhasil diubah")
      return response.redirect().back()
    }
  }

  public async update({}: HttpContextContract) {}
  public async destroy({ request, session, response}: HttpContextContract) {    
    const id = request.input('id')
    try {
      const data = await Blog.findOrFail(id)
      await data.delete()

      session.flash('success', "Data berhasil di hapus")
      return response.redirect().back()
    } catch(e) {
      session.flash('errors', e)
      return response.redirect().back()
    }
  }
}
