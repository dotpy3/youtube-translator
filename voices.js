function userLanguageInFiveCharacters() {
  return window.navigator.language
}

function userLanguageInTwoCharacters() {
  var lang = userLanguageInFiveCharacters()
  var twoCharacters = lang.match(/^.{2}/g)[0]
  return twoCharacters
}

var synth = window.speechSynthesis
var voices = synth.getVoices()

function Speak(languageInFiveCharacters, text) {
  for (var voiceIndex in voices) {
    var voice = voices[voiceIndex]
    console.log("speak in " + languageInFiveCharacters + ": " + text)
    if (voice.lang === languageInFiveCharacters) {
      var utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = voice
      synth.speak(utterance)
    }
  }
}
