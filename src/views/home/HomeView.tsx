import { defineComponent } from 'vue'
import './HomeView.less'
import TheTop from './components/TheTop'

export default defineComponent({
  name: 'HomeView',
  setup() {
    const recommends = [
      {
        value: 1,
        label: '牛腩'
      },
      {
        value: 2,
        label: '色拉'
      }
    ]
    return () => (
      <div class="home-page">
        <TheTop />
      </div>
    )
  }
})
