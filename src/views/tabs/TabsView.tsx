import { defineComponent, ref, watch } from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import './TabsView.less'
import { RouterView, useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'TabsView',
  setup() {
    // const active = ref('home')
    const route = useRoute()
    const router = useRouter()
    const active = ref(route.name)

    watch(active, (current) => {
      if (current === null) return
      router.push({ name: current })
    })

    return () => (
      <div>
        {/* <div class="center">{active.value}</div> */}
        <RouterView></RouterView>
        <Tabbar v-model={active.value}>
          <TabbarItem name="home" icon="home-o">
            首页
          </TabbarItem>
          <TabbarItem name="order" icon="bars">
            订单
          </TabbarItem>
          <TabbarItem name="my" icon="contact">
            我的
          </TabbarItem>
        </Tabbar>
      </div>
    )
  }
})
