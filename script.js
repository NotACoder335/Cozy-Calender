// let cnt = document.querySelector(".app p")
// let bt = document.querySelector(".app #TestBt")
// console.log(cnt)
// let input = Number(cnt.innerText)

// bt.addEventListener("click",()=>{
//     input = input+1
//     cnt.innerHTML = input //or cnt.innerHTML = `${input}`
// })

// function updateCal(){
//     const date = new Date().toDateString() // gives string eg:wed april 31 2026
//     const day = date.split(" ")[2] 
//     const month = date.split(" ")[1]
//     document.querySelector(".app #calender #day").textContent = day
//     document.querySelector(".app #calender #month").textContent = month

// }

// updateCal()

function updateCalendar() {
    const now = new Date();
    const day = now.getDate();
    const monthNames = ["january", "february", "march", "april", "may",
        "june", "july", "august", "september", "october", "november", "december"];
    
    const month = monthNames[now.getMonth()];

    document.querySelector(".app #calender #day").textContent = day
    document.querySelector(".app #calender #month").textContent = month

}

updateCalendar();