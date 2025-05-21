import { defineBoot } from '#q-app/wrappers'
import { VueQueryPlugin } from '@tanstack/vue-query'

export default defineBoot(({ app }) => {
  app.use(VueQueryPlugin)
})