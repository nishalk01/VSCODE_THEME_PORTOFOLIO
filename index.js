var i = 0;

const rando=["som1","som2","good"]
function typeWriting(txt){
    if(i< txt.length){
        
        document.getElementById("typed-text").innerHTML+=txt.charAt(i);
        i++;
        setTimeout(()=>{
             setTimeout(typeWriting(txt),2000)
            
        },1000)
        
    }
}

// setTimeout(typeWriting(),);

typeWriting('text')