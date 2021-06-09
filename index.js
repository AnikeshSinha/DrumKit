// Detecting Button Press

const drumButtons = document.querySelectorAll('.drum').length;

for(let i = 0 ; i < drumButtons ; i++){
  document.querySelectorAll('.drum')[i].addEventListener('click',function(){
    // alert('I got clicked');
    // console.log(this.innerHTML)

    let buttonInnerText = this.innerHTML;

    makeSound(buttonInnerText);

    buttonAnimation(buttonInnerText);
    
    

  });
}
//  Detecting keyboard press
document.addEventListener('keypress',function(event){
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
      const tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      const tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      const tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      const tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      const snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      const crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      const kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
  
    default:console.log(buttonInnerText); 
      break;
  }

}

function buttonAnimation(currentKey){
  let activeButton = document.querySelector('.'+ currentKey);

  activeButton.classList.add('pressed');

  setTimeout(function(){
    activeButton.classList.remove('pressed');
  },100);
}