var target=document.getElementById('btn');
target.addEventListener('click',function(){
    var uts=document.getElementById('uts').value;
    var uas=document.getElementById('uas').value;
    var tugas=document.getElementById('tugas').value;

    var total=(Number(uts))+Number(uas)+Number(tugas);
    var per=(total*100)/300;

    if(per > 80 ){
        var grade="A Selamat kamu lulus"
    }
    else if(per > 70){
        var grade="B"
    }
    else if(per > 60){
        var grade="C"
    }
    else if(per > 45){
        var grade="D"
    }
    else{
        var grade="E"
    }

    document.getElementById('text').innerHTML=(grade);
})