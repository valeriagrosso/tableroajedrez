let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");

function rectangulo(x, y, w, h) {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fill();
  ctx.stroke();
}

for (let xC = 50; xC <= 350; xC += 100) {
  rectangulo(xC, 0, 50, 50);
}
for (let nFila = 0; nFila < 8; nFila++){
    yC = 0 + nFila * 50;
    if (nFila %2 == 0){
        for (let xC = 50; xC <= 350; xC += 100){
            rectangulo(xC, yC, 50, 50);
        }
    }
    else{
        for (let xC = 0; xC <= 350; xC += 100){
            rectangulo(xC, yC, 50, 50);
        }
    }
}
