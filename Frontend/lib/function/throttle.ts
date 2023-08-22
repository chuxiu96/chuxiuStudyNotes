export function throttle(func: () => void, delay = 0) {
  let timerId: NodeJS.Timeout | null = null

  return function (...args: []) {
    if (timerId) return

    timerId = setTimeout(() => {
      func.apply(this, args)

      timerId = null
    }, delay)
  }
}
