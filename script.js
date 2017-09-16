console.log("Youtube video detected, YouTube translator enabled 😈")

var url = new URL(document.URL)
var c = url.searchParams.get("v")
if (!c) {
  alert("Wow, YouTube video identifier not found 😭")
} else {
  play(c)
}

function play(video_identifier) {
    fetch_transcript('en', video_identifier);
    // play_sentence(video_identifier)
}



function play_sentence(text) {
    document.write(text + "\n")
    responsiveVoice.speak(text)
}
