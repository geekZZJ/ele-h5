import { ref, type UnwrapRef } from 'vue'

export function useAsync<T>(asyncFn: () => Promise<T>, initValue: T, immediately: true) {
  const pending = ref(false)
  const data = ref(initValue)
  const error = ref(null)
  const execute = function () {
    pending.value = true
    error.value = null
    asyncFn()
      .then((res) => {
        data.value = res as UnwrapRef<T>
        pending.value = false
      })
      .catch((err) => {
        error.value = err
        pending.value = false
      })
  }
  if (immediately) {
    execute()
  }
  return {
    pending,
    data,
    error,
    execute
  }
}
