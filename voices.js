function userLanguageInFiveCharacters() {
  return "fr-FR"
  return window.navigator.language
}

function userLanguageInTwoCharacters() {
  var lang = userLanguageInFiveCharacters()
  var twoCharacters = lang.match(/^.{2}/g)[0]
  return twoCharacters
}

var synth = window.speechSynthesis
var voices = []

function Speak(languageInFiveCharacters, text) {
  for (var i = 0; i < voices.length; i++) {
    var voice = voices[i]
    console.log("speak in " + languageInFiveCharacters + ": " + text)
    if (voice.lang === languageInFiveCharacters) {
      var utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = voice
      synth.speak(utterance)
      return
    }
  }
}
console.log("Speak defined")

window.speechSynthesis.onvoiceschanged = function () {
  console.log("⚠️ voices have loaded")
  window.speechSynthesis.getVoices().forEach(function(voice) {
    voices.push(voice)
  })
}
