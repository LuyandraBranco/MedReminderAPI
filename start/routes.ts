import router from '@adonisjs/core/services/router'
const MedicationsController = () => import('#controllers/medications_controller')

router.get('medications', [MedicationsController, 'index'])
router.post('medications', [MedicationsController, 'store'])
router.get('medications/:medicationId', [MedicationsController, 'show'])
router.put('medications/:medicationId', [MedicationsController, 'update'])
router.delete('medications/:medicationId', [MedicationsController, 'destroy'])

router
  .group(() => {
    router.get('', () => {})
    router.post('create-user', () => {})
    router.put('edit-user', () => {})
    router.delete('delete-user', () => {})
  })
  .prefix('users')
