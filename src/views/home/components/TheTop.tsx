import { defineComponent } from 'vue'
import locationPic from '@/assets/imgs/index_page/location.png'
import shopPic from '@/assets/imgs/index_page/shopcart.png'
import commentPic from '@/assets/imgs/index_page/comments.png'
import './TheTop.less'

export default defineComponent({
  name: 'TheTop',
  props: {
    recommends: {
      type: Array,
      value: []
    }
  },
  setup() {
    return () => (
      <div class="home-top">
        <div class="top">
          <img src={locationPic} alt="" class="location-icon" />
          <div class="location">幸福小区（北一区东南门）</div>
          <img class="shopcart-icon" src={shopPic} alt="" />
          <img class="comments-icon" src={commentPic} alt="" />
        </div>
      </div>
    )
  }
})
