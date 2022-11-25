import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    Route.get('/login', 'UsersController.index').as('admin_login')
    Route.post('/login', 'UsersController.login').as('admin_login_proccess')
    Route.get('/dashboard', 'AdminsController.index').as('admin_dashboard').middleware('auth')
    Route.get('/achievements', 'AchievementsController.index').as('admin_achievements').middleware('auth')
    Route.get('/teachers', 'TeachersController.index').as('admin_teachers').middleware('auth')
    Route.get('/teachers/new', 'TeachersController.create').as('admin_teachers_new').middleware('auth')
    Route.post('/teachers/store', 'TeachersController.store').as('admin_teachers_store').middleware('auth')
    Route.get('/teachers/edit/:nip', 'TeachersController.edit').as('admin_teachers_edit').middleware('auth')
    Route.get('/blog/category/', 'BlogCategoriesController.index').as('admin_blog_category').middleware('auth')
    Route.post('/blog/category/new', 'BlogCategoriesController.store').as('admin_blog_category_store').middleware('auth')
    Route.get('/blog/category/new', 'BlogCategoriesController.create').as('admin_blog_category_create').middleware('auth')
    Route.get('/blog/category/edit/:category_id', 'BlogCategoriesController.edit').as('admin_blog_category_edit').middleware('auth')
    Route.get('/subjects', 'SubjectsController.index').as('admin_subjects').middleware('auth')
  })
  .prefix('/admin')
//Route.get('/','DashboardController.index')