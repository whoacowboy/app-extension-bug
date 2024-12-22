import { h } from 'vue'
import { QBadge } from 'quasar'

export default {
  name: 'Delete1',

  setup () {
    return () => h(QBadge, {
      class: 'Delete1',
      label: 'Delete1'
    })
  }
}
