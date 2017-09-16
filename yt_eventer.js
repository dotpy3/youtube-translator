var player = document.getElementById("movie_player")

if (!!player) {
  alert("MOVIE PLAYER FOUND!!!")
  attachEventListener(player)
}

function attachEventListener(player) {
  player.addEventListener('yt-action', event => {
    console.log("NEW YT-ACTION!!!")
    console.log(event)
  })
}
