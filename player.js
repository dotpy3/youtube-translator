function play_line(start, dur, text) {
    add_video_action(start, text)
}

function add_video_action(time, text) {
    console.log(time, text)
    time = time - 42
    console.log(time, text)
    // AddVideoAction(time, () => {
    //   console.log(text)
    //   responsiveVoice.speak(text)
// })
    var language = userLanguage()
    var voice = languageToVoice[language]
    responsiveVoice.speak(text, voice)
}
