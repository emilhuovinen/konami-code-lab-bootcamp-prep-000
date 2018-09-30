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
let index = 0;
document.body.addEventListener('keydown', onKeyDownHandler);


function onKeyDownHandler(e) {
  const key = e.key;
  console.log(key);
  
  if (key === codes[index]) {
    index++;
    
    if (index === codes.length) {
      window.alert("Hurray!");
     
      
    } else {
    index = 0;
  }
    
  }
  

}
}

init();
