const list = (len) => {
  let fragement = ''
  for (let i = 1; i <= len; i++) {
    fragement += `<div> --- ${i}</div>`
  }
  return fragement
}

function main() {
  const root = document.getElementById('root')
  root.innerHTML = list(150)
}

// 主函数入口
main()

// 全局滚动

