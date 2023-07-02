const pop_up = document.querySelector(".Pop_up");
const filter = document.querySelector(".grayfilter")

const do_popup = () =>{
    pop_up.classList.add("show");
    filter.classList.add("grayfilter_show");

};
const do_close = function(){
    pop_up.classList.remove("show");
    filter.classList.remove("grayfilter_show");
    
};
