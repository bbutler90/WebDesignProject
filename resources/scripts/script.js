//Team 3 - Scripts for our Project

   /******************************/
  /* JavaScripts for index.html */
 /* Created by Joao Cordio     */
/******************************/
//Functions startShake/stopShake/wait was created by Cordio to help user see that the game is starting
function startShake(id) {
  document.getElementById(id).classList.add('shake');  
}

function stopShake(id) {
  document.getElementById(id).classList.remove('shake');   
}

function wait(id){
  setTimeout(() => {
    stopShake(id);
  }, 1500);  
}

// Script for the Mini Game on index.html (created by Cordio)
function play(){

  //Clean the modal message
  document.getElementById("gameMessage").innerHTML = '';

  const div = document.getElementById('contentPlay');
  const images = div.querySelectorAll('img'); 
  const count = images.length;
  let numbers = [];
  let numToCheck = "1";

  
  // Start shake after 1 second
  startShake('imageGame0');
  startShake('imageGame1');
  startShake('imageGame2');

  // Stop shake after 5 second  
  wait('imageGame0');
  wait('imageGame1');
  wait('imageGame2');
  
    
  images.forEach(function(image) {
    image.setAttribute('data-value', '0');
    image.setAttribute('src', 'resources/images/question-mark.png'); 
  });

  //Create an Array with 1 (dog) and many 2(cats)
  for(let i= 0; i < count; i++){  

    if(numbers.includes(numToCheck)){
      numbers.push("2");
    }else{
      numbers.push("1");
    }   
  }

  //Shuffle the Array
  shuffledNumbers = shuffle(numbers);
  //Set the data value randomly
  for (let i = 0; i < shuffledNumbers.length; i++) { 
    const img = document.getElementById("imageGame"+i);
    img.setAttribute('data-value', shuffledNumbers[i]);   
  }

}

// Script for the Mini Game on index.html (created by Cordio)
function shuffle(array) {
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Script for the Mini Game on index.html (created by Cordio)
function setGameImages(element) {
  console.clear();
  const img = document.getElementById(element.id);
  const dataValueSelected = img.getAttribute('data-value');  

  const div = document.getElementById('contentPlay');
  const images = div.querySelectorAll('img'); 
  const count = images.length;
  let numbers = [];
  let numToCheck = "1";

  images.forEach(function(image) { 
      
    if(image.getAttribute('data-value') == "1"){
      image.setAttribute('src', 'resources/images/dog-play.png');      
    }else if(image.getAttribute('data-value') == "2"){
      image.setAttribute('src', 'resources/images/cat-play.png');      
    }else{
      document.getElementById("gameMessage").innerHTML = "<div class='alert alert-warning' role='alert'>You need to click on 'Play!' first.</div>";
    }

    checkDog(dataValueSelected);

  });

}

// Script for the Mini Game on index.html (created by Cordio)
function checkDog(element){
  console.clear();
  if(element == "1"){
    document.getElementById("gameMessage").innerHTML = "<div class='alert alert-success' role='alert'>Congratulations! You found the dog!</div>";
  }else if(element == "2"){
    document.getElementById("gameMessage").innerHTML = "<div class='alert alert-danger' role='alert'>You Lose! You found a cat!</div>";   
  }else{
    document.getElementById("gameMessage").innerHTML = "<div class='alert alert-warning' role='alert'>You need to click on 'Play!' first.</div>";
  }
}
// >>>> End: mini-game code <<<<

   /*******************************/
  /* JavaScript for the Carousel */
 /* Created by Joao Cordio      */
/*******************************/

// Code must be inside of the "DOMContentLoaded" otherwise an error is showing up, as the variable numImages needs the page loaded to be allocated 
document.addEventListener('DOMContentLoaded', function() {

    const carousel = document.getElementById('carousel-images');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const imageWidth = document.querySelector('.carousel-image').clientWidth;
    const numImages = document.querySelectorAll('.carousel-image').length;
    let currentIndex = 0;

    function goToIndex(index) {
      currentIndex = index;
      const offset = -currentIndex * (imageWidth + 10); // Adjust the width of the image
      carousel.style.transform = `translateX(${offset}px)`;
    }

    prevBtn.addEventListener('click', () => {
      if (currentIndex === 0) {
        goToIndex(numImages - 1);
      } else {
        goToIndex(currentIndex - 1);
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentIndex === numImages - 1) {
        goToIndex(0);
      } else {
        goToIndex(currentIndex + 1);
      }
    });
	
	// Audrius Skema: Set interval for automatic rotation
    setInterval(() => {
        if (currentIndex === numImages - 1) {
            goToIndex(0);
        } else {
            goToIndex(currentIndex + 1);
        }
    }, 5000); // Rotate every 5 seconds
});
// >>>> End: Carousel Code <<<<
// >>>> End: Index.html Code <<<<


// code to a button where user can go to the top
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.getElementById('btnTopo').style.display = 'block';
  } else {
    document.getElementById('btnTopo').style.display = 'none';
  }
});
// >>>> End: Carousel Code <<<<
// >>>> End: Index.html Code <<<<


