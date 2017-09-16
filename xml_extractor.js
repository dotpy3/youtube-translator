function fetch_transcript(language, video_identifier) {
    var xml = httpGet(language, video_identifier)
    var transcript = xml.getElementsByTagName('transcript')[0]
    for (var i = 0; i < transcript.childNodes.length; i++) {
        var childNode = transcript.childNodes[i]
        var start_time = childNode.getAttribute('start')
        var duration = childNode.getAttribute('dur')
        var text = childNode.textContent
        var translated_text = translate(text, language, 'es')
        play_line(start_time, duration, translated_text)
    }
}

function httpGet(language, video_identifier) {
    var url = "https://video.google.com/timedtext?lang=" + language + "&v=" + video_identifier
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseXML;
}
