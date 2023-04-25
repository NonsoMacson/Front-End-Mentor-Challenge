function selected () {
  const message = document.querySelector('#message')
  message.textContent = 'Submitted, Thank you'
  setTimeout(() => {
    document.querySelector('#message').textContent = ''
  }, 3000)
}
