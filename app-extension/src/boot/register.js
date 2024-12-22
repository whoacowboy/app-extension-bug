import { boot } from 'quasar/wrappers'
import VuePlugin from 'quasar-ui-delete-1'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
