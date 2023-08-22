export function debounce(func: () => void, delay: number, immediate: boolean) {
  let timerId: NodeJS.Timeout | null = null

  return function (...args: []) {
    if (timerId) {
      clearTimeout(timerId)
    }

    if (immediate) {
      const callNow = !timerId
      timerId = setTimeout(() => {
        timerId = null
      }, delay)

      callNow && func.apply(this, args)
    } else {
      timerId = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
}
