import { defineComponent, ref, type PropType } from 'vue'
import locationPic from '@/assets/imgs/index_page/location.png'
import shopPic from '@/assets/imgs/index_page/shopcart.png'
import commentPic from '@/assets/imgs/index_page/comments.png'
import './TheTop.less'
// import { Search } from 'vant'
import type { Recommend, TheTopIProps } from '@/types'
import OpSearch from '@/components/OpSearch/OpSearch'

export default defineComponent({
  name: 'TheTop',
  props: {
    recommends: {
      type: Array as PropType<Recommend[]>,
      value: []
    }
  },
  emits: ['searchClick'],
  setup(props, { emit }) {
    const slots = {
      'right-icon': () => <span onClick={() => emit('searchClick')}>搜索</span>
    }

    return (props: TheTopIProps) => (
      <div class="home-top">
        <div class="top">
          <img src={locationPic} alt="" class="location-icon" />
          <div class="location">幸福小区（北一区东南门）</div>
          <img class="shopcart-icon" src={shopPic} alt="" />
          <img class="comments-icon" src={commentPic} alt="" />
        </div>
        {/* <Search
          shape="round"
          background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
          placeholder="世界茶饮 35减2"
          v-slots={slots}
        ></Search> */}
        <OpSearch
          shape="round"
          background="linear-gradient(to right, rgb(53, 200, 250), rgb(31, 175, 243))"
          placeholder="世界茶饮 35减2"
          v-slots={slots}
          onInputClick={() => emit('searchClick')}
        ></OpSearch>
        <div class="search-recommend">
          {props.recommends.map((item) => {
            return (
              <div class="tag" key={item.value}>
                {item.label}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
})
