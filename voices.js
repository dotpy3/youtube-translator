var languageToVoice = {
  de: "Deutsch Female",
  en: "UK English Female",
  es: "Spanish Female",
  fr: "French Female",
  it: "Italian Female",
  jp: "Japanese Female",
  kr: "Korean Female",
  nl: "Dutch Female",
  ru: "Russian Female",
  se: "Swedish Female",
}

function userLanguage() {
  return window.navigator.language
}

function userLanguageForTranslator() {
  var lang = userLanguage()
  var twoCharacters = lang.match(/^.{2}/g)[0]
  return twoCharacters
}

var synth = window.speechSynthesis
var voices = synth.getVoices()

function Speak(language, text) {
  for (var voice of voices) {
    if (voice.lang === language) {
      var utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = voice
      synth.speak(utterance)
    }
  }
}
