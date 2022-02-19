const density = 'spark. ';

let trial;

function preload() {
  trial = loadImage("sparkles.jpg");
}

function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);
  //image(trial, 0, 0, width, height);
  
  let w = width/trial.width;
  let h = height/trial.height;
  trial.loadPixels();
  for(let i =0; i< trial.width;i++){
    for(let j =0;j< trial.height;j++){
      const pixelIndex = (i + j * trial.width)* 4;
      const r = trial.pixels[pixelIndex + 0];
      const g = trial.pixels[pixelIndex + 1];
      const b = trial.pixels[pixelIndex + 2];
      const avg = (r+b+g)/3;
      
      const len = density.length;
      const charIndex = floor(map(avg,0,255,len,0));
      
      noStroke();
      fill(avg);
      //square(i*w, j*h, w);
      textSize(w*2);
      textAlign(CENTER, CENTER);
      text(density.charAt(charIndex),i*w+w*0.5, j*h+h*0.5);
    }
  }
}
