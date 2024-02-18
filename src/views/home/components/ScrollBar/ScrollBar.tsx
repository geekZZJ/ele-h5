import { defineComponent, onMounted, ref } from 'vue'
import './ScrollBar.less'
import { useInterval } from '@/use/useInterval'
// import { useTimeout } from '@/use/useTimeout'
import type { IScrollBarInfo } from '@/types'

export default defineComponent({
  name: 'ScrollBar',
  props: {
    intervalTime: {
      type: Number,
      default: 3000
    },
    transitionTime: {
      type: Number,
      default: 1000
    },
    height: {
      type: Number,
      default: 40
    },
    data: {
      type: Array<IScrollBarInfo>,
      default: () => []
    }
  },
  setup(props) {
    const containerRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      const container = containerRef.value
      const count = container!.children.length
      const firstSwipeItem = container?.children[0] as HTMLElement
      container!.style.height = `${count * props.height}px`
      let index = 0
      useInterval(() => {
        index++
        if (index >= count) {
          firstSwipeItem.style.transform = `translateY(${index * props.height}px)`
          // 第一个元素滚动动画结束之后，将整个 container 位置重置
          const timeout = setTimeout(() => {
            // 重置逻辑
            firstSwipeItem.style.transform = ''
            container!.style.transform = ''
            container!.style.transition = ''
            clearTimeout(timeout)
          }, props.transitionTime)
        }
        container!.style.transform = `translateY(-${index * props.height}px)`
        container!.style.transition = `all linear ${props.transitionTime}ms`
        index = index % count
      }, props.intervalTime)
    })
    const heightPx = `${props.height}px`

    return () => {
      return (
        <div class="home-scroll-bar">
          <div class="home-scroll-bar__swipe" style={{ height: heightPx }}>
            <div ref={containerRef}>
              {props.data?.map((item) => (
                <div class="swipe-item" key={item.type} style={{ height: heightPx }}>
                  <div class={`scroll-bar__info scroll-bar__info__${item.type}`}>
                    <span class="info-badge">{item.badge}</span>
                    <span class="info-detail" v-html={item.detail}></span>
                    <span class="info-btn op-thin-border">{item.btn}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    }
  }
})