// code to a button where user can go to the top
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    document.getElementById('btnTopo').style.display = 'block';
  } else {
    document.getElementById('btnTopo').style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// >>>> End: Scroll to the top button Code <<<<


   /**************************************/
  /* JavaScript for the Contact US page */
 /* Created by Joao Cordio             */
/**************************************/
// JavaScript for the first question on the form on contactus.html (by Joao Cordio)
function likeDog(){

  var option = document.getElementById("likeBernese").value; 
  
  if(option == "yes"){    
    
    //Hide "Wrong Option message"
    document.getElementById("wrongAnswer").classList.remove('d-block');
    document.getElementById("wrongAnswer").classList.add('d-none');

    //Show Form Options	
    document.getElementById("formOptions").classList.remove('d-none');
    document.getElementById("formOptions").classList.add('d-block');   

  }else if (option == "no"){

    //Hide Form Options
    document.getElementById("formOptions").classList.add('d-none');
    document.getElementById("formOptions").classList.remove('d-block');
    
    //Show "Wrong Option message"
    document.getElementById("wrongAnswer").classList.remove('d-none');
    document.getElementById("wrongAnswer").classList.add('d-block'); 

  }else{    

    //Hide "Wrong Option message"
    document.getElementById("wrongAnswer").classList.remove('d-block');
    document.getElementById("wrongAnswer").classList.add('d-none');

    //Hide Form Options	  
    document.getElementById("formOptions").classList.add('d-none');
    document.getElementById("formOptions").classList.remove('d-block');  
  }
}

// JavaScript for the form on contactus.html (by Joao Cordio)
function contactForm(){
  
	//Get name and Email
	var form = document.getElementById('myForm');
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var subscription = document.getElementById("subscribe").value;
	var options = form.elements['dogGender'];
	var selectedOption;

  for (var i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selectedOption = options[i].value;
    }
  }

  switch (isValidEmail(email)) {
    case true:
      if ((name) && (email) && (subscription) && (selectedOption)){
        //Hide Form
        document.getElementById("myForm").style.display="none";    
        //Show message
        document.getElementById("myContentForm").innerHTML = "<div class='alert alert-success' role='alert'>" + name + ", thank you for your details. We will be in touch via " + email + " shortly.</div>";    
        break;
      }else{  
          alert("Something went wrong, please try again alter.")
      }
    case false:
        alert("Please insert a valid email address.")
        break;
    default:
        console.log("If all else fails");
        break;
  }
  
}

//Functions created to avoid emails like "test@test" without .com (by Joao Cordio)
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
// >>>> End: Contact.html Code <<<<

   /**************************************/
  /* JavaScript for the About Us page   */
 /* Created by Audrius Skema           */
/**************************************/
// Audrius Skema: Script to display Quotes in a Popup
document.addEventListener('DOMContentLoaded', function () {
  var quoteElement = document.getElementById("quoteText");
  var quotePopup = document.getElementById("quotePopup");

  // Function to display the entire list of quotes in the popup
  function displayQuotes() {
    var quoteStorage = document.getElementById("quoteStorage"); // Quotes container
    var quotes = quoteStorage ? Array.from(quoteStorage.getElementsByTagName("p")).map(function(p) { return p.textContent; }) : [];
	// Extract the text content of each paragraph within the container
    // If quoteStorage is not found, default to an empty array
	
	// Check if the popup element exists
    if (quotePopup) {
      quotePopup.innerHTML = ''; // Clear existing content
      quotes.forEach(function (quote) { // For each quote create a paragraph in popup
        var listItem = document.createElement('p');
        listItem.textContent = quote;
        quotePopup.appendChild(listItem);
      });
      quotePopup.style.display = 'block'; // Make popup visible
    }
  }

  // Event listener for hovering over the quote element to display the popup
  quoteElement?.addEventListener("mouseover", function () { // Optional chaining operator to evaluate the object and prevent console errors
    displayQuotes();
  });

  // Event listener for moving the mouse out of the quote element to hide the popup
  quoteElement?.addEventListener("mouseout", function () { // Optional chaining operator to evaluate the object and prevent console errors
    quotePopup.style.display = 'none'; // Hide the popup
  });
});

   /****************************************/
  /* JavaScript for the Breed Health page */
 /* Created by Audrius Skema             */
