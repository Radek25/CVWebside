const sections = document.querySelectorAll('section');
const listOfDots = document.querySelectorAll('li');
const arrowUp = document.querySelector('#arrow-up');
const arrowDown = document.querySelector('#arrow-down');
arrowUp.innerHTML = '<i class="fas fa-chevron-up"></i>';
arrowDown.innerHTML = '<i class="fas fa-chevron-down"></i>';
const polishLang = document.querySelector('#polish-lang');
const englishLang = document.querySelector('#english-lang');
let numberOfPage = 0;

AddIdToScrollDotsAndDeflautStyles();
SetLanguage();
UseArrowsToScrollPage();
UseDotsToScrollPage();

function AddIdToScrollDotsAndDeflautStyles(){
    listOfDots.forEach((listOfDots, index) => {
        listOfDots.id = index;
        listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
        listOfDots.style.setProperty('--sizeOfDot', '10px');
    })
}
function UseArrowsToScrollPage(){
    arrowDown.addEventListener('click', () => {
        console.log('click');
        console.log(numberOfPage);
        numberOfPage++;
        if(numberOfPage <= 3){
            ScrollPage();
            SetStandardScrollDots();
            SetSpecialScrollDot(numberOfPage);
            arrowUp.style.display = 'flex';
        }
        if(numberOfPage === 3){
            arrowDown.style.display = 'none';
        }
    });
    arrowUp.addEventListener('click', () => {
        console.log('click');
        console.log(numberOfPage);
        numberOfPage--;
        if(numberOfPage >= 0){
            ScrollPage();
            SetStandardScrollDots();
            SetSpecialScrollDot(numberOfPage);
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
        listOfDots[index].addEventListener('click', () => {
            SetStandardScrollDots();
            SetSpecialScrollDot(index);
            sections.forEach((section, i) => {
                if(i === index){
                section.scrollIntoView({behavior: 'smooth'});
                numberOfPage = index;
                }
            })
            switch (index) {
                case (0):
                    arrowUp.style.display = 'none';
                    arrowDown.style.display = 'flex';
                break;
                case (3):
                    arrowUp.style.display = 'flex';
                    arrowDown.style.display = 'none';
                break;
                default:
                    arrowUp.style.display = 'flex';
                    arrowDown.style.display = 'flex';
                break;
            }
        });
    }
}
function ScrollPage(){
    sections.forEach((section, i) => {
        if(i === numberOfPage){
        section.scrollIntoView({behavior: 'smooth'});
        }
    })
}
function SetStandardScrollDots(){
    listOfDots.forEach(listOfDots => {
        listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
        listOfDots.style.setProperty('--sizeOfDot', '10px');
    })
}
function SetSpecialScrollDot(indexOfDot){
    listOfDots[indexOfDot].style.setProperty('--backgroundColorOfDot', '#ffffff');
    listOfDots[indexOfDot].style.setProperty('--sizeOfDot', '15px');
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