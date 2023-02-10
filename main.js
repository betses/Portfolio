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
    name: 'Eventify',
    title:
      'Eventify: Effortlessly Manage and Attend Events with a Click of a Button',
    image: 'image/eventify.PNG',
    technologies: ['React', 'Redux', 'Ruby on rails', 'Tailwind'],
    description:
      "Eventify is a full-stack web application built with React and Ruby on Rails. It is an event website that simplifies the process of posting, reserving, and deleting events with just a click of a button. Users can easily create, view, and manage events, making it a convenient platform for organizing and attending events of all kinds. The application's user- friendly interface and seamless integration with React and Ruby on Rails make it a powerful tool for managing events.",
    liveView: 'https://eventify-cap.netlify.app/',
    sourcecode: 'https://github.com/betses/Final-capstone--frontend',
  },
  {
    id: 1,
    name: 'ToDo App React',
    title:
      'React ToDo App: A Front-end Web Application Built with React for Task Management and Organization',
    image: 'image/todoReact.PNG',
    technologies: ['React', 'HTML5', 'CSS3', 'JavaScript'],
    description:
      'React ToDo App is a front-end web application built using the React library. It allows users to create and manage their to-do list by inputting tasks and marking them as complete. The app is designed to be simple and easy to use, providing an intuitive interface for adding, editing, and deleting tasks. The React architecture makes it highly responsive and efficient, ensuring a smooth user experience. With this ToDo App, users can easily keep track of their tasks and stay organized.',
    liveView: 'https://celebrated-semifreddo-675f84.netlify.app',
    sourcecode: 'https://github.com/betses/react-todo-app',
  },
  {
    id: 2,
    name: 'ToDo App',
    title:
      'ToDo App: A Front-end Web Application Built with Webpack for Task Management and Organization',
    image: 'image/todoApp.PNG',
    technologies: ['Ruby on rails', 'CSS', 'JavaScript', 'html', 'Webpack'],
    description:
      "ToDo App is a front-end web application built using Webpack. It allows users to create and manage their to-do list by inputting tasks and marking them as complete. The app is designed to be simple and easy to use, providing an intuitive interface for adding, editing, and deleting tasks. Webpack is used to bundle and optimize the app's assets, ensuring fast loading times and a smooth user experience.With this ToDo App, users can easily keep track of their tasks and stay organized.The app also take advantage of webpack's ability to optimize the code for production which makes it more efficient and faster to load for the end user",
    liveView: 'https://betses.github.io/webpack/index.html',
    sourcecode: 'https://github.com/betses/webpack',
  },
  {
    id: 3,
    name: 'Tomorrowland',
    title:
      'Tomorrowland World Tour 2022: A Fully Responsive and Interactive Website Built with HTML, CSS, and JavaScript',
    image: 'image/tomorrowland.JPG',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      "The Tomorrowland World Tour Concert website is a dynamic and fully responsive website built with HTML, CSS, and JavaScript. It is designed to provide a seamless user experience across all devices by fully adapting to the user's screen size.The website showcases the upcoming Tomorrowland World Tour Concert in 2022 and includes a home page and a separate about page.The website is built using JavaScript objects and functions, providing a rich and interactive user experience.It also features a functioning JavaScript modal menu, allowing users to easily navigate the website and access all of its features.The website is designed to be visually appealing and engaging, with an emphasis on showcasing the concert and providing users with all the information they need to know about the event.So, you can enjoy the website and also can get all the information about the concert.",
    liveView: 'https://betses.github.io/Tomorrowland/',
    sourcecode: 'https://github.com/betses/Tomorrowland',
  },
  {
    id: 4,
    name: 'Math Magician',
    title:
      'Simple Calculator: A React-based Web Application for Basic Arithmetic Operations',
    image: 'image/calculator.PNG',
    technologies: ['React', 'Html', 'CSS', 'JavaScript'],
    description:
      "The Math Magician is a web application built using React. It provides users with a basic calculator interface for performing mathematical calculations. The calculator supports the four basic arithmetic operations: addition, subtraction, multiplication, and division. The user can input numbers and operators using the calculator's buttons, and the result of the calculation is displayed on the screen.The React framework has been used to build this application, which allows for efficient updates to the calculator's display and easy handling of user input. The calculator is easy to use and provides a simple, yet powerful tool for performing basic arithmetic operations. It's a lightweight and responsive calculator that you can use to perform simple calculations quickly and easily.",
    liveView: 'https://dev--comfy-pudding-888292.netlify.app/',
    sourcecode: 'https://github.com/betses/math-magician-react',
  },
  {
    id: 5,
    name: 'Chiflix',
    title:
      'Chiflix: A Web-Based Movie Exploration and Interaction Platform Built with Webpack',
    image: 'image/chiflix.PNG',
    technologies: ['Webpack', 'HTML', 'CSS', 'JavaScript'],
    description:
      "Chiflix is a web-based application built using Webpack. It is a platform that allows users to explore the top 20 movies and interact with them. The users can view the list of movies, which are sorted by popularity and rating. They also can like and comment on the movies. The application uses an API to fetch and post user data, ensuring a seamless experience for the users. Webpack is used to bundle and optimize the application's assets, resulting in fast loading times and a smooth user experience.With Chiflix, users can discover new movies, interact with other users and express their opinions about the movies they have watched.The webpack optimizes the code for production which makes it more efficient and faster to load for the end user.",
    liveView: 'https://betses.github.io/JavaScript-group-capstone/',
    sourcecode: 'https://github.com/betses/JavaScript-group-capstone',
  },
  {
    id: 6,
    name: 'Bookstore',
    title:
      'Bookstore: Effortlessly Manage Your Books with JavaScript Classes and Local Storage',
    image: 'image/bookstore.PNG',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description:
      'Bookstore is a front-end application that utilizes JavaScript classes and modules to perform various functions such as adding books, deleting books, displaying a list of books, and managing all activities on Local Storage. It also integrates Luxon library to display the current time. The application utilizes the power of JavaScript classes and modules to make the process of managing books seamless and easy to use. It is an ideal solution for anyone looking to keep track of their books and manage them efficiently. The application’s use of Luxon library also adds a unique touch of real-time functionality to the project.',
    liveView: 'https://betses.github.io/Awesome-books-with-ES6',
    sourcecode: 'https://github.com/betses/Awesome-books-with-ES6',
  },
  {
    id: 7,
    name: 'Dota',
    title: 'Dota 2 Webapp: Your Mobile Companion for Dota 2 Items and Heroes',
    image: 'image/dota.PNG',
    technologies: ['React', 'Redux', 'JavaScript', 'Tailwind', 'API'],
    description:
      "Dota 2 Webapp is a mobile web application built using React and Redux, that allows users to easily check and browse the list of items and heroes in the popular game Dota 2. The application's user- friendly interface and integration with React and Redux makes it a powerful tool for Dota 2 players to access and explore the game's various items and heroes on the go. The application's focus on providing information on items and heroes in a concise and organized manner, makes it an ideal solution for Dota 2 players looking to stay up - to - date on the game's content.",
    liveView: 'https://dev--curious-tulumba-e347b8.netlify.app',
    sourcecode: 'https://github.com/betses/Dota2-webapp',
  },
  {
    id: 8,
    name: 'Budget App',
    title: 'Budget Manager: Take Control of Your Finances with Ruby on Rails',
    image: 'image/budget.PNG',
    technologies: ['Ruby on Rails', 'Tailwind', 'html'],
    description:
      'Budget Manager is a mobile web application built with Ruby on Rails that helps users easily manage their budget. The application allows users to create a list of transactions, each associated with a specific category. This allows users to view and track how much money they have spent on various products, giving them a clear picture of their spending habits. The user-friendly interface and Ruby on Rails integration make it a powerful tool for budget management. Additionally, the mobile-friendly design makes it easy to access and manage your budget on the go. This application is ideal for anyone looking to take control of their finances and make informed decisions about their spending.',
    liveView: 'https://budgetapp-mm88.onrender.com',
    sourcecode: 'https://github.com/betses/Budget-app',
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
<img id="snapshot" src='${myProjects[id].image}' alt="snapshot">
</div>
<div class="close-btn">
<img id="close-btn2" class="close-btn2" src='${myProjects[id].image}' onclick="modalDisplay()" alt="Mobile version snapshot">
</div>
<div class="modal-btns">
  <a target="_blank" href= '${myProjects[id].liveView}'>
  <button class="see-project-mbutton1" type="button">
  <div class='btn-modal'>
    <p>See Live</p>
    <img src="image/Icon-export.png" alt="" id="liveimg" />
    </div>
  </button>
  </a>
  <a target="_blank" href='${myProjects[id].sourcecode}'>
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
</div>
<div class="modal-text">
  <p>${myProjects[id].description}</p>
</div>
<div class="mob-modal-btns">
  <a target="_blank" href= '${myProjects[id].liveView}'>
  <button class="see-project-mbutton1" type="button">
  <div class='btn-modal'>
    <p>See Live</p>
    <img src="image/Icon-export.png" alt="" id="liveimg" />
    </div>
  </button>
  </a>
  <a target="_blank" href='${myProjects[id].sourcecode}'>
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
  <div class="card-image">
    <img class="card-image-tag" src='${myProjects[i].image}' alt="snapshot2">
  </div>
  <div class="my-works-text">
    <h2>${myProjects[i].name}</h2>
    <ul class="built-with">
     ${myProjects[i].technologies.map((tech) => `<li>${tech}</li>`).join('')}
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
const formData = {
  name: nameInput.value,
  email: emailInput.value,
  message: textInput.value,
};
function populateStorage() {
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: textInput.value,
  };
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
