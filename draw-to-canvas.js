




var canvas1 = document.getElementById("canvas1");
var ctx1 = canvas1.getContext("2d");
var canvas1_title = "Similar Shirt riff";
//drawText(x, y, canvas1_title, black);
ctx1.fillStyle = "#FF0000";
ctx1.fillRect(0, 0, canvas1.width, canvas1.height);
for (e=0; e<3; e++) {
    drawTrebleClef(10, 40+20+70*e, ctx1);
    for (i=0; i<5; i++) {
        drawLine(10, 30+10*i+70*e, 490, 30+10*i+70*e, ctx1);
    }
}
drawNoteHead(25, 30+25, ctx1);
drawNoteHead(35, 30+25, ctx1);
drawBezier(35, 30+25+7, 35+(45-35)/3, 30+25+7+5, 35+2*(45-35)/3, 30+25+7+5, 45, 30+25+7, ctx1);
drawNoteHead(45, 30+25, ctx1);
drawNoteHead(55, 30+25, ctx1);
drawNoteHead(65, 30+25, ctx1);
drawNoteHead(75, 30+25, ctx1);
drawNoteHead(85, 30+25, ctx1);



