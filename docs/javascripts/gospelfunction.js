function visibleclick(i){
    var x = document.getElementById(i);
    if(x.style.display === 'none'){
        close();
        x.style.display='block';
    }
    else 
        x.style.display = 'none';
 
}

function close(){
    document.getElementById('hymn1').style.display = 'none';
    document.getElementById('hymn2').style.display = 'none';
    document.getElementById('hymn3').style.display = 'none';
    document.getElementById('hymn4').style.display = 'none';
}