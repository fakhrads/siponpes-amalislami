import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'WebsitesController.index').as('default')
Route.get('/gallery', 'WebsitesController.gallery').as('gallery')
Route.get('/blogs', 'WebsitesController.blog').as('blogs')
Route.get('/blogs/test', 'WebsitesController.blogPreview').as('blogsP')
Route.get('/sejarah', 'WebsitesController.sejarah').as('sejarah')
Route.get('/visi', 'WebsitesController.visi').as('visi')
Route.get('/karyawan', 'WebsitesController.staff').as('staff')

