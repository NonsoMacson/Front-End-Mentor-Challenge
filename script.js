function selected () {
  const message = document.querySelector('#message')
  message.textContent = 'submitted, Thank you'
  setTimeout(() => {
    document.querySelector('#message').textContent = ''
  }, 3000)
}
