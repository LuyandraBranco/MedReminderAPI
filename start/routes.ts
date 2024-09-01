import router from '@adonisjs/core/services/router'
const MedicationsController = () => import('#controllers/medications_controller')

router.get('medications', [MedicationsController, 'index'])
router.post('medications', [MedicationsController, 'store'])
router.get('medications/:medication_id', [MedicationsController, 'show'])
router.put('medications/:medication_id', [MedicationsController, 'update'])
router.delete('medications/:medication_id', [MedicationsController, 'destroy'])
