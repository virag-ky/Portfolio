import apiProjects from './objects/api-projects.js';
import toolProjects from './objects/tool-projects.js';
import gameProjects from './objects/games.js';
import cssArtProjects from './objects/css-art.js';
import cloneProjects from './objects/clone.js';
import otherProjects from './objects/other.js';

const sideNav = document.getElementById('side-nav');
const projectsSection = document.getElementById('main-div');
const projectsNavbar = [...document.getElementsByClassName('projects-nav')];
const navProjects = document.getElementById('projects-navbar');
const projectsHeading = document.getElementById('projects-heading');
const contactHeading = document.getElementById('contact-heading');

window.addEventListener('DOMContentLoaded', () => {
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

  createProjects(apiProjects);

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
  seeProjects(apiProjects);

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
        createProjects(apiProjects);
    }
  }));

  const email = document.getElementById('email');
  const visitorName = document.getElementById('visitor-name');

  visitorName.addEventListener('input', () => {
    if (visitorName.validity.patternMismatch) {
      visitorName.setCustomValidity(
        'I am expecting only lower-case or upper-case letters!',
      );
      visitorName.reportValidity();
    } else {
      visitorName.setCustomValidity('');
    }
  });

  email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
      email.setCustomValidity('I am expecting an e-mail address!');
      email.reportValidity();
    } else {
      email.setCustomValidity('');
    }
  });
});
