var slider = document.getElementById("myRange");
var text = document.getElementById("gravityslidertext")

slider.oninput = function() {
  console.log(this.value / 1000)
  gravity = this.value / 1000
  text.textContent = 'Gravity:' + this.value / 1000
  console.log(gravity);
}
