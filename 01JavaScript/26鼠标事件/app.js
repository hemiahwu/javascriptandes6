// 鼠标事件

const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click
// clearBtn.addEventListener('click', runEvent);

// double click
// clearBtn.addEventListener('dblclick', runEvent);

// mousedown
// clearBtn.addEventListener('mousedown', runEvent);

// mouseup
// clearBtn.addEventListener('mouseup', runEvent);

// mouseenter
// card.addEventListener('mouseenter', runEvent);

// mouseover
// card.addEventListener('mouseover', runEvent);

// mouseleave mouseout
// card.addEventListener('mouseleave', runEvent);
// card.addEventListener('mouseout', runEvent);

// mousemove
card.addEventListener('mousemove', runEvent);

function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
}
