/*
Methods in this file require you pass in a "ctx"
This specifies which context you are drawing to
(which canvas you are drawing to.)
*/

const lineWidth = 1;
const thickLineWidth = 2.5;

function drawThickLine(x1,y1, x2, y2, ctx) {
    ctx.lineWidth = thickLineWidth;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function crossBeams(x1, y1, x2, y2, q, s, ctx) {
  for (i=0; i<q; i++) {
    drawThickLine(x1, y1+s*i, x2, y2+s*i, ctx);
  }
}

function drawReticle(x, y, ctx) {
    ctx.fillStyle = '#77f';
    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
  
function drawLine(x1, y1, x2, y2, ctx)  {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

function drawBezier(x1, y1, x2, y2, x3, y3, x4, y4, ctx) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.bezierCurveTo(x2, y2, x3, y3, x4, y4);
    ctx.stroke();
}

function drawNoteHead(x, y, ctx) {
    ctx.beginPath();
    ctx.ellipse(x, y, 6/2, 8/2, Math.PI / 3, 0, 2 * Math.PI);
    ctx.fill();
}

function drawEigthRest(x, y, d, ctx) {
    let xdiff = 1.5;
    let m = 1;
    let radians = (2/3)*Math.PI;
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#000";
    for (i=0; i<d; i++) {
        ctx.beginPath();
        ctx.arc(x-xdiff*i, y-1+10*i, 2.5*m, Math.PI*0.5, Math.PI*-2.5, true);
        ctx.closePath();
        ctx.fill();
        ctx.beginPath();
        ctx.moveTo(x+2.5*Math.cos(radians)+xdiff*i, y+2.5*Math.sin(radians)-2+10*i);
        ctx.bezierCurveTo(x+4-xdiff*i, y+2.5+10*i, x+6-xdiff*i, y+10*i, x+8-xdiff*i, y-2+10*i);
        ctx.stroke();
        if (i==0) {
            ctx.lineTo(x+4, y+27);
            ctx.stroke();
        }
    }
}

function drawQuarterRest(x, y, ctx) {
  let m = 10;
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(x, y+2);
  ctx.bezierCurveTo(x-3, y, x-8, y-2, x-4, y+9);
  ctx.bezierCurveTo(x-10, y-3, x-6, y-5, x, y+2);
  ctx.fill();
  ctx.lineTo(x-7,y-9);
  ctx.bezierCurveTo(x-3, y-13, x-3, y-15, x-6, y-19);
  ctx.lineTo(x+1,y-10);
  ctx.bezierCurveTo(x-5, y-9, x-3, y-3, x, y);
  ctx.fill();
  ctx.stroke();
}

// x   position of flag bezier start
// y   position of flag bezier start
// q   quantity of flags
// sd  stem direction
// ctx declare which canvas context

function drawFlags(x, y, q, sd, ctx) {
  let dx = [0,   2,   8,   4]; // ("flag delta x")
  let dy = [0,   1, 7.5,  16]; // ("flag delta y")
  let g = 3.8; // (vertical gap between flags)
  if (sd === 1) {
    // (stem direction is up)
    for (i=0; i<q; i++) {
      drawBezier(x, y+i*g, x+dx[1], y+dy[1]+i*g, x+dx[2], y+dy[2]+i*g, x+dx[3], y+dy[3]+i*g, ctx);
    }
  } else if (sd === 0) {
    // (stem direction is down)
    for (i=0; i<q; i++) {
      drawBezier(x, y-i*g, x+dx[1], y-dy[1]-i*g, x+dx[2], y-dy[2]-i*g, x+dx[3], y-dy[3]-i*g, ctx);
    }
  }
}

function drawTrebleClef(x, y, ctx) {
    // drawReticle(x, y, ctx);
    ctx.fillStyle = '#000';
    ctx.strokeStyle = '#000';
    ctx.beginPath ();
    ctx.moveTo (x-5, y+20);
    ctx.bezierCurveTo (x+3, y+40, x+4, y+15, x-4, y-40);
    ctx.bezierCurveTo (x+16, y-35, x-20, y-4, x-4, y+14);
    ctx.bezierCurveTo (x+16, y+35, x+10, y-45, x-4, y+5);
    ctx.stroke ();
}

function drawBassClef(x, y, ctx) {
  ctx.strokeStyle = "#000000";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
  //reticle done
  //begin main swoop
  let x1 = x-2;
  let x2 = x-2;
  let x3 = x+10;
  let x4 = x+5
  let y1 = y;
  let y2 = y-10;
  let y3 = y-10;
  let y4 = y+40;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(x2, y2, x3, y3, x4, y4);
  ctx.bezierCurveTo(x3+4, y3, x2+4, y2-4, x1-4, y1-8);
  ctx.fill();
  for (i=0; i<2; i++) {
    ctx.beginPath();
    ctx.arc(x+15, y+10*i, 2, 0, Math.PI*2, true);
    ctx.closePath();
    ctx.fill();
  }
}

function drawKeySignature(x, y, a, ctx) {
  let orderOfFlats  = [  0, -15,   5, -10, 10,  -5, 15];
  let orderOfSharps = [-20,  -5, -25, -10,  5, -15,  0];
  //drawReticle(x,y);
  if (a < 0) {
    for(i=0; i>a; i-=1) {
      drawFlat(x+5*-i, y+orderOfFlats[-i], ctx);
    }
  } else if (a > 0) {
    for(i=0; i<a; i++){
      drawSharp(x+5*i, y+orderOfSharps[i], ctx);
    }
  }
}

function drawFlat(x, y, ctx) {
    //drawReticle (x,y);
    ctx.beginPath();
    ctx.moveTo(x-1, y-13);
    ctx.lineTo(x-3, y+4);
    ctx.bezierCurveTo(x+5, y+1, x+5, y-5, x-3, y-1);
    ctx.bezierCurveTo(x+5, y-5, x+5, y+1, x-3, y+4);
    ctx.stroke();
}

function drawDoubleFlat(x, y, ctx) {
    //drawReticle(x,y);
    drawFlat(x, y, ctx);
    drawFlat(x-5, y, ctx);
}

function drawSharp(x, y, ctx) {
    //drawReticle(x,y);
    ctx.font = "18px arial"
    ctx.fillText("#", x-4, y+7);
}

function drawDoubleSharp(x, y, ctx) {
    //drawReticle(x,y);
    ctx.font = "16px arial"
    ctx.fillText("x", x-4, y+5);
}

function drawNatural(x,y, ctx){
    //drawReticle(x,y);
    drawLine(x-2,y-8,x-2,y+5, ctx);
    drawLine(x-2,y+0,x+2,y-5, ctx);
    drawLine(x-2,y+5,x+2,y-0, ctx);
    drawLine(x+2,y-5,x+2,y+8, ctx);
}


