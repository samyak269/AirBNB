const navbar = document.querySelector('.navbar-container')
const background = document.querySelector('.blackbackground')
const optionObs = {
    threshold: 0.9
}
const backgroundObserver = new IntersectionObserver(function obsBackground(entry, backgroundObserver) {
    entry.forEach((entr) => {
        console.log(entr);

        if (entr.isIntersecting === true) {
            background.classList.remove('change-nav')
        } else {
            changeClass()
        }

    })
}, optionObs)

backgroundObserver.observe(navbar)

function changeClass() {
   background.classList.add('change-nav')
}