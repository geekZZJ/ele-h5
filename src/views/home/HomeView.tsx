import { defineComponent } from 'vue'
import './HomeView.less'
import TheTop from './components/TheTop'
import { useToggle } from '@/use/useToggle'
import SearchView from '../search/SearchView'

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
    const [isSearchViewShow, toggleSearchView] = useToggle(false)
    return () => (
      <div class="home-page">
        {isSearchViewShow.value && <SearchView onCancel={toggleSearchView}></SearchView>}
        <TheTop recommends={recommends} onSearchClick={toggleSearchView} />
      </div>
    )
  }
})
