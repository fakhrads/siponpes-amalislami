import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    Route.get('/login', 'UsersController.index').as('admin_login')
    Route.post('/login', 'UsersController.login').as('admin_login_proccess')
    Route.get('/dashboard', 'AdminsController.index').as('admin_dashboard')
    Route.get('/achievements', 'AchievementsController.index').as('admin_achievements')
    Route.get('/teachers', 'TeachersController.index').as('admin_teachers')
    Route.get('/teachers/new', 'TeachersController.create').as('admin_teachers_new')
    Route.post('/teachers/store', 'TeachersController.store').as('admin_teachers_store')
    Route.get('/teachers/edit/:nip', 'TeachersController.edit').as('admin_teachers_edit')
  })
  .prefix('/admin')
//Route.get('/','DashboardController.index')