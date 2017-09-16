console.log('Youtube video detected, YouTube translator enabled 😈')

var url = new URL(document.URL)
var c = url.searchParams.get('v')
if (!!document.URL.match(/file/g)) {
    console.log('Debug mode detected ⚠️')
} else if (!c) {
    alert('Wow, YouTube video identifier not found 😭')
    console.log(document.URL)
} else {
    console.log('Youtube Video ' + c + ' detected')
    play(c)
}

var button = document.getElementById('button')

if (!!button) {
  button.addEventListener('click', () => {
    var content = document.getElementById('videoid').value
    if (content == '') {
        content = 'ePpPVE-GGJw'
    }
    console.log('Playing ' + content + '...')
    play(content)
  })
}

function play(video_identifier) {
    fetch_transcript('jp', video_identifier)
}
