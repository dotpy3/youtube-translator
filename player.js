function play_line(start, dur, text) {
    add_video_action(start, text)
}

function add_video_action(time, text) {
    AddVideoAction(time, () => {
      console.log(time, text)
      Speak(userLanguageInFiveCharacters(), text)
    })
}
