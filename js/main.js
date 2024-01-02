// -------- navBar-------------//
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
};


// ----nav Hide----------//

let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", () => {
        navCollapse.classList.remove('show');
    })
})


// ------Counter---Design ------ //
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }

        }, step);
    };
    counter("count1", 0, 1287, 2000);
    counter("count2", 100, 2527, 2000);
    counter("count3", 0, 3847, 2000);
    counter("count4", 0, 4585, 2000);
})