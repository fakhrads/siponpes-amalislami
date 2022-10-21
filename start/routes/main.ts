import Route from '@ioc:Adonis/Core/Route'

Route
  .group(() => {
    Route.get('/dashboard', 'AdminsController.index').as('admin_dashboard')
  })
  .prefix('/admin') 

//Route.get('/','DashboardController.index')