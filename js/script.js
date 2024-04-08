document.querySelector(".hamburger1").addEventListener("click",()=>{
    document.querySelector(".left").style.left = 0;
    document.querySelector(".left").style.width = `70%`
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left = `-120%` ;
})

let notify = document.querySelector(".notify");
notify.addEventListener("click",()=>{
    notify.style.filter = "invert(100%)";
})
// let createsvg = document.querySelector(".createsvg");
// createsvg.addEventListener("click",()=>{
//     createsvg.style.filter = "invert(100%)";
// })
// let account = document.querySelector(".account");
// account.addEventListener("click",()=>{
//     account.style.filter = "invert(100%)";
// })
// let searchsvg1 = document.querySelector(".searchsvg1");
// searchsvg1.addEventListener("click",()=>{
//     searchsvg1.style.filter = "invert(100%)";
// })