let button = document.getElementsByTagName('button')[0];

let fecha = new Date();
let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDate();
let formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;


button.addEventListener('click', function() {
    
    document.getElementById('fechas').value = formattedDate;
    console.log(document.getElementById('fechas').value);
})