import { defineComponent, Transition } from 'vue'
import './HomeView.less'
import TheTop from './components/TheTop'
import { useToggle } from '@/use/useToggle'
import SearchView from '../search/SearchView'
import { useAsync } from '@/use/useAsync'
import { fetchHomePageData } from '@/api/home'
import type { IHomeInfo } from '@/types'
import OpLoading from '@/components/OpLoading/OpLoading'

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
    const { data, pending } = useAsync(fetchHomePageData, {} as IHomeInfo, true)

    const slots = {
      default: () => <span>测试</span>
    }

    return () => (
      <div class="home-page">
        <Transition name="fade">
          {isSearchViewShow.value && <SearchView onCancel={toggleSearchView}></SearchView>}
        </Transition>
        <TheTop recommends={recommends} onSearchClick={toggleSearchView} />
        <OpLoading loading={pending.value} type="loading" v-slots={slots}></OpLoading>
      </div>
    )
  }
})
