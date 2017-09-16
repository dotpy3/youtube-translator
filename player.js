function play_line(start, dur, text) {
    add_video_action(start, text)
}

function add_video_action(time, text, voice) {
    console.log(time, text)
    time = time - 42
    console.log(time, text)
    // AddVideoAction(time, () => {
    //   console.log(text)
    //   responsiveVoice.speak(text)
// })
    responsiveVoice.speak(text, voice)
}
