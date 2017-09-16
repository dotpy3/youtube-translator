var player = document.getElementsByTagName("video")[0]

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

function playerReadiness () {
  var currentTimestamp = event.target.currentTime
  console.log("Re-adding functions...")
  console.log(`${funcsToExecute.length} functions to re-add`)
  funcsToExecute.forEach(funcToExecute => {
    if (funcToExecute.timing > currentTimestamp) {
      var timeBeforeExecution = (funcToExecute.timing - currentTimestamp) * 1000
      console.log("Executing function in ", timeBeforeExecution, "ms")
      var functionMarker = setTimeout(funcToExecute.func, timeBeforeExecution)
      functionsMarkers.push(functionMarker)
    }
  })
  console.log("Functions re-attached!")
}

function cancelAllFunctions() {
  functionsMarkers.forEach(marker => {
    clearTimeout(marker)
  })
  functionsMarkers = []
  console.log("Functions canceled!")
}

function attachEventListener(player) {
  player.addEventListener('playing', playerReadiness)
  player.addEventListener('playing', () => { console.log('video playing') })
  player.addEventListener('pause', cancelAllFunctions)
  player.addEventListener('pause', () => { console.log('video paused') })
  player.addEventListener('ended', cancelAllFunctions)
  player.addEventListener('ended', () => { console.log('video ended') })
}

if (!!player) {
  attachEventListener(player)
}

AddVideoAction(4, () => {
  alert("Hello world")
})
