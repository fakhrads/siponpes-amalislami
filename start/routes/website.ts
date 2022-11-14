import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'WebsitesController.index').as('default')