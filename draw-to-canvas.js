




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
drawNoteHead(25, 30+25, ctx1); // A4   1-1-1/2
drawLine(25+3, 30+25, 25+3, 30-5, ctx1);
drawNoteHead(35, 30+25, ctx1); // A4   1-1-2/2
drawLine(35+3, 30+25, 35+3, 30-7, ctx1);
//crossBeams(25+3, 30-5, 35+3, 30-7, 1, 6, ctx1);
drawBezier(35, 30+25+7, 35+(45-35)/3, 30+25+7+5, 35+2*(45-35)/3, 30+25+7+5, 45, 30+25+7, ctx1); // tie
drawNoteHead(45, 30+25, ctx1); // A4   1-2-1/4
drawNoteHead(55, 30+20, ctx1); // B4   1-2-2/4
drawNoteHead(65, 30+15, ctx1); // C#5  1-2-3/4
drawNoteHead(75, 30+05, ctx1); // E5   1-2-4/4
drawLine(45+3, 30+25, 45+3, 30-2, ctx1);
drawLine(55+3, 30+20, 55+3, 30-4, ctx1);
drawLine(65+3, 30+15, 65+3, 30-6, ctx1);
drawLine(75+3, 30+05, 75+3, 30-8, ctx1);
crossBeams(45+3, 30-2, 75+3, 30-8, 1, 5, ctx1); // beat2

drawEigthRest(85, 30+15, 1, ctx1);
drawNoteHead(105, 30+05, ctx1);
drawLine(105+3, 30+05, 105+3, 30-20, ctx1);
//drawFlags(105+3, 30-20, 2, "r", "u", ctx);

drawEigthRest(115, 30+15, 1, ctx1);
drawNoteHead(135, 30+05, ctx1);
drawLine(135+3, 30+05, 135+3, 30-20, ctx1);
//drawFlags(135+3, 30-20, 2, "r", "u", ctx);

drawEigthRest(145, 30+15, ctx1);
drawEigthRest(155, 40+15, ctx1);
drawEigthRest(165, 50+15, ctx1);
drawEigthRest(175, 60+15, ctx1);

drawLine(10, 10, 100, 100, ctx1);






var canvas2 = document.getElementById("canvas2");
var ctx2 = canvas2.getContext("2d");
var canvas2_title = "test canvas";
//drawText(x, y, canvas1_title, black);
ctx1.fillStyle = "#ffbbbb";
ctx1.fillRect(0, 0, canvas2.width, canvas2.height);
for (e=0; e<3; e++) {
    drawTrebleClef(10, 40+20+70*e, ctx2);
    for (i=0; i<5; i++) {
        drawLine(10, 30+10*i+70*e, 490, 30+10*i+70*e, ctx2);
    }
}




















