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
document.body.addEventListener("keydown", (e) => {
    const key = e.key
    
   let idx = (codes[idx] === key) ? ++idx : 0
    
    if (idx === codes.length) {
      window.alert("Hurray!");
      idx = 0
    }
    
  });
  


 

}

init();
