window.addEventListener('scroll', whenScroll)

function whenScroll() {
    showNavWhenScroll()
    showBackToTopButtonWhenScroll()

    activateMenuAtCurrentSection(home)
    activateMenuAtCurrentSection(services)
    activateMenuAtCurrentSection(about)
    activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
    const targetLine = scrollY + innerHeight / 2

    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

    const sectionEndsAt = sectionTop + sectionHeight
    const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

    const sectionBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

    const sectionId = section.getAttribute('id')
    const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

    menuElement.classList.remove('active')
    if (sectionBoundaries) {
        menuElement.classList.add('active')  
    }
}

function showNavWhenScroll() {
    if (scrollY > 0) {
        navbar.classList.add('scroll')
    } else {
        navbar.classList.remove("scroll")
    }
}

function showBackToTopButtonWhenScroll() {
    if (scrollY > 800) {
        backToTopButton.classList.add('show')
    } else {
        backToTopButton.classList.remove("show")
    }
}

function openMenu() {
    document.body.classList.add('menu-expanded')
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1200,
}).reveal(`#home, #home img, #home .stats,
#services, #services header, #services .card,
#about, #about header, #about .content`);

