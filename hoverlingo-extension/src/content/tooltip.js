// Create and manage tooltip
export const showTooltip = (text, x, y) => {
  const tooltip = document.createElement('div')
  tooltip.className = 'hoverlingo-tooltip'
  tooltip.innerHTML = `<div class="bg-white border p-2 shadow-lg">${text}</div>`
  tooltip.style.position = 'absolute'
  tooltip.style.left = `${x}px`
  tooltip.style.top = `${y}px`
  tooltip.style.zIndex = '9999'
  document.body.appendChild(tooltip)

  setTimeout(() => {
    document.body.removeChild(tooltip)
  }, 3000)
}