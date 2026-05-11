// Detect hover events on text and images
document.addEventListener('mouseover', (event) => {
  const target = event.target
  if (target.tagName === 'IMG') {
    // Handle image hover
    console.log('Image hovered:', target.src)
  } else if (target.textContent) {
    // Handle text hover
    console.log('Text hovered:', target.textContent)
  }
})