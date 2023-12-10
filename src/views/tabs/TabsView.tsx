import { defineComponent, ref } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import './TabsView.less'

export default defineComponent({
  name: 'TabsView',
  setup() {
    const active = ref('home')

    return () => (
      <div>
        <div class="center">{active.value}</div>
        <Tabbar v-model={active.value}>
          <TabbarItem name="home" icon="home-o">
            首页
          </TabbarItem>
          <TabbarItem name="order" icon="bars">
            订单
          </TabbarItem>
          <TabbarItem name="me" icon="contact">
            我的
          </TabbarItem>
        </Tabbar>
      </div>
    )
  }
})
