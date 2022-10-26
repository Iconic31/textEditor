const getDivArea = document.getElementById("divArea");
const upper = document.getElementById("upper");
const lower = document.getElementById("lower");
const capi = document.getElementById("capi");


document.querySelectorAll(".btn").forEach(function(btn){

    btn.addEventListener("click",function(){

        const getCommand = btn.dataset['command'];

        if(getCommand === "uppercase"){

            getDivArea.classList.toggle("upper");
            
            if(getDivArea.classList.contains("upper")){
                lower.disabled = true;
                capi.disabled = true;
            }else{
                lower.disabled = false;
                capi.disabled = false;
            }

        }else if(getCommand === "lowercase"){
            
            getDivArea.classList.toggle("lower");

            if(getDivArea.classList.contains("lower")){
                upper.disabled = true;
                capi.disabled = true;
            }else{
                upper.disabled = false;
                capi.disabled = false;
            }

        }else if(getCommand === "capitalize"){

            getDivArea.classList.toggle("capi");

            if(getDivArea.classList.contains("capi")){
                lower.disabled = true;
                upper.disabled = true;
            }else{
                lower.disabled = false;
                upper.disabled = false;
            }

        }else if(getCommand === "paste"){

            navigator.clipboard.readText().then(function(clipTxt){
                getDivArea.innerHTML += clipTxt;
            });

        }else if(getCommand === "createLink" || getCommand === "insertImage"){

            const getLink = prompt("Enter your website Link..","https://");
            document.execCommand(getCommand,false,getLink);

        }else if(getCommand === "foreColor"){

            // console.log(btn.value)

            document.execCommand(getCommand,false,btn.value);

        }else if(getCommand === "clear"){

            getDivArea.innerHTML = "";

        }else{

            document.execCommand(getCommand,false,null);

        }



    });

}); 

