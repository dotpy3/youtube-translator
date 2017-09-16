console.log("Youtube video detected, YouTube translator enabled 😈")

var url = new URL(document.URL)
var c = url.searchParams.get("v")
if (!!document.URL.match(/file/g)) {
 alert("Debug mode detected ⚠️")
} else if (!c) {
  alert("Wow, YouTube video identifier not found 😭")
  console.log(document.URL)
} else {
  alert(`Youtube Video ${c} detected`)
  play(c)
}

document.getElementById("button").addEventListener("click", () => {
  var content = document.getElementById("videoid").value
  console.log("Playing "+content+"...")
  play(content)
})

function play(video_identifier) {
    fetch_transcript('en', video_identifier)
    // play_sentence(video_identifier)
}



function play_sentence(text) {
    document.write(text + "\n")
    responsiveVoice.speak(text)
}
