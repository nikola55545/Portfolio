function time(){
    const span = document.getElementById("footer-time");
    const date = new Date();
    
    var pretty_time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds().toPrecision()}`;
    span.innerHTML = pretty_time;
    setTimeout(time, 1000);
}
