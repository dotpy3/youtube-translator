function translate(text, source_language, destination_language) {
    var base_url = "https://translate.yandex.net/api/v1.5/tr.json/translate"
    var api_key = "trnsl.1.1.20170916T111235Z.49c48b59446db22e.8d12c89b24554bc727dc285db6f15dd3a0852ce4"

    var url = base_url + "?key=" + api_key + "&text=" + text + "&lang=" + source_language + "-" + destination_language
    url = encodeURI(url)
    var response = httpGet(url)
    var translated_text = response.text[0]
    return translated_text
}

function httpGet(url)
{
    var http = new XMLHttpRequest();
    http.open( "GET", url, false ); // false for synchronous request
    http.send( null );
    return JSON.parse(http.responseText);
}
