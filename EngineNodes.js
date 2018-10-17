
let infectionDiameter = [];
let infectionX = [];
let infectionY = [];
let infectionMoveX = [];
let infectionMoveY = [];
let infectionNum = 24;

let infectionArray = [[0,0],[0,0],[0,0],[0,0],[0,0],[0,0],[0,0]];

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
    let myX = random(-.3,.3);
    if (abs(myX)<.1){
      myX = myX*2
    }
    let myY = random(-.3,.3);
    if (abs(myY)<.1){
      myY = myY*5
    }
    infectionMoveX.push(random(myX));
    infectionMoveY.push(random(myY));
    let dia = int(random(430,590));
    infectionDiameter.push(dia);

  }
}

function draw() {
  background(255);
  myAlpha =10;

  for (let i=0; i<infectionNum; i++){
    if (infectionX[i] < 0 + infectionDiameter[i]){
      infectionX[i] = infectionX[i]+1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }else if (infectionX[i] > width - infectionDiameter[i]){
      infectionX[i] = infectionX[i]-1;
      infectionMoveX[i] = infectionMoveX[i]*-1
    }
    if (infectionY[i] < 0 + infectionDiameter[i]){
      infectionY[i] = infectionY[i]+1;
      infectionMoveY[i] = infectionMoveY[i]*-1
    }else if (infectionY[i] > height - infectionDiameter[i]){
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
      let i1X = infectionX[i]+infectionDiameter[i]/2*sin(.01*frameCount+208*(.2/i));
      infectionArray[0][0] = i1X
      let i1Y = infectionY[i]+infectionDiameter[i]/2*cos(.01*frameCount+208*(.2/i));
      infectionArray[0][1] = i1Y
      let i2X = infectionX[i]+infectionDiameter[i]/2*sin(-.007*frameCount+408*(.2/i));
      infectionArray[1][0] = i2X
      let i2Y = infectionY[i]+infectionDiameter[i]/2*cos(-.007*frameCount+408*(.2/i));
      infectionArray[1][1] = i2Y
      let i3X = infectionX[i]+infectionDiameter[i]/2*sin(-.02*frameCount*(.2/i));
      infectionArray[2][0] = i3X
      let i3Y = infectionY[i]+infectionDiameter[i]/2*cos(-.02*frameCount*(.2/i));
      infectionArray[2][1] = i3Y
      let i4X = infectionX[i]+infectionDiameter[i]/2*sin(.013*frameCount+1132*(.2/i));
      infectionArray[3][0] = i4X
      let i4Y = infectionY[i]+infectionDiameter[i]/2*cos(.013*frameCount+1132*(.2/i));
      infectionArray[3][1] = i4Y
      let i5X = infectionX[i]+infectionDiameter[i]/2*sin(-.015*frameCount+55*(.2/i));
      infectionArray[4][0] = i5X
      let i5Y = infectionY[i]+infectionDiameter[i]/2*cos(-.015*frameCount+55*(.2/i));
      infectionArray[4][1] = i5Y
      let i6X = infectionX[i]+infectionDiameter[i]/2*sin(-.01*frameCount+1320*(.2/i));
      infectionArray[5][0] = i6X
      let i6Y = infectionY[i]+infectionDiameter[i]/2*cos(-.01*frameCount+1320*(.2/i));
      infectionArray[5][1] = i6Y
      point(infectionX[i]+infectionDiameter[i]/2*sin(.01*frameCount+208*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(.01*frameCount+208*(.2/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.007*frameCount+408*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.007*frameCount+408*(.2/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.02*frameCount*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.02*frameCount*(.2/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(.013*frameCount+1132*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(.013*frameCount+1132*(.2/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.015*frameCount+55*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.015*frameCount+55*(.2/i)));
      point(infectionX[i]+infectionDiameter[i]/2*sin(-.01*frameCount+1320*(.2/i)),infectionY[i]+infectionDiameter[i]/2*cos(-.01*frameCount+1320*(.2/i)));
      strokeWeight(1);

      line(i1X,i1Y,i2X,i2Y);
      line(i1X,i1Y,i3X,i3Y);
      line(i1X,i1Y,i4X,i4Y);
      line(i1X,i1Y,i5X,i5Y);
      line(i1X,i1Y,i6X,i6Y);

      line(i2X,i2Y,i3X,i3Y);
      line(i2X,i2Y,i4X,i4Y);
      line(i2X,i2Y,i5X,i5Y);
      line(i2X,i2Y,i6X,i6Y);

      line(i3X,i3Y,i4X,i4Y);
      line(i3X,i3Y,i5X,i5Y);
      line(i3X,i3Y,i6X,i6Y);

      line(i4X,i4Y,i5X,i5Y);
      line(i4X,i4Y,i6X,i6Y);

      line(i5X,i5Y,i6X,i6Y);
      pop();
      push();
      noStroke();

      //fill(202,31,123,myAlpha);
      for (let d = 0; d<6; d++){
        for (let e = 0; e<6; e++){
          for (let f = 0; f<6; f++){
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
