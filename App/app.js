let btnShow = document.getElementById("btn");
let btnShowprofile = document.getElementById("btnProfile");
let div = document.getElementById("divHidden");
let divProfile = document.getElementById("divHiddenprofile");
let btnShowOpen = document.getElementById("btnOpen")
let resOpen = document.getElementById("resOpen")
let divHiddenOpen = document.getElementById("divHiddenOpen");
let btnGlass = document.getElementById("btnGlass")
let resGlass = document.getElementById("resGlass")
let divHiddenGlass = document.getElementById("divHiddenGlass");


let result = document.getElementById("result")

btnShow.addEventListener("click" , function(event){
    if(div.classList.contains("hidden")){
        div.classList.remove("hidden")
        div.classList.add("active")
    }else if(div.classList.contains("active")){
        div.classList.remove("active")
        div.classList.add("hidden")
    }
    })
    
    let imgOne = document.getElementById("imgONe");

    imgOne.addEventListener("click" , function(event){
        result.appendChild(imgOne)
        if(div.classList.contains("active")){
            div.classList.remove("active")
            div.classList.add("hidden")
        }
    })

    btnShowprofile.addEventListener("click" , function(event){
        if(divProfile.classList.contains("hidden")){
            divProfile.classList.remove("hidden")
            divProfile.classList.add("active")
        }else if(divProfile.classList.contains("active")){
            divProfile.classList.remove("active")
            divProfile.classList.add("hidden")
        }
        })
        
        let imgOneprofile = document.getElementById("imgOneprofile");
    
        imgOneprofile.addEventListener("click" , function(event){
            resProfil.appendChild(imgOneprofile)
            if(divProfile.classList.contains("active")){
                divProfile.classList.remove("active")
                divProfile.classList.add("hidden")
            }
        })


        btnOpen.addEventListener("click" , function(event){
            if(divHiddenOpen.classList.contains("hidden")){
                divHiddenOpen.classList.remove("hidden")
                divHiddenOpen.classList.add("active")
            }else if(divHiddenOpen.classList.contains("active")){
                divHiddenOpen.classList.remove("active")
                divHiddenOpen.classList.add("hidden")
            }
            })
            
            let imgOneOpen = document.getElementById("imgOneOpen");
        
            imgOneOpen.addEventListener("click" , function(event){
                resOpen.appendChild(imgOneOpen)
                if(divHiddenOpen.classList.contains("active")){
                    divHiddenOpen.classList.remove("active")
                    divHiddenOpen.classList.add("hidden")
                }
            })
            
            
            btnGlass.addEventListener("click" , function(event){
            if(divHiddenGlass.classList.contains("hidden")){
                divHiddenGlass.classList.remove("hidden")
                divHiddenGlass.classList.add("active")
            }else if(divHiddenGlass.classList.contains("active")){
                divHiddenGlass.classList.remove("active")
                divHiddenGlass.classList.add("hidden")
            }
            })
            
            let imgOneGlass = document.getElementById("imgOneGlass");
        
            imgOneGlass.addEventListener("click" , function(event){
                resGlass.appendChild(imgOneGlass)
                if(divHiddenGlass.classList.contains("active")){
                    divHiddenGlass.classList.remove("active")
                    divHiddenGlass.classList.add("hidden")
                }
            })
    





