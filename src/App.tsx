import { defineComponent } from 'vue'
// import TabsView from './views/tabs/TabsView'
import { RouterView } from 'vue-router'
import { fetchTest } from './api/test'

export default defineComponent({
  name: 'App',
  setup() {
    fetchTest()
    return () => <RouterView></RouterView>
  }
})
