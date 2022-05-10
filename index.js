import apiProjects from "./objects/api-projects.js";
import toolProjects from "./objects/tool-projects.js";
import gameProjects from "./objects/games.js";
import cssArtProjects from "./objects/css-art.js";
import cloneProjects from "./objects/clone.js";

const menu = document.getElementById("menu");
const sideNav = document.getElementById("side-nav");
const projectsSection = document.getElementById("main-div");
const projectsNavbar = document.getElementById("projects-nav");

menu.addEventListener("click", () => {
  sideNav.classList.toggle("hidden");
  menu.classList.toggle("slide");
});

let currentProjects = apiProjects;

projectsNavbar.addEventListener("click", (e) => {
  switch (e.target) {
    case "API":
      currentProjects = apiProjects;
      break;
    case "Clone":
      currentProjects = cloneProjects;
      break;
    case "Games":
      currentProjects = gameProjects;
      break;
    case "Tools":
      currentProjects = toolProjects;
      break;
    case "CSS Art":
      currentProjects = cssArtProjects;
      break;
  }
});

window.onload = () => {
  for (let i = 0; i < currentProjects.length; i += 1) {
    for (let j = 0; j < currentProjects[i].languagesTools.length; j += 1) {
      projectsSection.innerHTML = `<div class="project">
  <img src=${currentProjects[i].image} alt="project">
  <h3>${currentProjects[i].title}</h3>
  <p class="description"></p>
  <div class="languages-tools">
  <span>${currentProjects[i].languagesTools}</span>
  </div>
  <button><a href=${currentProjects[i].liveUrl} target="_blank">See Project</a></button>
  <button><a href=${currentProjects[i].githubUrl} target="_blank">Github Repo</a></button>
  </div>`;
    }
  }
};
