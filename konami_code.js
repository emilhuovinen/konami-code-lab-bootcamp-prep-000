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
document.body.addEventListener('keydown', (event) => {

  const key = e.key;
  
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

)}

init();
