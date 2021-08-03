const sections = document.querySelectorAll('section');
const listOfMenu = document.querySelectorAll('#menu-list > li')
const listOfDots = document.querySelectorAll('#dots-list > li');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
const polishLang = document.querySelector('#polish-lang');
const englishLang = document.querySelector('#english-lang');
let numberOfPage = 0;

AddIdAndDeflautStylesToNavs();
SetLanguage();
UseArrowsToScrollPage();
UseDotsToScrollPage();

function AddIdAndDeflautStylesToNavs(){
    listOfMenu.forEach((listOfMenu, index) => {
        listOfMenu.id = index;
    })
    listOfDots.forEach((listOfDots, index) => {
        listOfDots.id = index;
        listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
        listOfDots.style.setProperty('--sizeOfDot', '10px');
    })
}
function UseArrowsToScrollPage(){
    arrowDown.addEventListener('click', () => {
        numberOfPage++;
        if(numberOfPage <= 4){
            ScrollPage();
            SetStandardStylesToMenuAndDotsNav();
           SetSpecialStylesToMenuAndDotsNav(numberOfPage);
            arrowUp.style.display = 'flex';
        }
        if(numberOfPage === 4){
            arrowDown.style.display = 'none';
        }
    });
    arrowUp.addEventListener('click', () => {
        numberOfPage--;
        if(numberOfPage >= 0){
            ScrollPage();
            SetStandardStylesToMenuAndDotsNav();
            SetSpecialStylesToMenuAndDotsNav(numberOfPage);
            arrowDown.style.display = 'flex';
        }
        if(numberOfPage === 0){
            arrowUp.style.display = 'none';
        }
    });
}
function UseDotsToScrollPage(){
    for (let index = 0; index < listOfDots.length; index++) {
        listOfDots[0].style.setProperty('--backgroundColorOfDot', '#ffffff');
        listOfDots[0].style.setProperty('--sizeOfDot', '15px');
        listOfMenu[0].style.color = '#f4ac34';
        listOfMenu[0].style.borderBottom = '1px solid #f4ac34';
        listOfDots[index].addEventListener('click', () => {
            SetStandardStylesToMenuAndDotsNav();
            SetSpecialStylesToMenuAndDotsNav(index);
            sections.forEach((section, i) => {
                if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
                numberOfPage = index;
                }
            })
            SetArrows(index);
        });
        listOfMenu[index].addEventListener('click', () => {
            console.log(index);
            SetStandardStylesToMenuAndDotsNav();
            SetSpecialStylesToMenuAndDotsNav(index);
            sections.forEach((section, i) => {
                if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
                numberOfPage = index;
                }
            })
        })
    }
}
function ScrollPage(){
    sections.forEach((section, i) => {
        if(i === numberOfPage){
        section.scrollIntoView({behavior: 'smooth'});
        }
    })
}
function SetStandardStylesToMenuAndDotsNav(){
    listOfDots.forEach(listOfDots => {
        listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
        listOfDots.style.setProperty('--sizeOfDot', '10px');
    })
    listOfMenu.forEach(listOfMenu => {
        listOfMenu.style.color = '#ffffff'
        listOfMenu.style.borderBottom = 'none';
    })
}
function SetSpecialStylesToMenuAndDotsNav(indexOfDot){
    listOfDots[indexOfDot].style.setProperty('--backgroundColorOfDot', '#ffffff');
    listOfDots[indexOfDot].style.setProperty('--sizeOfDot', '15px');
    listOfMenu[indexOfDot].style.color = '#f4ac34';
    listOfMenu[indexOfDot].style.borderBottom = '1px solid #f4ac34';
}
function SetLanguage(){
    polishLang.addEventListener('click', () => {
        polishLang.style.opacity = '0.9';
        englishLang.style.opacity = '0.4';
        polishLang.style.borderRight= '2px solid white';
        englishLang.style.borderLeft = 'none';
    });
    englishLang.addEventListener('click', () => {
        polishLang.style.opacity = '0.4';
        englishLang.style.opacity = '0.9';
        polishLang.style.borderRight= 'none';
        englishLang.style.borderLeft = '2px solid white';
    });
}
function SetArrows(indexOfPage){
    switch (indexOfPage) {
        case (0):
            arrowUp.style.display = 'none';
            arrowDown.style.display = 'flex';
        break;
        case (4):
            arrowUp.style.display = 'flex';
            arrowDown.style.display = 'none';
        break;
        default:
            arrowUp.style.display = 'flex';
            arrowDown.style.display = 'flex';
        break;
    }
}