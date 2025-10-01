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

// function truncateDescription(descEl) {
//     const parentHeight = descEl.parentElement.clientHeight;

//     // Compute height already taken by other elements in the parent
//     const siblings = Array.from(descEl.parentElement.children).filter(el => el !== descEl);
//     let occupiedHeight = 0;
//     siblings.forEach(el => {
//         const style = getComputedStyle(el);
//         occupiedHeight += el.offsetHeight + parseFloat(style.marginTop) + parseFloat(style.marginBottom);
//     });

//     const maxHeight = parentHeight - occupiedHeight;

//     let text = descEl.innerText;
//     descEl.innerText = text;

//     while (descEl.scrollHeight > maxHeight && text.length > 0) {
//         text = text.slice(0, -1);
//         descEl.innerText = text + '…';
//     }
// }

// // Apply to all descriptions
// document.querySelectorAll('.movieDescription').forEach(el => truncateDescription(el));