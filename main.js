const form = document.getElementById('contact-me');
const emailInput = document.getElementById('user-email');
const error = document.getElementById('error');
const nameInput = document.getElementById('user-name');
const textInput = document.getElementById('text-area');

let isClicked = false;
let isClicked2 = false;
// eslint-disable-next-line no-unused-vars
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
const myProjects = [
  {
    id: 0,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },
  {
    id: 1,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },
  {
    id: 2,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },
  {
    id: 3,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },
  {
    id: 4,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },
  {
    id: 5,
    name: 'Multi-Post Stories Gain+Glory',
    title: 'Keeping track of hundreds of components',
    image: '',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html'],
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry"s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveView: '#',
    sourcecode: '#',
  },

];

// eslint-disable-next-line no-unused-vars
function modalDisplay() {
  if (isClicked2 !== true) {
    document.getElementById('modal-section').style.display = 'block';
    isClicked2 = true;
  } else {
    document.getElementById('modal-section').style.display = 'none';
    isClicked2 = false;
  }
}
const modalRender = (id) => {
  const modal = document.getElementById('modal-id');
  const wrapper = document.createElement('div');
  wrapper.className = 'modal-content';
  let element = '';
  element = `
<div class="close-btn-wrap">
<img id="close-btn" class="close-btn1" src="image/Disable2.png" onclick="modalDisplay()" alt="close button">
</div>
<div class="snapshot">
<img id="snapshot" src="image/Snapshoot-portfolio.png"  alt="snapshot">
</div>
<div class="close-btn">
<img id="close-btn2" class="close-btn2" src="image/Snapshoot-mob-portfolio.png" onclick="modalDisplay()" alt="Mobile version snapshot">
</div>
<div class="modal-btns">
  <a href= '${myProjects[id].liveView}'>
  <button class="see-project-mbutton1" type="button">
  <div class='btn-modal'>
    <p>See Live</p>
    <img src="image/Icon-export.png" alt="" id="liveimg" />
    </div>
  </button>
  </a>
  <a href='${myProjects[id].liveView}'>
  <button class="see-project-mbutton2" type="button">
    <div class='btn-modal'>
    <p>See Source</p>
    <img src="image/Icon-gitHub.png" alt="" id="gitimg" />
    </div>
  </button>
  </a>
</div>
<div class="modal-head">
  <h2>${myProjects[id].title}</h2>
    <ul class="skill-list">
      <li>Codekit</li>
      <li>Github</li>
      <li>javascript</li>
      <li id="mob-list">Bootsrap</li>
      <li id="mob-list">Terminal</li>
      <li id="mob-list">codepen</li>
    </ul>
</div>
<div class="modal-text">
  <p>${myProjects[id].description}</p>
</div>
<div class="mob-modal-btns">
  <a href= '${myProjects[id].liveView}'>
  <button class="see-project-mbutton1" type="button">
  <div class='btn-modal'>
    <p>See Live</p>
    <img src="image/Icon-export.png" alt="" id="liveimg" />
    </div>
  </button>
  </a>
  <a href='${myProjects[id].sourcecode}'>
  <button class="see-project-mbutton2" type="button">
    <div class='btn-modal'>
    <p>See Source</p>
    <img src="image/Icon-gitHub.png" alt="" id="gitimg" />
    </div>
  </button>
  </a>
</div>
 `;

  modal.appendChild(wrapper);
  wrapper.innerHTML = element;
  const close = document.getElementById('close-btn');
  const close2 = document.getElementById('close-btn2');

  close.addEventListener('click', () => {
    wrapper.innerHTML = '';
    modal.removeChild(wrapper);
  });
  close2.addEventListener('click', () => {
    wrapper.innerHTML = '';
    modal.removeChild(wrapper);
  });
};

const grid = document.getElementById('main-wrap');
const test = document.createElement('div');
test.className = 'grid-container';
let gridContainor = '';
for (let i = 0; i < myProjects.length; i += 1) {
  gridContainor = `
  <div class="my-work-card">
  <div class="card-image"></div>
  <div class="my-works-text">
    <h2>${myProjects[i].name}</h2>
    <ul class="built-with">
     ${
  myProjects[i].technologies.map((tech) => `<li>${tech}</li>`).join('')
}
    </ul>
    <button type="button" onclick="modalDisplay()"  class="work-button" id="my-work-button1" data-id="${
  myProjects[i].id
}">See Project</button>
  </div>
  </div>

  `;
  grid.appendChild(test);
  test.innerHTML += gridContainor;

  const mybutton = document.querySelectorAll('.work-button');
  mybutton.forEach((button) => {
    button.addEventListener('click', (e) => {
      modalRender(e.target.dataset.id);
    });
  });
}
form.addEventListener('submit', (event) => {
  let check = false;
  if (emailInput.value.toLowerCase() === emailInput.value) {
    check = true;
  }
  if (check === false) {
    event.preventDefault();
    error.innerText = 'Email must be in Lower Case';
    error.style.color = 'red';
  }
});

function setValue() {
  let data = null;
  data = JSON.parse(localStorage.getItem('formData'));
  nameInput.value = data.name;
  emailInput.value = data.email;
  textInput.value = data.message;
}
const formData = { name: nameInput.value, email: emailInput.value, message: textInput.value };
function populateStorage() {
  const formData = { name: nameInput.value, email: emailInput.value, message: textInput.value };
  localStorage.setItem('formData', JSON.stringify(formData));
  setValue();
}

const mybutton = document.getElementById('contact-button');
mybutton.addEventListener('click', () => {
  if (!localStorage.getItem(formData)) {
    populateStorage();
  } else {
    setValue();
  }
});

setValue();