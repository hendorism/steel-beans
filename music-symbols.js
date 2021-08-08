

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
