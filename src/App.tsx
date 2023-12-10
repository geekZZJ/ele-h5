import { defineComponent } from 'vue'
import TabsView from './views/tabs/TabsView'

export default defineComponent({
  name: 'App',
  setup() {
    return () => <TabsView></TabsView>
  }
})
