import { TransitionGroup, computed, defineComponent, ref, watch } from 'vue'
import './SearchView.less'
import OpSearch from '@/components/OpSearch/OpSearch'
// import { fetchSearchData } from '@/api/search'
import type { ISearchResult } from '@/types'
import { Icon } from 'vant'
import { useToggle } from '@/use/useToggle'
import { useDebounce } from '@/use/useDebounce'

const history_tags = ['披萨', '栗子', '炒饭', '玉米', '烧烤', '水果', '牛奶', '奶茶']

export default defineComponent({
  name: 'SearchView',
  emits: ['cancel'],
  setup(props, { emit }) {
    const searchValue = ref('')
    const searchResult = ref<ISearchResult[]>([])
    const searchState = ref(-1)
    const historyTags = computed(() =>
      isHistoryTagShown.value ? history_tags : history_tags.slice(0, 5)
    )
    const [isHistoryTagShown, toggleHistoryTag] = useToggle(false)

    const onSearch = async (v: string) => {
      console.log('search', v)
      searchState.value = 0
      // const { list } = await fetchSearchData(v)
      const list = [
        {
          type: 1,
          label: '披萨',
          resultCount: 453
        },
        {
          type: 1,
          label: '达美乐披萨',
          resultCount: 1
        }
      ]
      searchState.value = 1
      searchResult.value = list
    }

    const onTagClick = (v: string) => {
      searchValue.value = v
      onSearch(v)
    }

    // watch(
    //   searchValue,
    //   useDebounce((newVal) => {
    //     if (!newVal) {
    //       searchResult.value = []
    //       return
    //     }
    //     onSearch(newVal as string)
    //   }, 1000)
    // )

    const debounceValue = useDebounce(searchValue, 1000)
    watch(debounceValue, (newVal) => {
      if (!newVal) {
        searchResult.value = []
        return
      }
      onSearch(newVal)
    })

    return () => (
      <div class="search-view">
        <OpSearch
          show-action
          v-model={searchValue.value}
          shape="round"
          placeholder="请输入搜索关键词"
          onSearch={onSearch}
          onCancel={() => emit('cancel')}
        ></OpSearch>
        {searchValue.value ? (
          <div class="search-view__result">
            {searchState.value === 0 && <div class="searching">~正在搜索~</div>}
            {searchState.value === 1 && (
              <div>
                {searchResult.value.map((v) => (
                  <div class="result-item" key={v.label}>
                    <Icon name="search"></Icon>
                    <div class="name">{v.label}</div>
                    <div class="count">约{v.resultCount}个结果</div>
                  </div>
                ))}
                {!searchResult.value.length && <div class="no-result">~暂无推荐~</div>}
              </div>
            )}
          </div>
        ) : (
          <div class="search-view__history">
            <div class="label">历史搜索</div>
            <TransitionGroup name="list">
              {historyTags.value.map((v) => (
                <div class="history-tag" key={v} onClick={() => onTagClick(v)}>
                  {v}
                </div>
              ))}
              <div class="history-tag" key="arrow" onClick={toggleHistoryTag}>
                {isHistoryTagShown.value ? (
                  <Icon name="arrow-up"></Icon>
                ) : (
                  <Icon name="arrow-down"></Icon>
                )}
              </div>
            </TransitionGroup>
          </div>
        )}
      </div>
    )
  }
})
