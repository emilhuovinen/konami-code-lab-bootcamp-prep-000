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
  // your code here
  var count = 0
   document.body.addEventListener('keydown', function(e) {
  const key = e.key;
  if (key === codes[count]) {
    count++;
     if (count === codes.length) {
      alert("Hurray!");
       count = 0;
    }
  } else {
    count = 0;
  }
})
}

init();
