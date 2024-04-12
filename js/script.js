
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
            document.querySelector(".left").style.border = "none";
            document.querySelector(".catagory").style.width=`84.5%`;
            videoFrame.forEach((e)=>{
                e.style.height=`215px`
            })
        } else {
            paragraphs[i].style.display = "none";
            document.querySelector(".left").style.width=`3.5%`
            document.querySelector(".right").style.width=`96.5%`
            document.querySelector(".catagory").style.width=`94.5%`;
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

let arrayOfCategory = [
    'All',
    'Coding',
    'Technology',
    'WebDev',
    'Programming',
    'Software',
    'Hardware',
    'Web Design',
    'Mobile Apps',
    'Data Science',
    'Artificial Intelligence',
    'Machine Learning',
    'Cybersecurity',
    'Networking',
    'Cloud Computing',
    'IOT',
    'Blockchain',
    'eCommerce',
    'Social Media',
    'Digital Marketing',
    'Graphic Design',
    'Animation',
    'Video Production',
    'Photography',
    'Music',
    'Film',
    'Literature',
    'History',
    'Politics',
    'Science',
    'Philosophy',
    'Spirituality',
    'Sports',
    'New Video'
];

let categoriesDiv = document.getElementById("catagories"); // Note the spelling to match your HTML ID
categoriesDiv.innerHTML = ''; // Clear the initial content

arrayOfCategory.forEach(category => {
    let categorySpan = document.createElement("span"); // Create a new span element
    categorySpan.textContent = category; // Set the text content to the category name
    categoriesDiv.appendChild(categorySpan); // Append the span to the div
});
// for (const key of arrayOfCategory) {
//     console.log(key)  
// }
let scrollAmount = 105; // Adjust this based on your actual needs

document.querySelector(".previous").addEventListener("click", () => {
    categoriesDiv.scrollBy({
        left: -scrollAmount, // Scrolls to the left by scrollAmount
        behavior: 'smooth'  // Ensures the scroll motion is smooth
    });
});

document.querySelector(".next").addEventListener("click", () => {
    categoriesDiv.scrollBy({
        left: scrollAmount, // Scrolls to the right by scrollAmount
        behavior: 'smooth' // Ensures the scroll motion is smooth
    });
});
