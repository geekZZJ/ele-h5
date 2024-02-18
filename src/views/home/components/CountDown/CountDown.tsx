import { defineComponent, type PropType } from 'vue'
import './CountDown.less'
import type { ICountdown } from '@/types'
import countPic from '@/assets/imgs/index_page/count-down.png'

export default defineComponent({
  name: 'CountDown',
  props: {
    data: {
      type: Object as PropType<ICountdown>,
      default: () => {}
    }
  },
  setup(props) {
    const padStart = (num: number) => {
      return num.toString().padStart(2, '0')
    }
    return () => {
      return (
        <div class="home-countdown">
          <div class="home-countdown__info">
            <img class="logo" src={countPic} />
            <span class="number">{padStart(1)}</span>
            <span class="colon">:</span>
            <span class="number">{padStart(1)}</span>
            <span class="colon">:</span>
            <span class="number">{padStart(1)}</span>
          </div>
          <div class="home-countdown__goods">
            <img class="goods-img" src={props.data.goods.imgUrl} />
            <div class="goods-name op-ellipsis">{props.data.goods.name}</div>
            <div class="goods-price">
              <span class="goods-price__now">
                ￥<span>{props.data.goods.price}</span>
              </span>
              <span class="goods-price__old">￥{props.data.goods.oldPrice}</span>
            </div>
          </div>
        </div>
      )
    }
  }
})
