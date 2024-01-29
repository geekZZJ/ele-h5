import { defineComponent } from 'vue'
import './SearchView.less'

export default defineComponent({
  name: 'SearchView',
  emits: ['cancel'],
  setup(props, { emit }) {
    return () => (
      <div class="search-view" onClick={() => emit('cancel')}>
        搜索页
      </div>
    )
  }
})
