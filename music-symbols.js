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
  
function drawLine(x1, y1, x2, y2, ctx){
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

function drawNoteHead(x, y, ctx){
    ctx.beginPath();
    ctx.ellipse(x, y, 6/2, 8/2, Math.PI / 3, 0, 2 * Math.PI);
    ctx.fill();
}

function drawEigthRest(x, y, d, ctx) {
    let xdiff = 1.5;
    let m = 1;
    let radians = (2/3)*Math.PI;
    ctx.fillStyle = "#000";
    ctx.strokeStyle = '#000';
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
/*
 function drawFlags(x, y, q, xd, yd, ctx) {
     if (yd==="u" && xd==="l") {
         for (i=0, i<q; i++) {
             drawBezier(x, y, x+2, y+3, x+4, y+5, x+2, y+6, ctx);
         }
     }
     if (yd==="u" && xd==="r") {
         for (i=0, i<q; i++) {
             drawBezier(x, y, x-2, y+3, x-4, y+5, x-2, y+6, ctx);
         }
     }
     if (yd==="d" && xd==="l") {
         for (i=0, i<q; i++) {
             drawBezier(x, y, x-2, y-3, x-4, y-5, x-2, y-6, ctx);
         }
     }
     if (yd==="d" && xd==="r") {
         for (i=0, i<q; i++) {
             drawBezier(x, y, x+2, y-3, x+4, y-5, x+2, y-6, ctx);
         }
     }
 }
*/
function drawTrebleClef(x, y, ctx){
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
