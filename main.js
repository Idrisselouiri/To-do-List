const inputText = document.querySelector("#input-text");
const listContainer = document.querySelector(".list")

function addItem(event){
    event.preventDefault()
    if(inputText.value === ""){
        alert('Please enter information')
    }else{
        const li = document.createElement('li');
        li.innerHTML = inputText.value;
        const span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span)
        listContainer.appendChild(li);
        saveData()
    }
}
listContainer.addEventListener("click" , function(event) {
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("cheked");
        saveData()
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove() ;
        saveData()
    }
} , false)

function saveData(){
    localStorage.setItem("data" , listContainer.innerHTML)
}
function showData(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showData()
