
const visualsImages = document.querySelectorAll('#visuals .img');
const visualsDescriptions = document.querySelectorAll('#visuals .desc');
const visualsPrincipalDesc = document.querySelector('#visuals #principal-desc');

const websitesImages = document.querySelectorAll('#websites .img');
const websitesDescriptions = document.querySelectorAll('#websites .desc');
const websitesPrincipalDesc = document.querySelector('#websites #principal-desc');

const presentationImage = document.querySelectorAll('#presentation .img');
const presentationPrincipalDesc = document.querySelector('#presentation #principal-desc');

const body = document.querySelector('body');
const overlay = document.querySelector('#overlay');
const overlayContent = document.querySelector('#overlay-content');
const overlayBody = document.querySelector('#overlay-body');
const overlayLeft = document.querySelector('#overlay #left');
const overlayRight = document.querySelector('#overlay #right');

const closeOverlay = document.querySelector('#close-overlay');
const overlayContainer = document.querySelector('#overlay-container');
const slideLinkRight = document.querySelectorAll('.slide-link-right');
const slideLinkLeft = document.querySelectorAll('.slide-link-left');
const articlesContainer = document.querySelector('#articles');
const articles = document.querySelectorAll('article');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav');
const about = document.querySelector('#about');
const work = document.querySelector('#work');
const skills = document.querySelector('#skills');
const contact = document.querySelector('#contact');


// Styling
articlesContainer.style.width = articles.length * 100 + '%';

visualsImages.forEach((img, key) => {
    key+=1;
    img.style.backgroundImage = `url(./images/projects/${key}.png`;
    img.dataset.url = `./images/projects/${key}/1.png`;
    
});





function articleInteraction(images, descriptions, principalDesc) {
    for (let i = 0; i < images.length; i++) {

        if (descriptions) {

            images[i].addEventListener('mouseover', () => {
                descriptions[i].style.display = 'block';
                principalDesc.style.display = 'none';

                /*for (let image of images) {
                    image.style.opacity = '0.15';
                    images[i].style.opacity = '1';
                }*/

            });
            images[i].addEventListener('mouseout', () => {
                descriptions[i].style.display = 'none';
                principalDesc.style.display = 'block';

                /*for (let image of images) {
                    image.style.opacity = '1';
                }*/
            });

            images[i].addEventListener('click', () => {
                overlay.style.display = 'block';
                body.style.overflow = 'hidden';

                overlayContent.src = images[i].dataset.url;
                console.log(images[i].dataset.url);
                overlayBody.innerHTML = descriptions[i].innerHTML;

            })

        } else {
            images[i].addEventListener('click', () => {
                overlay.style.display = 'block';
                body.style.overflow = 'hidden';

                overlayContent.src = images[i].dataset.url;
                console.log(images[i].dataset.url);
                overlayBody.textContent = principalDesc.textContent;

            })
        }
    }
}

articleInteraction(visualsImages, visualsDescriptions, visualsPrincipalDesc);
articleInteraction(websitesImages, websitesDescriptions, websitesPrincipalDesc);
articleInteraction(presentationImage, null, presentationPrincipalDesc);

closeOverlay.addEventListener('click', () => {
    overlay.style.display = 'none';
    body.style.overflow = 'auto';

});



// slides
let currentSlide = 1;

// nav links

    about.addEventListener('click', () => {
        leftClick(2);
    })
    work.addEventListener('click', () => {
        rightClick(1)
    })
    skills.addEventListener('click', () => {
        rightClick(2)
    })
    contact.addEventListener('click', () => {
        rightClick(3)
    })

function rightClick(slide) {
    if (slide) {
        currentSlide = slide;
    }
    if (currentSlide < articles.length) {

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide) * 100}vw);`;

        }
        currentSlide++;


    } else {

        currentSlide = -1;

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide) * 100}vw);`;

        }
        currentSlide = 1;

    }

    console.log(currentSlide);

    displayTitle(currentSlide);
    displayBackground(currentSlide);

};



function leftClick(slide) {
    if (slide) {
        currentSlide = slide;
    }
    if (currentSlide > 1) {

        for (let i = 0; i < articles.length; i++) {


            articles[i].style = `transform: translateX(-${(currentSlide - 2) * 100}vw)`

        }
        currentSlide--;


    } else {

        currentSlide = articles.length + 1;

        for (let i = 0; i < articles.length; i++) {

            articles[i].style = `transform: translateX(-${(currentSlide - 2) * 100}vw)`

        }
        currentSlide--;

    }

    console.log(currentSlide);

    displayTitle(currentSlide);
    displayBackground(currentSlide);

}



function displayTitle(currentSlide) {

    let titles = document.querySelectorAll('#bottom h2');
    let currentTitle = document.querySelector(`h2[data-title="${currentSlide}"]`);

    for (let title of titles) {
        title.style.display = 'none';

        currentTitle.style = 'display: block; transform: scale(50%) translateX(-200%);';

        setTimeout(() => {
            currentTitle.style = 'display: block; transform: scale(100%) translateX(0%);'
        })

    }

}

function displayBackground(currentSlide) {

    const images = ['llleaves.svg', 'ffflux.svg', 'ffflurry.svg', 'ffflux1.svg']

    document.getElementById('background').style = `background: url('./images/bg/${images[currentSlide - 1]}') center no-repeat; background-size: cover; transition: 1s ease-in-out; opacity: 0.1`;

    console.log(images)
}


// setTimeout(() => {
//     nav.style = "max-height: 0px; transition: max-height 1s ease-in-out"
// })

menu.addEventListener('click', () => {
    switch (menu.dataset.toggle) {
        case 'closed':
            nav.style.display = 'flex';
            body.style.overflow = 'hidden';
            // nav.style.width = '900px';
            menu.dataset.toggle = 'opened';
            break;
        case 'opened':
            nav.style.display = 'none';
            body.style.overflow = 'auto';
            // nav.style.width = '0px'; 
            menu.dataset.toggle = 'closed';
            break;
        default:
            nav.style.display = 'none'


    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
        nav.style.display = 'flex';
        body.style.overflow = 'hidden';
    } else {
        nav.style.display = 'none';
        body.style.overflow = 'auto';
    }
})