document.querySelector("#add-time")
.addEventListener("click", cloneField)

function cloneField(){
   const newFieldContaiter = document.querySelector(".schedule-item").cloneNode(true)
 
   const fields = newFieldContaiter.querySelectorAll("input")
   console.log(fields)

    document.querySelector("#schedule-items").appendChild(newFieldContaiter)
}