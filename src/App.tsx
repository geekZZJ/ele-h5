import { defineComponent } from 'vue'
// import TabsView from './views/tabs/TabsView'
import { RouterView } from 'vue-router'
import { fetchTest } from './api/test'
import './App.less'

export default defineComponent({
  name: 'App',
  setup() {
    fetchTest()
    return () => <RouterView></RouterView>
  }
})
