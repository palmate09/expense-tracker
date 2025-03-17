
const canvas = document.getElementById('axesCanvas'); 
const ctx = canvas.getContext('2d'); 


const canvasHeight = canvas.height; 
const canvasWidth = canvas.width;
const padding = 25; 
const axisColor = 'black'; 
const tickColor = '#666'; 
const textColor = '#555'; 
const numTicksY = 5;  

// Draw Y-axis and X-axis;
ctx.beginPath(); 
ctx.strokeStyle = axisColor; 
ctx.moveTo(padding, padding);
ctx.lineTo(padding, canvasHeight - padding); 
ctx.stroke(); 

ctx.beginPath();
ctx.strokeStyle = axisColor; 
ctx.moveTo(padding, canvasHeight - padding); 
ctx.lineTo(canvasWidth - padding, canvasHeight - padding); 
ctx.stroke();


// ctx.beginPath(); 
// ctx.strokeStyle = axisColor; 
// ctx.moveTo(padding, canvasHeight -padding); 
// ctx.lineTo(padding+90,  canvasHeight - padding -90); 
// ctx.stroke(); 

// label and ticks for Y-axis
ctx.font = '12px Arial'; 
ctx.fillStyle = textColor; 
ctx.textAlign = 'right';
ctx.textBaseline = 'middle'; 

const yAxisHeight = canvasHeight - 2*padding; 
const tickSpacingY = (yAxisHeight/4);  

for(let i = 0; i< numTicksY; i++){
    const y = canvasHeight - padding - i*tickSpacingY; 
    const value = 2*i; 
    const label = Math.round(value).toString(); 
    
    ctx.beginPath(); 
    ctx.strokeStyle = tickColor; 
    ctx.moveTo(padding-5, y); 
    ctx.lineTo(padding, y); 
    ctx.stroke(); 

    ctx.fillText(label, padding-10, y); 
}

//label and ticks for X-axis
const numTicksX = 10; 
const xAxisHeight = canvasWidth - 2*padding; 
const tickSpacingX = (xAxisHeight/numTicksX);

ctx.textAlign = 'center'; 
ctx.textBaseline = 'top'; 

for(let i = 0; i<numTicksX; i++){
    const x = padding + i*tickSpacingX + 30; 
    const label = i.toString();
    
    ctx.beginPath(); 
    ctx.strokeStyle = tickColor; 
    ctx.moveTo(x, canvasHeight -padding);
    ctx.lineTo(x, canvasHeight -padding +5);  
    ctx.stroke(); 

    ctx.fillText(label, x, canvasHeight -padding + 10);
}


ctx.translate(padding, canvasHeight - padding); 
ctx.rotate((3*Math.PI)/2);

for(let i = 0; i<numTicksX; i++){
    let randomNumber = Math.floor((Math.random() * 100)) + 1; 
    let height = randomNumber; 
    const width = 30;  
    const x = (i*tickSpacingX+40) - 24;

    if(i == 4 || i==5 || i==7 || i==8){
        ctx.fillStyle = 'red';
    }
    else{
        ctx.fillStyle = 'green'; 
    }

    ctx.fillRect(0, x, height, width);  
}




