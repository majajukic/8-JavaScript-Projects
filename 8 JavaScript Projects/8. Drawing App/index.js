//html elements:
const colorCircle = document.querySelectorAll(".color-circle");
const clearBtn = document.querySelector(".fa-refresh");
const downloadBtn = document.querySelector("a");
let canvas = document.querySelector("canvas");

//variables:
let penSize = 5;
let isDrawing = false;
//detecting mouse coordinates:
let x;
let y;

//canvas events:
c = canvas.getContext("2d");
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    x = undefined;
    y = undefined;
  });

canvas.addEventListener("mousemove", (e) => {
    draw(e.offsetX, e.offsetY);
});

//initial color:
c.fillStyle = "hotpink";
c.strokeStyle = c.fillStyle;

//function draw:
const draw = (x1, y1) => {
    if(isDrawing) {
        //drawing circle
        c.beginPath();
        c.arc(x1, y1, penSize, 0, Math.PI * 2);
        c.closePath();
        c.fill();

         //draw line:
         drawLine(x, y, x1, y1);
    }
    //reset coordinates after line drawing:
    x = x1;
    y = y1;
}

//function drawLine:
const drawLine = (x, y, x1, y1) => {
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(x1, y1);
    c.strokeStyle = c.fillStyle;
    c.lineWidth = penSize * 2;
    c.stroke();
}

//function for selecting color:
const selectColor = (element) => {
    removeActiveCircleColor();
    
    //explicitly declaring hotpink again to avoid the error of rememebring the last color and not changing to pink
    if(element.getAttribute("data-color") === "hot-pink") {
        c.fillStyle = "hotpink";
    }

    c.fillStyle = element.getAttribute("data-color");
    element.classList.add("active");
}

//removing active circle:
const removeActiveCircleColor = () => {
    colorCircle.forEach((circle) => {
      circle.classList.remove("active");
    });
  };

//function for penSize change:
function penSizeChange(pensize) {
    penSize = pensize;
}

//function for chosenColor:
const chosenColor = (element) => {
    c.fillStyle = element.value;
}

//function for downloading: 
downloadBtn.addEventListener("click", (e) => {
    e.target.href = canvas.toDataURL();
});

//function to clear canvas:
clearBtn.addEventListener("click", () => {
    c.clearRect(0, 0, canvas.width, canvas.height);
});