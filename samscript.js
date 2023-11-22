// containre1 scripting data
const container1 = document.querySelector('.container1');
const changeBtn = document.getElementById('changeBtn');
const content = document.querySelector('.content');
const h1 = content.querySelector('h1');
const p = content.querySelector('p');

const images = [
  './images/3.jpg',
  './images/4.jpg',
  './images/2.jpg'
];

const titles = ['Switzerland', 'Thailand', 'Ladakh'];
const descriptions = ['best vacation', 'best nature', 'best roadtrip'];

let currentImageIndex = 0;

function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imageUrl = `url(${images[currentImageIndex]})`;
  container1.style.backgroundImage = imageUrl;
  h1.textContent = titles[currentImageIndex];
  p.textContent = descriptions[currentImageIndex];
}

changeBtn.addEventListener('click', () => {
  changeBackgroundImage();
});


// container2 scripting data 
let counter = 0; // Starting index of the video, background color, and font color arrays
const videos = [
    "./images/nature1.mp4",
    "./images/1.mp4",
    "./images/bgvideo.mp4",
    "./images/nature2.mp4",
    "./images/car_trip.mp4"
];
const backgroundColors = ["yellow", "red", "whitesmoke", "blue", "grey"];
const fontColors = ["black", "white", "black", "white", "white"];
const blogMainContent = [
    { title: "The Dream Place Of a Wonderer", description: "Chetan Sharma | Monali<br>1Min &nbsp;25Sec" },
    { title: "Remote Villegers Are The Best", description: "1Another Author | Another Person<br>2Min &nbsp;30Sec" },
    { title: "2Another Blog Title", description: "2Another Author | Another Person<br>2Min &nbsp;30Sec" },
    { title: "3Another Blog Title", description: "3Another Author | Another Person<br>2Min &nbsp;30Sec" },
    { title: "4Another Blog Title", description: "4Another Author | Another Person<br>2Min &nbsp;30Sec" }
    // Add more alternate content as needed
];

document.getElementById('incrementBtn').addEventListener('click', incrementCounter);
document.getElementById('decrementBtn').addEventListener('click', decrementCounter);

function incrementCounter() {
    counter = (counter + 1) % videos.length;
    updateContent();
}

function decrementCounter() {
    counter = (counter - 1 + videos.length) % videos.length;
    updateContent();
}
document.getElementById('playButton').addEventListener('click', function() {
    incrementCounter();
});


function updateContent() {
    document.getElementById('counter').innerText = counter + 1; // Add 1 to display human-friendly count

    // Update the source of the mid-blog video based on the counter
    const videoElement = document.getElementById('midVideo');
    videoElement.src = videos[counter];
    videoElement.load();

    // Update the background color of container2 based on the counter
    const container2Element = document.getElementById('container2');
    container2Element.style.backgroundColor = backgroundColors[counter];

    // Update the font color of the text content within container2 based on the counter
    const textContentElements = container2Element.getElementsByClassName('text-content');
    for (const element of textContentElements) {
        element.style.color = fontColors[counter];
    }
    // Update the font color of the <a> tags within left-container2 based on the counter
    const leftContainerLinks = document.querySelectorAll('.left-container2  a');
    for (const link of leftContainerLinks) {
        link.style.color = fontColors[counter];
    }
    // Update the content of blog-main based on the counter
    const blogMainTitle = document.querySelector('.blog-main h1');
    const blogMainDescription = document.querySelector('.blog-main p');

    blogMainTitle.innerHTML = blogMainContent[counter].title;
    blogMainDescription.innerHTML = blogMainContent[counter].description;

    // Update the source and content of the video within the figure tag
  const figureVideoElement = document.getElementById('myVideo');
  const figureCaptionElement = document.querySelector('.blog-video figcaption');

  // Ensure counter + 1 is within the bounds of the array
  const nextIndex = (counter + 1) % videos.length;

  figureVideoElement.src = videos[nextIndex];
  figureVideoElement.load();
  figureCaptionElement.innerHTML = blogMainContent[nextIndex].title; // Adjust this based on your requirements
}


// container3 js code
function toggleHiddenData() {
  const mainContainer = document.getElementById('lower-mid');
  const hiddenData = document.getElementById('hidden');
  const seeMoreButton = document.getElementById('seeMoreButton');

  hiddenData.style.display = (hiddenData.style.display === 'none') ? 'block' : 'none';
  seeMoreButton.textContent = (hiddenData.style.display === 'none') ? 'See More' : 'See Less';

  mainContainer.classList.toggle('auto-height'); // Toggle the auto-height class
}

