var button = document.getElementById('button')
if (!button) {
  alert("WOW NO RESULT FOUND")
}

button.addEventListener('click', () => {
  play()
})

function play() {
  responsiveVoice.speak('Hello World')
}
