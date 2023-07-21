const visualsImages = document.querySelectorAll('#visuals .img');
const visualsDescriptions = document.querySelectorAll('#visuals .desc');
const visualsPrincipalDesc = document.querySelector('#visuals #principal-desc');

const websitesImages = document.querySelectorAll('#websites .img');
const websitesDescriptions = document.querySelectorAll('#websites .desc');
const websitesPrincipalDesc = document.querySelector('#websites #principal-desc');

const presentationImage = document.querySelectorAll('#presentation .img');
const presentationPrincipalDesc = document.querySelector('#presentation #principal-desc');


const overlay = document.querySelector('#overlay');
const overlayContent = document.querySelector('#overlay-content');
const overlayBody = document.querySelector('#overlay-body');
const closeOverlay = document.querySelector('#close-overlay');
const overlayContainer = document.querySelector('#overlay-container');
const slideLinkRight = document.querySelectorAll('.slide-link-right');
const slideLinkLeft = document.querySelectorAll('.slide-link-left');
const articles = document.querySelectorAll('article');

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

                overlayContent.src = images[i].dataset.url;
                console.log(images[i].dataset.url);
                overlayBody.textContent = descriptions[i].textContent;

            })

        } else {
            images[i].addEventListener('click', () => {
                overlay.style.display = 'block';

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

});



// slides

let currentSlide = 1;

function rightClick() {
    if (currentSlide < 4) {

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



function leftClick() {
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

        currentTitle.style = 'display: block; transform: scale(50%) translateY(200%);';

        setTimeout(() => {
            currentTitle.style = 'display: block; transform: scale(100%) translateY(0%);'
        })

    }

}

function displayBackground(currentSlide) {

    const images = ['360_F_260473171_GMr0ghneGQFDpdACcQKhetHe3FX2AUCG.jpg', 'beautiful-northern-light-background-free-vector.jpg', 'beautiful-northern-lights-background-free-vector.jpg', 'images.jpg']

    document.getElementById('background').style = `background: url('./images/bg/${images[currentSlide - 1]}') center no-repeat; background-size: cover; transition: 4s; opacity: 0.1`;

    console.log(images)
}
