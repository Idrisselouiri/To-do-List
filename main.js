const input = document.querySelector('#input-text');
const listContainer = document.querySelector('.list');
const btn = document.querySelector("#btn");
console.log(listContainer , btn , input)
// btn 
btn.addEventListener('click' , () =>{
    if(input.value === ""){
        alert("Please Enter your Information")
    }else{
        let div = document.createElement('div');
        let text = document.createElement('p');
        let btnClose = document.createElement('i');
        text.innerHTML = input.value ; 
        btnClose.classList = "fa-solid fa-circle-xmark" ;
        div.appendChild(text) ; 
        div.appendChild(btnClose) ;
        div.classList = "items-list" ;
        listContainer.appendChild(div);
        saveData()
    }
})

listContainer.addEventListener("click" , (event) =>{
    if(event.target.tagName === "P"){
        event.target.classList.toggle("cheked");
        saveData()
    }else if(event.target.tagName === "I"){
        event.target.parentElement.remove() ;
        saveData()
      
    }
})
function saveData(){
    localStorage.setItem('list' , listContainer.innerHTML)
}
listContainer.innerHTML = localStorage.getItem('list')

