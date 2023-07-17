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
let sections = document.querySelectorAll(".commonInSection");
sections.forEach((el)=>observerAtSection2.observe(el));

let info = document.querySelectorAll(".info2");
info.forEach((el2)=>observerAtInfo.observe(el2));


/*
Sure, here is an example of how Devansh Joshi could introduce himself on his portfolio website:

Hi, I'm Devansh Joshi, a third-year B.Tech. student in Computer Science and Engineering at MMMUT Gorakhpur.

I'm passionate about technology and I'm always looking for new ways to use it to solve problems and create innovative solutions.

In my spare time, I enjoy coding, playing video games, and spending time with my friends and family.

I'm looking for an internship or full-time position where I can use my skills and creativity to make a difference in the world.

Here are some of my skills and accomplishments:

Proficient in Java, Python, and C++
Experience with web development, mobile development, and data science
Winner of the MMMUT ACM-ICPC Programming Contest
Member of the MMMUT Robotics Team
I'm a hard worker and I'm always eager to learn new things. I'm confident that I can make a valuable contribution to your team.

Thank you for your time and consideration.

Sincerely,
Devansh Joshi

This introduction is brief, but it gives a clear and concise overview of Devansh's skills, experience, and personality. It also includes a call to action, encouraging visitors to contact him if they are interested in his work.

Here are some additional tips for writing a strong introduction for your portfolio website:

Start with a strong hook that will grab the reader's attention.
Be clear and concise about who you are and what you do.
Highlight your skills and accomplishments.
Add a personal touch by sharing something interesting about yourself.
Use a friendly and professional tone.
Proofread your introduction carefully before publishing it.
I hope this helps!*/