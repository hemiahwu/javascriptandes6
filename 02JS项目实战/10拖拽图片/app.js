const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

function dragStart() {
  // 拖出来的时候 加上 hold classaz
  this.className += " hold";
  var self = this;
  setTimeout(function () {
    self.className = "invisible";
  }, 0);
}

function dragEnd() {
  this.className = "fill";
}

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragOver(e) {
  e.preventDefault();
  console.log("over");
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave(e) {
  this.className = "empty";
}

function dragDrop(e) {
  this.className = "empty";
  this.append(fill);
}
