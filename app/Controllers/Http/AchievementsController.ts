import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AchievementsController {
    public async index({ view }: HttpContextContract) {
        return view.render('admin/pages/achievements')
    }
    
    public async create({ view }: HttpContextContract) {
        return view.render('admin/pages/achievements_new')
    }

    public async store({ view}: HttpContextContract) {
        
        return view.render('admin/pages/achievements')
    }

    public async show({}: HttpContextContract) {}

    public async edit({}: HttpContextContract) {}

    public async update({}: HttpContextContract) {}

    public async destroy({}: HttpContextContract) {}
}
