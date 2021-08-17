var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
if(date <= today){
console.log("La fecha no es válida");
  }
if(date => today){
console.log("fecha valida");
  }
