//your JS code here. If required.
window.addEventListener('DOMContentLoaded', function() {
  const element = document.getElementById('level');
  let level = 0;
  let currentElement = element;

  while (currentElement.parentNode) {
    currentElement = currentElement.parentNode;
    level++;
  }

  alert("The level of the element is: " + level);
});
