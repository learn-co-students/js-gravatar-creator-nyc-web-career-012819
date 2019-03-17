document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('identicon-form');
  const grid = Array.from(document.querySelectorAll('span'));

  let leftSpan = Array.from(document.querySelectorAll('span')).filter((span) => {
    return span.id[2] == 0 || span.id[2] == 1 || span.id[2] == 2
  });
  let rightSpan = Array.from(document.querySelectorAll('span')).filter((span) => {
    return span.id[2] == 2 || span.id[2] == 3 || span.id[2] == 4
  });
  let identicon;

  function handleSubmit(e) {
    e.preventDefault();
    if(document.querySelector("input").value === ""){
      clearDisplay();
    } else {
      let hashArr = md5.array(document.querySelector('input').value);
      identicon = new Identicon(`${hashArr.slice(1)}`, `rgb(${hashArr.slice(0,3)})`);
      displayBlocks(identicon);
    }
  }

  function clearDisplay(){
    grid.forEach(function(span){
      span.style.background = '';
    });
  }

  function displayBlocks(identicon){
    let counter = 0;
    clearDisplay();
    identicon.blockArray.split(',').forEach(function(block){
       if(block % 2 === 0){
         leftSpan[counter].style.background = identicon.blockColor;
         if(counter === 0 || counter === 3 || counter === 6 || counter === 9 || counter === 12){
           rightSpan[counter + 2].style.background = identicon.blockColor;
         } else if(counter === 1 || counter === 4 || counter === 7 || counter === 10 || counter === 13) {
           rightSpan[counter].style.background = identicon.blockColor;
         }
       }
       counter++;
    });
  }

  form.addEventListener("submit", handleSubmit);

})
