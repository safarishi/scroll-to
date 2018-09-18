import scrollTo from './core'
import { raf } from './utils'

const list = len => {
  let fragement = ''
  for (let i = 1; i <= len; i++) {
    fragement += `<div class="container-${i}" style="background: ${
      i % 2 === 0 ? 'cadetblue' : 'antiquewhite'
    }; padding: 10px 2px;"> --- ${i}</div>`
  }
  return fragement
}

function main() {
  const root = document.getElementById('root')
  const len = 150
  root.innerHTML = list(len)
  // 全局滚动
  document
    .querySelector('.btn-container .operate')
    .addEventListener('click', () => {
      // 1 - len
      const randomNum = Math.floor(Math.random() * len) + 1
      console.log(randomNum)
      window.scrollTo(
        0,
        getElementOffset(document.querySelector('.container-' + randomNum)).top
      )
    })
}

// 主函数入口
main()

function getElementOffset(el) {
  const rect = el.getBoundingClientRect()
  return {
    // y axis direction
    top: rect.top + window.pageYOffset,
    // x axis direction
    left: rect.left + window.pageXOffset
  }
}

/**
 * demo examples
 * 全局 y 轴滚动
 * 全局 x 轴滚动
 * 局部 y 轴滚动
 * 局部 x 轴滚动
 */

