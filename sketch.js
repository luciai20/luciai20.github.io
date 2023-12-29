// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

let lastPrintedMinute = -1;

// draw() is called 60 times per second
function draw() {
    //let hr = hour() % 12;
    let hr = hour()%12
    let min = minute();
    let sec = second();

    if (min !== lastPrintedMinute) {
        console.log(min); 
        lastPrintedMinute = min; 
    }

    background(227, 223, 178);
    noStroke();
    
    let canvasWidth = 800;
    let canvasHeight = 600;
    let padding = 50; 
    let columnWidth = (canvasWidth - padding * 4) / 3; 

    function drawCircles(timeUnit, xPosition, color, circleDiameter, circlesPerRow) { 
        fill(color);
        for (let i = 0; i < timeUnit; i++) {
            let x = xPosition + (i % circlesPerRow) * circleDiameter + padding;
            let y = canvasHeight - circleDiameter / 2 - Math.floor(i / circlesPerRow) * circleDiameter;
            ellipse(x, y, circleDiameter);
        }
    }

    let hourXpos = padding;//x start position for hour
    let minXpos = hourXpos + columnWidth + padding;//x start position for minute
    let secXpos = minXpos + columnWidth + padding;//x start position for second


    drawCircles(hr, hourXpos, [213, 141, 165], 80, 2); 
    drawCircles(min, minXpos, [194, 106, 135], 40, 5); 
    drawCircles(sec, secXpos, [179, 177, 134], 30, 6);
}