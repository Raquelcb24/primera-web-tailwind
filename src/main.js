const htmlElement = document.querySelector("html")
const toggleButton = document.querySelector("#toggle")
const toggleButtonSm = document.querySelector("#toggle-sm")

if (htmlElement.classList.contains("dark")){
    htmlElement.classList.remove("dark");
}
const toggleDarkMode = () => {
    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
    } else {
        htmlElement.classList.add("dark");
    }
}

toggleButton.addEventListener("click", toggleDarkMode)
toggleButtonSm.addEventListener("click", toggleDarkMode)
