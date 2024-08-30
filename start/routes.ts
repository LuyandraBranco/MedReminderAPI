/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

router.group(() => {
  router.get('', () => {})
  router.post('create-user', () => {})
  router.put('edit-user', () => {})
  router.delete('delete-user', () => {})
}).prefix('user')


