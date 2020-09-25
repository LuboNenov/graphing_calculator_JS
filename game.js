// Creating variables
function redraw() {
draw()
    }
let x = 0, y = 0,k;
var functions = [function (x) {
},x => k];

let cords = [];
function drawFunction() {
    let coordinates = [];
    for(let i = 0; i < functions.length; i++) {
        for(let x = -300; x < 300;  x = x+0.05) {
            coordinates.push(
                {
                    x: 10*x, 
                    y: functions[i](x)
                }
            )
        }
    }
    return coordinates;
}
    
function update() {
    
    
    
}

function draw() {
    context.fillStyle="black"
    context.fillRect(0,0,800,600)
    
    let cords = drawFunction();
    for(let i = 0; i < cords.length; i++) {
        context.fillStyle="green"
        context.fillRect(canvas.width/2 - cords[i].x, canvas.height/2 - cords[i].y, 1, 1)
    }

    context.fillStyle = "red";
    context.beginPath();
    context.arc(canvas.width/2, canvas.height/2, 5, 0, Math.PI*2);
    context.fill();
    context.strokeStyle = "white"
    context.strokeWidth= 1;
    context.beginPath();
    context.moveTo(canvas.width/2, 0);
    context.lineTo(canvas.width/2, canvas.height);
    context.stroke();
    context.beginPath();
    context.moveTo(canvas.width, canvas.height/2);
    context.lineTo(0, canvas.height/2);
    context.stroke();

    
    
}

function keyup(key) {
    // Show the pressed keycode in the console
    console.log("Pressed", key);
}

function mouseup() {
    // Show coordinates of mouse on click
    console.log("Mouse clicked at", mouseX, mouseY);
}