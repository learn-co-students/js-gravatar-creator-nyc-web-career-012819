function updateDOM(numberArray) {
  const leftBlocks = ['0-0','0-1','1-0','1-1','2-0','2-1','3-0','3-1','4-0','4-1'];
  const rightBlocks = ['0-4','0-3','1-4','1-3','2-4','2-3','3-4','3-3','4-4','4-3'];
  const midBlocks = ['0-2','1-2','2-2','3-2','4-2'];
  const lastFiveNums = numberArray.slice(-5);
  let blockColor = `rgb(${numberArray[0]}, ${numberArray[1]}, ${numberArray[2]})`;

  for (let i = 0; i < 5; i++) {
    if (lastFiveNums[i] % 2 === 0) {
      document.getElementById(`${midBlocks[i]}`).style.backgroundColor = blockColor;
    }
  }
  for (let i = 0; i < 15; i++) {
    if (numberArray[i] % 2 === 0) {
      document.getElementById(`${leftBlocks[i]}`).style.backgroundColor = blockColor;
      document.getElementById(`${rightBlocks[i]}`).style.backgroundColor = blockColor;
    } else {
      continue;
    }
  }

}
