import { defineComponent } from 'vue'
import { Icon } from 'vant'
import './OpSearch.less'

interface IProps {
  showAction?: boolean
  background?: string
  placeholder?: string
  shape?: string
  modelValue?: string
}

export default defineComponent({
  name: 'OpSearch',
  props: {
    showAction: {
      type: Boolean
    },
    background: {
      type: String
    },
    placeholder: {
      type: String
    },
    shape: {
      type: String
    },
    modelValue: {
      type: String
    }
  },
  emits: ['search', 'clear', 'update:modelValue', 'cancel'],
  setup(props: IProps, { emit, slots }) {
    const onKeypress = (e: KeyboardEvent) => {
      const ENTER_CODE = 13
      if (e.keyCode === ENTER_CODE) {
        e.preventDefault()
        emit('search', props.modelValue)
      }
    }
    const onClear = () => {
      emit('update:modelValue', '')
      emit('clear')
    }
    return () => (
      <div class={{ 'op-search': true, 'op-search--show-action': props.showAction }}>
        <div
          class={{
            'op-search__content': true,
            [`op-search__content--${props.shape}`]: props.shape
          }}
        >
          <div class="op-cell op-search__field">
            <div class="op-field__left-icon">
              <Icon name="search" />
            </div>
            <div class="op-cell__value">
              <div class="op-field__body">
                <input
                  type="search"
                  class="op-field__control"
                  value={props.modelValue}
                  placeholder={props.placeholder}
                  onKeypress={onKeypress}
                  onInput={(e) => emit('update:modelValue', (e.target as HTMLInputElement).value)}
                />
                {slots['right-icon'] && (
                  <div class="op-field__right-icon">
                    {slots['right-icon'] && slots['right-icon']()}
                  </div>
                )}
                {props.modelValue && (
                  <Icon name="clear" class="op-field__clear" onClick={onClear} />
                )}
              </div>
            </div>
          </div>
        </div>
        {props.showAction && (
          <div class="op-search__action">
            {slots.action ? slots.action() : <span onClick={() => emit('cancel')}>取消</span>}
          </div>
        )}
      </div>
    )
  }
})
