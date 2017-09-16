var player = document.getElementsByTagName("video")[0]

if (!!player) {
  attachEventListener(player)
}

var funcsToExecute = []
var functionsMarkers = []

// AddVideoAction:
// - timing: timestamp in seconds of the video when func will be executed
// - func: function to be executed (without parameters)
function AddVideoAction(timing, func) {
  funcsToExecute.push({
    timing: timing,
    func: func
  })

  if (videoPlaying() && timing > player.currentTime) {
    functionsMarkers.push(setTimeout(func, (timing - player.currentTime) * 1000))
  }
}

function videoPlaying() {
  if (player.currentTime <= 0) {
    return false
  }

  if (player.paused === true || player.ended === true) {
    return false
  }

  return true
}

var playerReadiness = event => {
  var currentTimestamp = event.target.currentTime
  funcsToExecute.forEach(funcToExecute => {
    if (funcToExecute.timing > currentTimestamp) {
      var timeBeforeExecution = (funcToExecute.timing - currentTimestamp) * 1000
      var functionMarker = setTimeout(funcToExecute.func, timeBeforeExecution)
      functionsMarkers.push(functionMarker)
    }
  })
  console.log("Functions re-attached!")
}

var cancelAllFunctions = () => {
  functionsMarkers.forEach(marker => {
    clearTimeout(marker)
  })
  functionsMarkers = []
  console.log("Functions canceled!")
}

function attachEventListener(player) {
  player.addEventListener('playing', playerReadiness)
  player.addEventListener('pause', cancelAllFunctions)
  player.addEventListener('ended', cancelAllFunctions)
}

AddVideoAction(4, () => {alert("hello world")})
