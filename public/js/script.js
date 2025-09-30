let isClickable = true;

function onNavClick(index, currentNav) {
    console.log(currentNav);
    if(!isClickable) return;
    isClickable = false;

    const currentActive = document.querySelector('#background.active');
    const sectionClicked = document.querySelectorAll('#background')[index];
    const prevNav = document.querySelector('.navIndex.active');
    if(prevNav) {
        toggleActive(prevNav);
    }
    if(currentNav) toggleActive(currentNav)
    if(currentActive) {
        currentActive.style.height = '0vh';
        toggleActive(currentActive);
        // console.log(index, currentActive);
    }
    if (sectionClicked) {
        toggleActive(sectionClicked);
        sectionClicked.style.height = '100vh';
    }
    // re-enable after 0.5s
    setTimeout(() => {
        isClickable = true;
    }, 500);
}

function toggleActive(element) {
    if(element) element.classList.toggle('active');
}