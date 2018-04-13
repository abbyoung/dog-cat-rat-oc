function setup(){
  var canvas = createCanvas(250, 250);
  canvas.parent('canvas-container');
}

function draw(){
  // Hidden message
  textSize(30);
  textFont("Helvetica");
  fill(255);
  text("dog cat rat", 10, height/2);
  // textSize(100);

  // Make that emoji mouse sing
  let face = "🐁\n🐈\n🐕";
  // if (mouseX < windowWidth/2){
  //   face = "n🐁�\n🐈\🐕n";
  // } else {
  //   face = "🐁";
  // }
  textSize(36);
  text(face, mouseX, mouseY);
}