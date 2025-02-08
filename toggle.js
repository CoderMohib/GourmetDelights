const menuToggle = document.getElementById("menu-toggle");
const navBar = document.querySelector(".nav-bar");
menuToggle.onclick= ()=>{
    navBar.classList.toggle("active");
}
const closeBtn = document.getElementById("close");
closeBtn.onclick = () => {
    navBar.classList.remove("active");
};

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(item => {
    item.onclick = () => {
        document.querySelector(".active-sec")?.classList.remove("active-sec"); 
        item.classList.add("active-sec"); 
    };
});