/**
 * raf 😂 requestAnimationFrame
 * @param f to be executed function
 */
export function raf(f) {
  if (window.requestAnimationFrame) {
    return window.requestAnimationFrame(f)
  }
  return requestAnimationFrame(f)
}

export function cancelRaf(tid) {
  if (window.cancelAnimationFrame) {
    window.cancelAnimationFrame(tid)
  } else {
    clearTimeout(tid)
  }
}

/**
* easeOutQuart Easing Function
* @param  {number} t - current time
* @param  {number} b - start value
* @param  {number} c - change in value
* @param  {number} d - duration
* @return {number} - calculated value
*/
export function easeOutQuart(t, b, c, d) {
  t /= d
  t--
  return -c * (t * t * t * t - 1) + b
}

let lastTime = 0
function requestAnimationFrame(callback) {
  const now = Date.now()
  const nextTime = Math.max(lastTime + 16, now)
  return setTimeout(function() {
    callback((lastTime = nextTime))
  }, nextTime - now)
}