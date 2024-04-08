//Team 3 - Scripts for our Project

//Function for testing
function alertTest(){  
  alert("test");
}

// JavaScript for the carousel on Index.html
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
      const offset = -currentIndex * (imageWidth + 10); /* Adicionando a largura da margem */
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
});

// JavaScript for the first question on the form on contactus.html
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

// JavaScript for the form on contactus.html
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

  if ((name) && (email) && (subscription) && (selectedOption)){
    //Hide Form
	  document.getElementById("myForm").style.display="none";    
    //Show message
    document.getElementById("myContentForm").innerHTML = "<div class='alert alert-success' role='alert'>" + name + ", thank you for your details. We will be in touch via " + email + " shortly.</div>";

  }else{
    alert("Something went wrong, please try again alter.")
  }
	
}

// Script for the Mini Game on index.html
function play(){

  //
  document.getElementById("gameMessage").innerHTML = '';

  const div = document.getElementById('contentPlay');
  const images = div.querySelectorAll('img'); 
  const count = images.length;
  let numbers = [];
  let numToCheck = "1";
  
    
  images.forEach(function(image) {
    image.setAttribute('data-value', '0');
    image.setAttribute('src', 'resources\\images\\question-mark.png'); 
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

// Script for the Mini Game on index.html
function shuffle(array) {
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Script for the Mini Game on index.html
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
      image.setAttribute('src', 'resources\\images\\dog-play.png');      
    }else if(image.getAttribute('data-value') == "2"){
      image.setAttribute('src', 'resources\\images\\cat-play.png');      
    }else{
      document.getElementById("gameMessage").innerHTML = "<div class='alert alert-warning' role='alert'>You need to click on 'Play!' first.</div>";
    }

    checkDog(dataValueSelected);

  });

}

// Script for the Mini Game on index.html
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

// Function to rotate carousel evry 5sec
setInterval(function() {
    document.getElementById('next-btn').click();
}, 5000);

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
window.onload = function() {
  // Image paths
  var images = ['resources/images/puppies1.jpg', 'resources/images/puppies2.jpg', 'resources/images/puppies3.jpg'];
  
  // Text for each image
  var texts = ['We are always excited when we have new litters - each one filled with adorable puppies ready to find their forever homes. Take a moment to read about adopting one of our puppies.', 'Our goal is to find each puppy a loving home where they can be part of the family. The dog’s welfare is our foremost consideration before a choice is made for placement', 'We have new litters born regularly, if you are interested in adopting a puppy please fill out the form below and we will be in touch. The PDF questionarie is available to download by clicking on the button below.'];
  
  // Start at the first image
  var currentIndex = 0;

  // Handle prevButton clicks
  document.getElementById('prevButton').addEventListener('click', function() {
      // Go to the previous image, or the last one if we're at the start
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
      
      // Show the current image and text
      document.getElementById('puppyImage').src = images[currentIndex];
      document.getElementById('puppyText').textContent = texts[currentIndex];
  });

  // Handle nextButton clicks
  document.getElementById('nextButton').addEventListener('click', function() {
      // Go to the next image, or the first one if we're at the end
      currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
      
      // Show the current image and text
      document.getElementById('puppyImage').src = images[currentIndex];
      document.getElementById('puppyText').textContent = texts[currentIndex];
  });
}


