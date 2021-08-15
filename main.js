const sections = document.querySelectorAll('section');
const listOfMenu = document.querySelectorAll('#menu-list > li')
const listOfDots = document.querySelectorAll('#dots-list > li');
const arrowDown = document.querySelector('#arrow-down');
const langButton = document.querySelector('#lang-button');
let isPolishLang = true;
langButton.innerHTML = 'PL';
const meetMeButton = document.querySelector('#meet-me-button');
const allProjects = document.querySelectorAll('.single-project'); 
const allPhotoInProjects = document.querySelectorAll('.single-project > img');
const allCheckBtn = document.querySelectorAll('.check-project-button');
const percentBar = document.querySelectorAll('.top-part');
const skillText = document.querySelectorAll('.text-wrapper > p');
let numberOfPage = 0;

let DataToSkills = [
    {maxNumber: 90, className: 'anim-bar1'},
    {maxNumber: 85, className: 'anim-bar2'},
    {maxNumber: 80, className: 'anim-bar3'},
    {maxNumber: 75, className: 'anim-bar4'},
    {maxNumber: 75, className: 'anim-bar5'},
    {maxNumber: 70, className: 'anim-bar6'},
    {maxNumber: 65, className: 'anim-bar7'},
    {maxNumber: 50, className: 'anim-bar8'},
];

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
        }
        if(numberOfPage === 4){
            arrowDown.style.display = 'none';
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
    langButton.addEventListener('click', () => {
        isPolishLang === true? 
        (langButton.innerHTML = 'GB', isPolishLang = false):
        (langButton.innerHTML = 'PL', isPolishLang = true)
        ChangeLanguage();
    })
}
function SetArrows(indexOfPage){
    indexOfPage === 4 ? arrowDown.style.display = 'none' : arrowDown.style.display = 'flex';
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
        percentBar.forEach((percentBar, i) => percentBar.classList.add(`${DataToSkills[i].className}`));
        skillText.forEach((skillText, i) => {
            let count = 0;
            let percentInterval = setInterval(() => {
                skillText.innerText = `${count}%`;
                count++;
                count === DataToSkills[i].maxNumber+1? clearInterval(percentInterval) : null;
            },24);
        })
    }
    else{
        percentBar.forEach((percentBar, i) => percentBar.classList.remove(`${DataToSkills[i].className}`));
    }
}
function ChangeLanguage(){
    let firstPageH1 = document.querySelector('header > h1');
    let firstPageH3 = document.querySelector('header > h3');
    let firstPageAboutMeButton = document.querySelector('#meet-me-button');
    let firstPageCVButton = document.querySelector('#get-my-CV-button');
    let secondPageH1 = document.querySelector('.about-me > div > h3');
    let secondPageParagraph = document.querySelector('.about-me > div > p');
    let thirdPageButtonGitHub = document.querySelector('a > .github-button');
    let fifthPageH5 = document.querySelector('h5');
    let fifthPageButtonSend = document.querySelector('.send-button');
    if(isPolishLang === true){
        listOfMenu[0].innerText = 'Home';
        listOfMenu[1].innerText = 'O mnie';
        listOfMenu[2].innerText = 'Portfolio';
        listOfMenu[3].innerText = 'Umiejętności';
        listOfMenu[4].innerText = 'Kontakt';
        firstPageH1.innerText = 'Cześć!';
        firstPageH3.innerText = 'Jestem Radek';
        firstPageAboutMeButton.innerText = 'Poznaj mnie';
        firstPageCVButton.innerText = 'Moje CV';
        secondPageH1.innerText = 'Witaj!'
        secondPageParagraph.innerText =`Nazywam się Radosław Kot i jestem początkującym junior front-end developerem. Swoją przygodę z programowaniem rozpocząłem dwa lata temu, kiedy po skończeniu Technikum Łączności w Krakowie wybrałem studia w Wyższej Szkole Informatyki i Ekonometrii w Krakowie na kierunku Informatyka i Ekonometria. Podczas dotychczasowego okresu studiów rozwijałem swoją wiedzę gównie pod kątem specjalizaji Front-End Developer, a także poznawałem podstawy baz danych (TSQL) oraz języka C#. Programowanie jest dla mnie jak łamigłówka, której rozwiązywanie sprawia przyjemności i uczy logicznego myślenia, a każdy wykonany projekt to kolejny szczebel pozwalający nauczyć się nowych, nieznanych rzeczy.`
        thirdPageButtonGitHub.innerText = 'Przejdź na mój GitHub';
        fifthPageH5 = 'Skontaktuj się ze mną!';
        fifthPageButtonSend.innerText = 'Wyślij!'
    }
    else{
        listOfMenu[0].innerText = 'Home';
        listOfMenu[1].innerText = 'About Me';
        listOfMenu[2].innerText = 'Portfolio';
        listOfMenu[3].innerText = 'Skills';
        listOfMenu[4].innerText = 'Contact';
        firstPageH1.innerText = 'Hello!';
        firstPageH3.innerText = 'I am Radek';
        firstPageAboutMeButton.innerText = 'Meet me';
        firstPageCVButton.innerText = 'My CV';
        secondPageH1.innerText = 'Welcome!'
        secondPageParagraph.innerText =`My name is Radosław Kot and I’m a novice junior front-end developer. I have begun my adventure with programming two years ago just after finishing Technikum Łączności in Kraków and choosing the faculty of Computer Science and Econometrics at Wyższa Szkoła Informatyki i Ekonometrii in Kraków. During my studies not only have I been developing my knowledge in the realm of Front-End Developing, but I also have had a chance to learn about basics of database (TSQL) and to practice C# programming language. I feel like computer programming resembles  a riddle - solving it brings joy and logical thinking ability and yet every single project  gets you closer to the glimpsing of something new and unexpected.`;
        thirdPageButtonGitHub.innerText = 'Go to my GitHub';
        fifthPageH5 = 'Contact me!';
        fifthPageButtonSend.innerText = 'Send!'
    }
}