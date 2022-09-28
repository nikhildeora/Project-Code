let form = document.querySelector("form")
// let btn = document.querySelector("button")
// btn.addEventListener("click", printdata)

let abt = document.querySelector("#form>div>a")
abt.addEventListener("click", printdata)

function printdata() {

    let data = {
        place: form.location.value,
        fromDate: form.fromDate.value,
        toDate: form.toDate.value
    }

    localStorage.setItem("Round-Trip", JSON.stringify(data))
}

let openit = document.querySelector("#aboutus>p")
openit.addEventListener("click", aboutus)

function aboutus() {
    document.querySelector("#aboutus>ul").style.display = "block"
}

let closeit = document.querySelector("#aboutus>i")
closeit.addEventListener("click", closebox)

function closebox() {
    document.querySelector("#aboutus>ul").style.display = "none"
}

