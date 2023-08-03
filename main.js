var but=document.querySelector("a");
console.log(but);


    //console.log(ques);
    but.addEventListener("click",function(){
        if(but.nextElementSibling.classList.contains("para")){
            but.nextElementSibling.classList.remove("para");              
        }


        else{
            but.nextElementSibling.classList.add("para");
        }

    })