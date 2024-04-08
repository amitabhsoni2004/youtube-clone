
document.querySelector(".hamburger1").addEventListener("click",()=>{
    document.querySelector(".left").style.left = 0;
    document.querySelector(".left").style.width = `70%`
})
document.querySelector(".close").addEventListener("click",()=>{
    document.querySelector(".left").style.left = `-120%` ;
})

window.addEventListener('load', function() {
    // Hide loader
    document.getElementById('loader').style.display = 'none';

    // Show other elements
    var hiddenElements = document.querySelectorAll('.hiddenOnLoad');
    hiddenElements.forEach(function(element) {
        element.style.display = 'flex';
    });
});


document.querySelector(".hamburger").addEventListener("click", () => {
    let paragraphs = document.getElementsByTagName("p");
    let headings = document.getElementsByTagName("h3");
    let videoFrame =  document.querySelectorAll(".videoFrame")
    // Toggle paragraphs visibility
    for (let i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].style.display === "none") {
            paragraphs[i].style.display = "block";
            document.querySelector(".left").style.width=`15vw`
            document.querySelector(".left").style.border = "none"
            videoFrame.forEach((e)=>{
                e.style.height=`215px`
               })
        } else {
            paragraphs[i].style.display = "none";
            document.querySelector(".left").style.width=`3.5%`
            document.querySelector(".right").style.width=`96.5%`
           videoFrame.forEach((e)=>{
            e.style.height=`240px`
           })
            document.querySelector(".left").style.border = "0.1px solid gray"
        }
    }
    
    // Toggle headings visibility
    for (let i = 0; i < headings.length; i++) {
        if (headings[i].style.display === "none") {
            headings[i].style.display = "block";
            document.querySelector(".left").style.width=`15vw`
        } else {
            headings[i].style.display = "none";
            document.querySelector(".left").style.width=`3.5%`
        }
    }
});



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