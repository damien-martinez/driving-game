var $image = document.querySelector('.car');

function test(event) {
  if (event.key === 'ArrowUp') {
    $image.setAttribute('class', 'car-up');
  } else if (event.key === 'ArrowDown') {
    $image.setAttribute('class', 'car-down');
  } else if (event.key === 'ArrowLeft') {
    $image.setAttribute('class', 'car-left');

  } else if (event.key === 'ArrowRight') {
    $image.setAttribute('class', 'car-right');

  }

}

document.addEventListener('keydown', test);
