const observerAtSection2 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("displaySection");
            document.getElementById("basicinfo").classList.add("displaySection")
            document.getElementById("Section1").classList.remove("displaySection");
            document.getElementById("section3bg").classList.remove("section3bgshow");
            document.getElementById("fgimg").classList.add("hide")
        }else{
            document.getElementById("fgimg").classList.remove("hide")
            entry.target.classList.remove("displaySection");
            document.getElementById("basicinfo").classList.remove("displaySection")
            document.getElementById("Section1").classList.add("displaySection");
            document.getElementById("section3bg").classList.add("section3bgshow");
        }
    });
});
const observerAtInfo = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            entry.target.classList.add("infotran")
        }else{
            entry.target.classList.remove("infotran")
        }
    });
});
const observerAtSection5 = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting){
            let title = document.getElementById("titleForProject");
            title.textContent = "Projects";
            title.style.color = "white";
        }else{
            let title = document.getElementById("titleForProject");
            title.style.color = "#c6b600";
            title.textContent = "Contacts";
        }
    });
});
let sections = document.querySelectorAll(".commonInSection");
sections.forEach((el)=>observerAtSection2.observe(el));

let info = document.querySelectorAll(".info2");
info.forEach((el2)=>observerAtInfo.observe(el2));

let project_section = document.querySelectorAll(".newSection5");
project_section.forEach((el3)=>observerAtSection5.observe(el3));
