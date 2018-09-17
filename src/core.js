const scrollDefaults = {
  getScrollTop: () => window.scrollY,
  setScrollTop: y => window.scrollTo(0, y),
}

export default function scrollTo(options = {}) {
  options = {
    ...scrollDefaults,
    ...options
  }
  const {} = options
}
