import { computed, defineComponent } from 'vue'
import { useProviderConfigState } from '../config-provider/context'
import useStyle from './style'
const Button = defineComponent({
  name: 'AButton',
  inheritAttrs: false,
  props: {
    prefixCls: {
      type: String
    },
    type: {
      type: String,
      default: 'default'
    }
  },
  setup(props, { slots, attrs }) {
    const { getPrefixCls } = useProviderConfigState()
    const prefixCls = computed(() => getPrefixCls('btn', props.prefixCls))
    const [wrapSSR, hashId] = useStyle(prefixCls)
    const cls = computed(() => {
      return {
        [`${prefixCls.value}`]: true,
        // !!变成 布尔类型
        [`${prefixCls.value}-${props.type}`]: !!props.type,
        [hashId]: true
      }
    })

    return () => {
      return wrapSSR(
        <button {...attrs} class={[cls.value, attrs.class]}>
          {slots?.default?.()}
        </button>
      )
    }
  }
})

export default Button
