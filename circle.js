const circle = document.getElementById('CircleCanvas'); 
const context = circle.getContext('2d'); 

const centerX = circle.width;
const centerY = 0; 
const color = ['lightgrey', '#2F8A5D','#1C6E43']; 
const maxRadius = 120; 
const step = 50; 


for(let i =color.length -1; i>=0; i--){
    context.beginPath(); 
    context.arc(centerX, centerY, (i+1)*step, 0, Math.PI*2); 
    context.fillStyle = color[i];
    context.fill(); 
    context.closePath();  
}


