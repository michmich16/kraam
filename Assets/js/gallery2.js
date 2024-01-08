// oprettet en array med billeder
const myGallery = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg', 'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg', 'Dinny-09.jpg'];

// lav gallery til at altid starte med Dinny-01.jpg
let myImageCount = 0;

//selected gallery_image og gav navn myGalleyElement
let myGalleryElement = document.getElementById("gallery_image")

//selected pilen gallery_forward og gav navn myForwardButton
let myForwardButton = document.getElementById("gallery_forward")

//tilføjet arrowfunction med eventlistener så myForwardButton vil lytte på et klik.
myForwardButton.addEventListener('click', (e) => {

    //myImageCount vil ændre sig op ad f.eks fra 'Dinny-01.jpg' til 'Dinny-02.jpg' osv.
    myImageCount++;
    
//hvis myImageCount går over 9 array vil den starte fra 0 igen.
    if (myImageCount >= myGallery.length) {
        myImageCount = 0;
    }
    showImage()
})

let myBackButton =document.getElementById("gallery_back")

myBackButton.addEventListener('click', (e) => {
//myImageCount vil ændre sig ned ad f.eks fra 'Dinny-09.jpg' til 'Dinny-08.jpg' osv.
    myImageCount--;
//hvis myImageCount går over 0 array vil den starte fra 9 igen.
    if(myImageCount < 0) {
        myImageCount = myGallery.length -1
    }
    showImage()
})











showImage();

// vises billede i dom
function showImage(){
    let myURL = '/Assets/images/emo-kitchen/' + myGallery[myImageCount];
    myGalleryElement.src = myURL;
}