alert("HELLO WORLD!!!!")

var button = document.getElementById('button')
if (!button) {
  alert("WOW NO RESULT FOUND")
}

button.addEventListener('click', () => {
  play('ePpPVE-GGJw')
})

function play(video_identifier) {
    fetch_transcript('en', video_identifier);
    // play_sentence(video_identifier)
}



function play_sentence(text) {
    document.write(text + "\n")
    responsiveVoice.speak(text)
}
