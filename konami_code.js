const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];



function init() {

document.body.addEventListener('keydown', onKeyDownHandler);


function onKeyDownHandler(e) {
  const key = e.key;
  let index = 0;
  console.log(key);
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      window.alert("Hurray!");
      index = 0;
      
    } else {
    index = 0;
  }
    
  }
  

}
}

init();
