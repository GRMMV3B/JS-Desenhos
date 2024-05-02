function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("green");
    fill("purple");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }