const sections = document.querySelectorAll('section');
const listOfDots = document.querySelectorAll('li');
let numberOfPage = 0;

listOfDots.forEach((listOfDots, index) => {
    listOfDots.id = index;
    listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
    listOfDots.style.setProperty('--sizeOfDot', '10px');
})
for (let index = 0; index < listOfDots.length; index++) {
    listOfDots[0].style.setProperty('--backgroundColorOfDot', '#ffffff');
        listOfDots[0].style.setProperty('--sizeOfDot', '15px');
    listOfDots[index].addEventListener('click', () => {
        listOfDots.forEach(listOfDots => {
            listOfDots.style.setProperty('--backgroundColorOfDot', '#ffffff28');
            listOfDots.style.setProperty('--sizeOfDot', '10px');
        })
        listOfDots[index].style.setProperty('--backgroundColorOfDot', '#ffffff');
        listOfDots[index].style.setProperty('--sizeOfDot', '15px');
    });
}

window.addEventListener('click', () => {
    numberOfPage++;
    sections.forEach((section, i) => {
        if(i === numberOfPage){
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
});
