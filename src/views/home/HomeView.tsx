import { defineComponent } from 'vue'
import './HomeView.less'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => <div class="test">home</div>
  }
})
