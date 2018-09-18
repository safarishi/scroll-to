import { raf } from './utils'

const defaults = {
  // default global y scroll
  getScrollOffset: () => window.scrollY,
  setScrollOffset: y => window.scrollTo(0, y)
}

export default function scrollTo(options = {}) {
  options = {
    ...defaults,
    ...options
  }
  const {} = options
}
