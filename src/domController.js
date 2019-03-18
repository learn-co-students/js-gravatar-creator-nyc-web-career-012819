function updateDOM() {
  clearDOM()
  drawGravatar()
}

function drawGravatar() {
  const input = document.querySelector("#identicon-form>div>input").value
  const identicon = new Identicon(input)
  const blockColor = `rgb(${identicon.values[0]}, ${identicon.values[1]}, ${identicon.values[2]})`

  let i = 0

  for (let row = 0; row < 5; row++) {
    for (let column = 0; column < 3; column++) {
      if (identicon.values[i] % 2 === 0) {
        document.getElementById(`${row}-${column}`).style.backgroundColor = blockColor

        switch (column) {
          case 0:
            document.getElementById(`${row}-${4}`).style.backgroundColor = blockColor
            break
          case 1:
            document.getElementById(`${row}-${3}`).style.backgroundColor = blockColor
            break
        }
      }

      i++
    }
  }
}

function clearDOM() {
  const gravatarSpans = Array.from(document.getElementById("identicon").children)

  for (span of gravatarSpans) {
    span.style.backgroundColor = ""
  }
}