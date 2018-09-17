const defaults = {
  getScrollTop: () => window.scrollY,
  setScrollTop: y => window.scrollTo(0, y),
}

export default function scrollTo(options = {}) {
  options = {
    ...defaults,
    ...options
  }
  const {} = options
}
