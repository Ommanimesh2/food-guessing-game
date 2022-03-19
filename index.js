async function getfoodNames(){
    const take=await fetch('https://foodish-api.herokuapp.com/api/')
        const foodName=await take.json()
        console.log(foodName.image)
        const body=document.querySelector(".imga")
        const img= document.createElement("img")
        const test=document.getElementById("textbox")
        const btn=document.querySelector(".btn")
        const hintName=document.querySelector(".hintName")
        img.setAttribute("src",foodName.image)
        img.classList.add("image-class")
        img.classList.add("kenburns-top")
        body.appendChild(img)
        let str=foodName.image
        let foodNameName= getname(str)
        const showHint = foodNameName.replace(/[bcdefghjklmnpqrstvwxyz]/gi, ' _ ');
        const hint=document.createElement("div")
        hint.classList.add("hint")
        hint.innerHTML=`Hint: ${showHint}`
        hintName.appendChild(hint)
        btn.addEventListener("click",()=>{
            if(test.value==foodNameName){
                alert("you were right")
            }
            else{
                alert("no try again")
            }
        })
    }

function getname(str){
    let newstr=''
    for(let i=41;i<1000;i++){
        if(str[i]=='/'){
            break;
        }
        else{
            newstr+=str[i]
        }
    }
    return newstr
    
}
getfoodNames()
