import { defineComponent } from 'vue'
// import TabsView from './views/tabs/TabsView'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => <RouterView></RouterView>
  }
})
