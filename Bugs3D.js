let bugXArray = [];
let bugYArray = [];
let bugZArray = [];
speed = 1;
let bugDiameter = [];
let numBugs = 6

function setup() {
  createCanvas(720,400,WEBGL);
  for (let i=0; i<numBugs; i++){
    let x = random(-100,100);
    bugXArray.push(x);
  }
  for (let i=0; i<numBugs; i++){
    let y = random(-100,100);
    bugYArray.push(y);
  }
  for (let i=0; i<numBugs; i++){
    let z = random(-100, 100);
    bugZArray.push(z);
  }
  for (let i=0; i<numBugs; i++){
    let dia = random(30,100);
    bugDiameter.push(dia);
  }

}

function draw() {
  background(255);
  orbitControl();
  push();
  rotateZ(frameCount * 0.005);
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.005);



  for (let i = 0; i< numBugs; i++){
    push();
    translate(bugXArray[i],bugYArray[i],bugZArray[i]);
    sphere(5);
    pop();
  }
  for (let i = 0; i< numBugs; i++){
    for (let j = 0; j< numBugs; j++){
      line(bugXArray[i],bugYArray[i],bugZArray[i],bugXArray[j],bugYArray[j],bugZArray[j])
      }
  }
  pop();
}
