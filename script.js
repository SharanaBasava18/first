var add=document.querySelector("#add")
var istatus=document.querySelector("#card h5")
var n=0
add.addEventListener("click",function(){
    if(n==0){
        istatus.innerHTML="Friend"
        
        add.innerHTML="Remove"
        add.style.backgroundColor="lightcoral"
        istatus.style.color="green"
        n=1
    }
    else{
        istatus.innerHTML="Stranger"
        n=0
        add.innerHTML="Add Friend"
        istatus.style.color="red"
        add.style.backgroundColor="lightgreen"
    }
    
}
)




