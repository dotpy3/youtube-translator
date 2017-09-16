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
  var firstLetters = window.navigator.language.match(/^.{2}/g)
  if (!firstLetters) {
    return "en"
  }

  if (firstLetters[0] in languageToVoice) {
    return firstLetters[0]
  }
  
  return "en"
}
