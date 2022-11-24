import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AchievementsController {
    public async index({ view }: HttpContextContract) {
        return view.render('admin/pages/achievements')
    }
    public async store({ view, response, request }: HttpContextContract) {
        
        
        return view.render('admin/pages/achievements')
    }
}