/****************************************/
// Audrius Skema: Script to Toggle Hip Scoring table with the button
document.addEventListener("DOMContentLoaded", function() {
  var toggleButton = document.getElementById("toggleTableBtn");
  var healthTable = document.getElementById("healthTable");
  var contentBernergarde = document.getElementById("contentBernergarde");

  // Function to toggle the visibility of the table
  function toggleTableVisibility() {
    healthTable.classList.toggle("d-none");
  }

  // Function to hide the table
  function hideTable() {
    if (!healthTable.classList.contains("d-none")) {
      healthTable.classList.add("d-none");
    }
  }
  // Function to toggle table visibility when clicked on next heading 
  if (toggleButton && healthTable && contentBernergarde) {
    toggleButton.addEventListener("click", toggleTableVisibility);
    contentBernergarde.addEventListener("click", hideTable);
  }
});
// >>>> End: Aboutus.html / Breed Health.html Code <<<<

   /**************************************/
  /* JavaScript for the Our Dogs page   */
 /* Created by Brian Butler            */
/**************************************/
// Brian Butler: script to pop up a modal with dog info
document.addEventListener('DOMContentLoaded', function() {
  // Loop over all dog images
  document.querySelectorAll('.dog-img').forEach(function(dogImg) {
      // When an image is clicked get the dog's name, info, and image from the clicked image
      dogImg.addEventListener('click', function() {
          
          var dogName = dogImg.getAttribute('data-dog-name');
          var dogInfo = dogImg.getAttribute('data-dog-info');
          var dogImageSrc = dogImg.getAttribute('src');

          // Update the modal with the dog's info and image
          document.getElementById('dogModalLabel').textContent = dogName;
          document.getElementById('dogModalInfo').textContent = dogInfo;
          document.getElementById('dogModalImage').setAttribute('src', dogImageSrc);

          // Show modal
          var dogModal = new bootstrap.Modal(document.getElementById('dogModal'));
          dogModal.show();
      });
  });
});

//Brian Butler - Script for the carousel on the avaialblepuppies.html page
// Image paths
var images = ['resources/images/puppies1.jpg', 'resources/images/puppies2.jpg', 'resources/images/puppies3.jpg'];

// Text for each image
var texts = ['We are always excited when we have new litters - each one filled with adorable puppies ready to find their forever homes. Take a moment to read about adopting one of our puppies. Each of our puppies is given the utmost care and attention, ensuring they grow up healthy and happy. We work closely with veterinarians to ensure all our puppies are in the best of health before they go to their new homes. We also provide ongoing support and advice for new owners, helping you settle your new furry friend into your home. Our puppies are not just pets, they are family, and we are committed to helping each one find the perfect home. So why wait? Start the journey of adding a new member to your family today.', 'Our goal is to find each puppy a loving home where they can be part of the family. The dog’s welfare is our foremost consideration before a choice is made for placement. We believe that every puppy deserves a home where they will be loved, cared for, and treated as a member of the family. We take great care in assessing potential homes, ensuring that they can provide the necessary care and environment for our puppies. We prioritize the puppy\'s health, happiness, and well-being above all else. We also offer support and guidance to new owners, helping them understand the responsibilities that come with owning a dog.', 'We have new litters born regularly, and if you are interested in adopting a puppy, please fill out the form below and we will be in touch. The PDF questionnaire is available to download by clicking on the button below. We understand that adopting a puppy is a big decision, and we\'re here to help you every step of the way, We aim to provide all the necessary information to help you make an informed decision. Our puppies are raised with love and care, and we want to ensure they go to homes that can provide the same. So, if you\'re ready to open your heart and home to a new furry friend, fill out the form and start the adoption process today.'];

// Start at the first image
var currentIndex = 0;

window.onload = function() {
  // Handle prevButton clicks
  document.getElementById('prevButton')?.addEventListener('click', function() {
    // Go to the previous image, or the last one if we're at the start
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;

    // Show the current image and text
    document.getElementById('puppyImage').src = images[currentIndex];
    document.getElementById('puppyText').textContent = texts[currentIndex];
  });

  // Handle nextButton clicks
  document.getElementById('nextButton')?.addEventListener('click', function() {
    // Go to the next image, or the first one if at the end
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    
    // Show the current image and text
    document.getElementById('puppyImage').src = images[currentIndex];
    document.getElementById('puppyText').textContent = texts[currentIndex];
  });
}
// >>>> End: Ourdogs.html / Availablepuppies.html Code <<<<