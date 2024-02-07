import { defineComponent, Fragment } from 'vue'
import { Loading, Skeleton } from 'vant'
import './OpLoading.less'

export default defineComponent({
  name: 'OpLoading',
  props: {
    loading: {
      type: Boolean
    },
    type: {
      type: String
    }
  },
  setup(props, { slots }) {
    return () => {
      return (
        <Fragment>
          {props.loading ? (
            <div class="op-loading-view">
              {slots.template ? (
                slots.template()
              ) : (
                <Fragment>
                  {props.type === 'loading' && (
                    <div class="loading-wrapper">
                      <Loading />
                    </div>
                  )}
                  {props.type === 'skeleton' && (
                    <div class="skeleton-wrapper">
                      <Skeleton row="10" />
                      <Skeleton title avatar row="5" />
                      <Skeleton title row="5" />
                    </div>
                  )}
                </Fragment>
              )}
            </div>
          ) : (
            slots.default && slots.default()
          )}
        </Fragment>
      )
    }
  }
})
