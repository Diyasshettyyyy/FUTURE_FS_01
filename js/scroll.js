const stats = document.querySelector(".stats-strip");

const observer = new IntersectionObserver(entries=>{
 entries.forEach(entry=>{
   if(entry.isIntersecting){
     stats.classList.add("visible");
   }
 })
},{threshold:0.2})

observer.observe(stats)