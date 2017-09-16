function fetch_transcript(language, video_identifier) {
    url = "http://video.google.com/timedtext?lang=" + language + "&v=" + video_identifier
    var x = new XMLHttpRequest();
    x.open("GET", url, true);
    x.onreadystatechange = function () {
      if (x.readyState == 4 && x.status == 200)
      {
        var doc = x.responseXML;
        document.write(doc)
      }
    };
}
