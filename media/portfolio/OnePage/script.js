const OpenNav = document.querySelector(".icon1")
const CloseNav = document.querySelector(".close")
const Menu = document.querySelector(".menu")

const PositionMenu = Menu.getBoundingClientRect().left;

OpenNav.addEventListener("click", () => {
    if(PositionMenu < 0) {
        Menu.classList.add("show")
    }
})

CloseNav.addEventListener("click", () => {
    if(PositionMenu < 0) {
        Menu.classList.remove("show")
    }
})
