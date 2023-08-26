let arrowTop = document.querySelector(".fa-angles-up");
let navbar = document.querySelector(".navbar");
console.log(navbar)
// console.log(ar)
arrowTop.onclick = () => {
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
window.onscroll=()=>{
  if(window.scrollY>=226)
  {
    arrowTop.style="right:10px;"
  }
  else{
    arrowTop.style="right:-150px"
  }
}

