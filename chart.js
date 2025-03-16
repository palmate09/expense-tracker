const yValues = [30, 10, 35, 30];
const barColors = [
    "skyblue",
    "red",   
    "purple", 
    "orange"
]

new Chart("ChartCanvas", {
    type: "doughnut",
    data: {
        datasets:[{
            backgroundColor: barColors,
            data: yValues
        }]
    }
});




