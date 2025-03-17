const circle = document.getElementById('CircleCanvas'); 
const context = circle.getContext('2d'); 

const centerX = circle.width;
const centerY = 0; 
const color = ['lightgrey', '#2F8A5D','#1C6E43']; 
const maxRadius = 150; 
const step = 40; 


for(let i =color.length -1; i>=0; i--){
    context.beginPath(); 
    context.arc(centerX, centerY, (i+1)*step, 0, Math.PI*2); 
    context.fillStyle = color[i];
    context.fill(); 
    context.closePath();  
}

context.shadowColor = "rgba(50, 50, 50, 0.8)";
context.shadowBlue = 15; 
context.shadowOffsetX = 8; 
context.shadowOffsetY = 8; 


