function weather(celsius) {
celsius = Number(celsius);
if (celsius > 35){
    console.log("unknown");
}else if (celsius >= 26){
    console.log("Hot");
}else if (celsius >= 20.1){
    console.log("Warm");
}else if(celsius >= 15){
    console.log("Mild");
}else if(celsius >=12){
    console.log("Cool");
}else if(celsius >=5){
    console.log("Cold");
}else {console.log("unknown")
}
}
weather(3);