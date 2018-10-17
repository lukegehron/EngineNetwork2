
let infectionDiameter = [];
let infectionX = [];
let infectionY = [];
let infectionMoveX = [];
let infectionMoveY = [];
let infectionNum = 12;

let infectionArray = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

let img;
let myAlpha =1;
let myColors = [[202,31,123],[164,1,88],[126,0,68],[240,73,163],[255,116,191],[255,154,208],[202,31,66],[202,31,152],[202,31,180],[87,0,47]];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //createCanvas(1025,641);

  img = loadImage('Engine.png');

  for (let i=0; i<infectionNum; i++){
      let x = random(width);
      infectionX.push(x);
    }
    for (let i=0; i<infectionNum; i++){
        let y = random(height);
        infectionY.push(y);
      }

  for (let i=0; i<infectionNum; i++){
    let myX = random(-.03,.03);
    if (abs(myX)<.1){
      myX = myX*2
    }
    let myY = random(-.03,.03);
    if (abs(myY)<.1){
      myY = myY*5
    }
    infectionMoveX.push(random(myX));
    infectionMoveY.push(random(myY));
    let dia = int(random(height/1.5,width/1.5));
    infectionDiameter.push(dia);

  }
}

function draw() {
  background(255);
  myAlpha =10;

  for (let i=0; i<infectionNum; i++){
    if (infectionX[i] < 0){
      infectionX[i] = infectionX[i]+1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }else if (infectionX[i] > width){
      infectionX[i] = infectionX[i]-1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }
    if (infectionY[i] < 0){
      infectionY[i] = infectionY[i]+1;
      infectionMoveY[i] = infectionMoveY[i]*-1
    }else if (infectionY[i] > height){
      infectionY[i] = infectionY[i]-1;
      infectionMoveY[i] = infectionMoveY[i]*-1
    }
      infectionX[i] = infectionX[i] + infectionMoveX[i]
      infectionY[i] = infectionY[i] + infectionMoveY[i]
      noFill();
      //ellipse(infectionX[i],infectionY[i],infectionDiameter[i],infectionDiameter[i]);
      push();
      stroke(255);
      strokeWeight(3);
      let i1X = infectionX[i]+infectionDiameter[i]/2*sin(.001*frameCount+208*(2.2/i));
      infectionArray[0][0] = i1X
      let i1Y = infectionY[i]+infectionDiameter[i]/2*cos(.001*frameCount+208*(2.2/i));
      infectionArray[0][1] = i1Y
      let i2X = infectionX[i]+infectionDiameter[i]/2*sin(-.0007*frameCount+408*(2.2/i));
      infectionArray[1][0] = i2X
      let i2Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0007*frameCount+408*(2.2/i));
      infectionArray[1][1] = i2Y
      let i3X = infectionX[i]+infectionDiameter[i]/2*sin(-.002*frameCount*(2.2/i));
      infectionArray[2][0] = i3X
      let i3Y = infectionY[i]+infectionDiameter[i]/2*cos(-.002*frameCount*(2.2/i));
      infectionArray[2][1] = i3Y
      let i4X = infectionX[i]+infectionDiameter[i]/2*sin(.0013*frameCount+1132*(2.2/i));
      infectionArray[3][0] = i4X
      let i4Y = infectionY[i]+infectionDiameter[i]/2*cos(.0013*frameCount+1132*(2.2/i));
      infectionArray[3][1] = i4Y
      let i5X = infectionX[i]+infectionDiameter[i]/2*sin(-.0015*frameCount+55*(2.2/i));
      infectionArray[4][0] = i5X
      let i5Y = infectionY[i]+infectionDiameter[i]/2*cos(-.0015*frameCount+55*(2.2/i));
      infectionArray[4][1] = i5Y
  
      strokeWeight(1);
    
      pop();
      push();
      noStroke();

      //fill(202,31,123,myAlpha);
      for (let d = 0; d<5; d++){
        for (let e = 0; e<5; e++){
          for (let f = 0; f<5; f++){
            if (d != e || d !=f || e!=f){
              fill(myColors[f][0],myColors[f][1],myColors[f][2],myAlpha);
              triangle(infectionArray[d][0],infectionArray[d][1],infectionArray[e][0],infectionArray[e][1],infectionArray[f][0],infectionArray[f][1]);
          }
          }
        }
      }
      pop();
  }


image(img,0,0,width,height);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
