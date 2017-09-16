var button = document.getElementById('button')
if (!button) {
  alert("WOW NO RESULT FOUND")
}

button.addEventListener('click', () => {
  play()
})

function play(video_identifier) {
    fetch_transcript('en', video_identifier);
    // play_sentence(video_identifier)
}

function fetch_transcript(language, video_identifier) {
    url = "http://video.google.com/timedtext?lang=" + language + "&v=" + video_identifier
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.onreadystatechange = function () {
      if (x.readyState == 4 && x.status == 200)
      {
        var doc = x.responseXML;
        document.write(doc)
      }
    };
}

function play_sentence(text) {
    document.write(text + "\n")
    responsiveVoice.speak(text)
