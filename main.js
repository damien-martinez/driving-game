var $image = document.querySelector('.car-right');
var shiftPressed = false;
var intervalID;

var topCount = 0;
var leftCount = 0;

function moveDirection(event) {
  if (event.key === 'ArrowUp') {
    $image.setAttribute('class', 'car-up');
  } else if (event.key === 'ArrowDown') {
    $image.setAttribute('class', 'car-down');
  } else if (event.key === 'ArrowLeft') {
    $image.setAttribute('class', 'car-left');

  } else if (event.key === 'ArrowRight') {
    $image.setAttribute('class', 'car-right');

  }
  // console.log($image);

}

document.addEventListener('keydown', moveDirection);

function listenForShift(event) {
  if (event.code === 'Space') {
    if (shiftPressed === false) {
      intervalID = setInterval(moveCar, 16);
      shiftPressed = true;
    } else {
      clearInterval(intervalID);
      shiftPressed = false;
    }
  }
}

document.addEventListener('keypress', listenForShift);

function moveCar(event) {
  if ($image.getAttribute('class') === 'car-right') {
    leftCount += 5;
    $image.setAttribute('style', 'top:' + topCount.toString() + 'px; ' + 'left:' + leftCount.toString() + 'px');
  }

}

/* <img style="top:0px; left:0px" class="car" src="images/f1.svg" alt=""></img> */
