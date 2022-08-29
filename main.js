const iframe = document.querySelector('.viewPort_phone')
const url = document.querySelector('.putUrl')
const inputUrl = document.querySelector('#url')

url.addEventListener('submit', (e) => {
  e.preventDefault()
  iframe.setAttribute('src', inputUrl.value)
})
