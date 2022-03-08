import { ref } from 'vue'

export default function useFocus (className) {
  const classes = ref({
    [`${className}--focused`]: false
  })
  const onFocus = () => {
    classes.value[`${className}--focused`] = true
  }
  const onBlur = () => {
    classes.value[`${className}--focused`] = false
  }

  return {
    onFocus,
    onBlur,
    classes
  }
}
