const inputText = document.getElementById("input-text");
const toDoList = document.querySelector(".to-do-List");

inputText.addEventListener("keydown" , function(event){
    if(event.key === "Enter"){
        makeDiv()
    }
})

function makeDiv(){
    let liste = document.createElement('div');
    liste.className = 'list';
    liste.innerHTML = "<div>"+inputText.value+"</div>";
    let shocialIcons = document.createElement("div");
    let  iconsChek = document.createElement('i'); 
    iconsChek.style.color = "lightgray"
    iconsChek.addEventListener('click' , function(){
        iconsChek.style.color = "limegreen"
    })
    let iconstrash = document.createElement('i');

    iconstrash.addEventListener('click' , function(){
        liste.remove() 
    })
    iconstrash.className = "fa-solid fa-trash" ;
    iconsChek.className = "fa-solid fa-square-check" ;
    shocialIcons.appendChild(iconsChek);
    shocialIcons.appendChild(iconstrash);
    liste.appendChild(shocialIcons)
    toDoList.appendChild(liste) ;
    inputText.value = "";
}