function fetch_transcript(video_identifier) {
    var xml = null
    var languages = ['cn', 'zh', 'jp', 'ja', 'ko', 'kr', 'es', 'fr', 'de', 'nl', 'en']
    for (var i = 0; i < languages.length; i++) {
        var language = languages[i]
        xml = xml_extractor_http_get(language, video_identifier)
        if (xml !== null) {
            break
        }
    }

    var transcript = xml.getElementsByTagName('transcript')[0]
    for (var i = 0; i < transcript.childNodes.length; i++) {
        var childNode = transcript.childNodes[i]
        var start_time = childNode.getAttribute('start')
        var duration = childNode.getAttribute('dur')
        var text = childNode.textContent
        console.log(text)
        text = decodeURI(text)
        console.log(text)
        var translated_text = translate(text, language, userLanguageInTwoCharacters())
        play_line(start_time, duration, translated_text)
    }
}

function xml_extractor_http_get(language, video_identifier) {
    console.log('Trying language ' + language)
    var url = "https://video.google.com/timedtext?lang=" + language + "&v=" + video_identifier
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseXML;
}
