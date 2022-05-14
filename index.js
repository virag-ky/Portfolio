import apiProjects from './objects/api-projects.js';
import toolProjects from './objects/tool-projects.js';
import gameProjects from './objects/games.js';
import cssArtProjects from './objects/css-art.js';
import cloneProjects from './objects/clone.js';
import otherProjects from './objects/other.js';

const menu = document.getElementById('menu');
const sideNav = document.getElementById('side-nav');
const projectsSection = document.getElementById('main-div');
const projectsNavbar = [...document.getElementsByClassName('projects-nav')];
const navProjects = document.getElementById('projects-navbar');
const projectsHeading = document.getElementById('projects-heading');
const contactHeading = document.getElementById('contact-heading');

menu.addEventListener('click', () => {
  sideNav.classList.toggle('hidden');
  menu.classList.toggle('slide');
});

const createProjects = (currentProjects) => {
  projectsSection.innerHTML = '';
  for (let i = 0; i < currentProjects.length; i += 1) {
    const projectsDiv = document.createElement('div');
    projectsDiv.setAttribute('class', 'project');
    projectsDiv.innerHTML = `
  <img src=${currentProjects[i].image} alt="project" id="image-${currentProjects[i].id}">
  <h3>${currentProjects[i].title}</h3>
  <div class="languages-tools"></div>
  <button class='see-project'>See Project</button>
  `;

    for (let j = 0; j < currentProjects[i].languagesTools.length; j += 1) {
      const span = document.createElement('span');
      span.innerText = currentProjects[i].languagesTools[j];

      const languagesToolsDiv = [
        ...document.getElementsByClassName('languages-tools'),
      ];
      languagesToolsDiv.forEach((div) => div.appendChild(span));
      projectsSection.appendChild(projectsDiv);
    }
  }
};

createProjects(otherProjects);

const seeProjects = (currentProject) => {
  const seeProjectBtn = [...document.querySelectorAll('.see-project')];

  seeProjectBtn.forEach((button, i) => button.addEventListener('click', () => {
    const popUp = document.createElement('div');
    popUp.classList.add('popup');
    popUp.innerHTML = `<button class="exit"><i class="fas fa-times"></i></button>
        <img src=${currentProject[i].image} alt="project" id="image-${currentProject[i].id}">
        <h2 class="popup-h2">${currentProject[i].title}</h2>
        <p>${currentProject[i].description}</p>
        <div class="buttons-div">
        <button><a href=${currentProject[i].liveUrl} target="_blank">See Live</a></button>
        <button><a href=${currentProject[i].githubUrl} target="_blank">See Repository</a></button>
        </div>
        `;

    const mainSection = document.querySelector('main');
    mainSection.appendChild(popUp);

    document.body.style.overflowY = 'hidden';
    sideNav.style.visibility = 'hidden';
    projectsSection.style.visibility = 'hidden';
    navProjects.style.visibility = 'hidden';
    projectsHeading.style.visibility = 'hidden';
    contactHeading.style.visibility = 'hidden';
    mainSection.classList.toggle('margin-zero');

    const exitBtn = [...document.querySelectorAll('.exit')];

    for (let k = 0; k < exitBtn.length; k += 1) {
      exitBtn[k].addEventListener('click', () => {
        popUp.remove();
        document.body.style.overflowY = 'scroll';
        projectsSection.style.visibility = 'visible';
        sideNav.style.visibility = 'visible';
        navProjects.style.visibility = 'visible';
        projectsHeading.style.visibility = 'visible';
        contactHeading.style.visibility = 'visible';
        mainSection.classList.toggle('margin-zero');
      });
    }
  }));
};
seeProjects(otherProjects);

projectsNavbar.forEach((item) => item.addEventListener('click', (e) => {
  switch (e.target.innerText) {
    case 'Clone':
      createProjects(cloneProjects);
      seeProjects(cloneProjects);
      break;
    case 'Games':
      createProjects(gameProjects);
      seeProjects(gameProjects);
      break;
    case 'Tools':
      createProjects(toolProjects);
      seeProjects(toolProjects);
      break;
    case 'CSS Art':
      createProjects(cssArtProjects);
      seeProjects(cssArtProjects);
      break;
    case 'Other':
      createProjects(otherProjects);
      seeProjects(otherProjects);
      break;
    case 'API':
      createProjects(apiProjects);
      seeProjects(apiProjects);
      break;
    default:
      createProjects(otherProjects);
  }
}));

const form = document.querySelector('form');
const email = document.getElementById('email');
const lowerCaseRegex = /[A-Z]/;
const errorMessage = document.getElementById('uppercase-email');
const emptyEmail = document.getElementById('empty-email');
const message = document.querySelector('textarea');
const emptyTextarea = document.getElementById('empty-textarea');

form.addEventListener('submit', (e) => {
  if (lowerCaseRegex.test(email.value.trim())) {
    e.preventDefault();
    errorMessage.classList.remove('hidden');
    emptyEmail.classList.add('hidden');
    emptyTextarea.classList.add('hidden');
  } else if (email.value === '') {
    e.preventDefault();
    emptyEmail.classList.remove('hidden');
    errorMessage.classList.add('hidden');
    emptyTextarea.classList.add('hidden');
  } else if (message.value === '') {
    e.preventDefault();
    errorMessage.classList.add('hidden');
    emptyEmail.classList.add('hidden');
    emptyTextarea.classList.remove('hidden');
  }
});
