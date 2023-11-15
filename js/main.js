const images = [];
images.push('https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*');
images.push('https://www.akc.org/wp-content/uploads/2018/05/Three-Australian-Shepherd-puppies-sitting-in-a-field.jpg');
images.push('https://hips.hearstapps.com/hmg-prod/images/group-portrait-of-adorable-puppies-royalty-free-image-1687451786.jpg?crop=0.89122xw:1xh;center,top&resize=1200:*');

let counter = 0;
const $images = document.getElementById('image');
$images.src = images[0];

document.getElementById('next').addEventListener('click', e=> {
    counter++;
    if(counter > images.length - 1){
        counter = 0;
    }
    $images.src = images[counter];
});

document.getElementById('prev').addEventListener('click', e => {
    counter--;
    if(counter < 0){
        counter = images.length - 1;
    }
    $images.src = images[counter];
});