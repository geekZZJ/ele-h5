import { TransitionGroup, defineComponent, ref } from 'vue'
import './SearchView.less'
import OpSearch from '@/components/OpSearch/OpSearch'
import { fetchSearchData } from '@/api/search'
import type { ISearchResult } from '@/types'
import { Icon } from 'vant'

export default defineComponent({
  name: 'SearchView',
  emits: ['cancel'],
  setup(props, { emit }) {
    const searchValue = ref('')
    const searchResult = ref<ISearchResult[]>([])

    const onSearch = async (v: string) => {
      console.log('search', v)
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
      searchResult.value = list
    }

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
        {/* <div v-if="!searchValue" class="search-view__history">
          <div class="label">历史搜索</div>
          <TransitionGroup name="list">
            <div class="history-tag" v-for="v in historyTags" key="v" onClick={() => onTagClick(v)}>
              {{ v }}
            </div>
            <div class="history-tag" key="arrow" onClick={toggleHistoryTag}>
              <VanIcon v-if="isHistoryTagShown" name="arrow-up"></VanIcon>
              <VanIcon v-else name="arrow-down"></VanIcon>
            </div>
          </TransitionGroup>
        </div> */}

        <div class="search-view__result">
          {/* <div class="searching" v-if="searchState === DOING">~正在搜索~</div> */}
          {searchResult.value.map((v) => (
            <div class="result-item" key={v.label}>
              <Icon name="search"></Icon>
              <div class="name">{v.label}</div>
              <div class="count">约{v.resultCount}个结果</div>
            </div>
          ))}
          {!searchResult.value.length && <div class="no-result">~暂无推荐~</div>}
        </div>
      </div>
    )
  }
})
