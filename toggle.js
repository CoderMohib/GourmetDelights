const menuToggle = document.getElementById("menu-toggle");
const navBar = document.querySelector(".nav-bar");
menuToggle.onclick= ()=>{
    navBar.classList.toggle("active");
}
const closeBtn = document.getElementById("close");
closeBtn.onclick = () => {
    navBar.classList.remove("active");
};
