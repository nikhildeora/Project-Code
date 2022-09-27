let form = document.querySelector("form")
form.addEventListener("submit", closereload)

function closereload(event){
    console.log("nikh")
    event.preventDefault()
}