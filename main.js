const sections = document.querySelectorAll('section');
const listOfMenu = document.querySelectorAll('#menu-list > li')
const listOfDots = document.querySelectorAll('#dots-list > li');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
const polishLang = document.querySelector('#polish-lang');
const englishLang = document.querySelector('#english-lang');
const meetMeButton = document.querySelector('#meet-me-button');
const allProjects = document.querySelectorAll('.single-project'); 
const allPhotoInProjects = document.querySelectorAll('.single-project > img');
const allCheckBtn = document.querySelectorAll('.check-project-button');
const percentBar = document.querySelectorAll('.top-part');
const skillText = document.querySelectorAll('.text-wrapper');
let numberOfPage = 0;

// let a = document.querySelectorAll('.top-part');
// console.log(a[0]);
// window.addEventListener('dblclick', () => {
//     console.log('Click');
   
//     console.log(a[0]);
// })



AddIdAndDeflautStylesToNavs();
SetLanguage();
ClickMeetMeButton();
UseArrowsToScrollPage();
UseDotsToScrollPage();
AddIdToProjectsCardsAndAddStyleToSingleCard();


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
function AddIdToProjectsCardsAndAddStyleToSingleCard(){
    allProjects.forEach((sinngleProject, i) => {
        sinngleProject.id = i;
    })
    for (let index = 0; index < allProjects.length; index++) {
        allProjects[index].addEventListener('mouseover', () => {
            allCheckBtn[index].style.display = 'flex';
            allPhotoInProjects[index].style.opacity = '0.4';

        })
        allProjects[index].addEventListener('mouseout', () => {
            allPhotoInProjects[index].style.opacity = '1';
            allCheckBtn[index].style.display = 'none';
        })
    }
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
        AnimateSkillBars(numberOfPage);
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
        AnimateSkillBars(numberOfPage);
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
            AnimateSkillBars(index);
        });
        listOfMenu[index].addEventListener('click', () => {
            SetStandardStylesToMenuAndDotsNav();
            SetSpecialStylesToMenuAndDotsNav(index);
            sections.forEach((section, i) => {
                if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
                numberOfPage = index;
                }
            })
            SetArrows(index);
            AnimateSkillBars(index);
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
function ClickMeetMeButton(){
    meetMeButton.addEventListener('click', () => {
        numberOfPage = 1;
        SetStandardStylesToMenuAndDotsNav();
        SetSpecialStylesToMenuAndDotsNav(numberOfPage);
        ScrollPage();
        SetArrows();
    })
}
function AnimateSkillBars(numberOfPage){
    if(numberOfPage === 3){
        percentBar.forEach(percentBar => percentBar.classList.add('anim'))

        skillText.forEach((skillText) => {
            let percents = document.createElement('p');
            skillText.appendChild(percents);
            let count = 0;
            let percentInterval = setInterval(() => {
                percents.innerText = `${count}%`;
                count++;
                count === 86? clearInterval(percentInterval) : null;
            },32);
        })
    }
}