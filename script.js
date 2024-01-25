let sections = document.querySelectorAll('section');
     let navlinks = document.querySelectorAll('header nav a');
    
     window.onscroll = () => {
         sections.forEach(sec => {
             let top = window.scrollY;
             let offset = sec.offsetTop - 0;
             let height = sec.offsetHeight;
             let id = sec.getAttribute('id');
    
             if (top >= offset && top < offset + height) {
                 navlinks.forEach(link => {
                     link.classList.remove('active');
                     document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                 });
             };
         });
    

         let header = document.querySelector('header');
    
        header.classList.toggle('sticky', window.scrollY > 200);
         
       
    };

 ScrollReveal({
    //  reset:true,
     distance:'80px',
     duration: 2000,
     delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-container, .contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
 ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});


 const typed = new Typed('.multiple-text',{
     strings: ['Frontend Developer', 'Backend Developer', 'Python Developer'],
     typeSpeed: 100,
     backspeed: 100,
     backDelay: 1000,
     loop:true
 });


//  json fetching
 fetch('portfolio.json')
     .then(response => response.json())
     .then(data => {
         console.log(data);

         data.project.forEach(value => {

             let pc = document.getElementById("pc")

             let pb = document.createElement("div")
             pb.classList.add("portfolio-box")
             pc.appendChild(pb)

             let image = document.createElement("img")
             image.src = value.img;
             pb.appendChild(image)

             let pl = document.createElement("div")
             pl.classList.add("portfolio-layer")
             pb.appendChild(pl)

             let heading = document.createElement("h4")
             heading.textContent = value.head;
             pl.appendChild(heading)

             let parag = document.createElement("p")
             parag.textContent = value.para
             pl.appendChild(parag)

             let gni = document.createElement("div")
             gni.classList.add("gnicon")
             pl.appendChild(gni)

             let anchor1 = document.createElement("a")
             anchor1.setAttribute("href", value.gitlink)
             anchor1.gitlink = value.gitlink;
             gni.appendChild(anchor1)

             let icon = document.createElement("i")
             icon.classList.add("bx")
             icon.classList.add("bxl-github")
             anchor1.appendChild(icon)

             let anchor2 = document.createElement("a")
             anchor2.setAttribute("href", value.gitlink)
             anchor2.gitlink = value.gitlink;
             gni.appendChild(anchor2)

             let icon2 = document.createElement("i")
             icon2.classList.add("bx")
             icon2.classList.add("bxl-netlify")
             anchor2.appendChild(icon2)
         })
     });
    
// pre-loader js! 
let preloader = document.querySelector('.preloader')
window.addEventListener('load', function (){
    preloader.style.display = "none"
});

//  pre-loader js completed 


  let nav = document.querySelector('.navbar');    
  let checkbx = document.getElementById("burger")

  checkbx.addEventListener("click", () => {
     if(checkbx.checked){
         nav.style.display = "block"

     }else{
         nav.style.display = "none"
     }
  })
    

