let isClicked = false;
function display() {
  if (!isClicked) {
    document.getElementById('menu').style.display = 'block';
    document.getElementById('option-head').style.visibility = 'hidden';
    document.getElementById('option1').style.display = 'none';
    document.getElementById('option2').style.display = 'block';
    isClicked = true;
  } else {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('option-head').style.visibility = 'visible';
    document.getElementById('option1').style.display = 'block';
    document.getElementById('option2').style.display = 'none';
    isClicked = false;
  }
}
